import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import initialState from '../store';
import * as types from './../actions/actionTypes';
import BodyWrapper from "../components/BodyWrapper";

class MainApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        ctx.store.dispatch({type: types.SHOW_PAGE_LOADING, payload: true});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(initialState)(MainApp);