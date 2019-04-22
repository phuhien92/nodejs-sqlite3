import React from 'react';
import Head from 'next/head'
import { Provider } from "react-redux";
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import initialState from '../store';
import * as types from '../actions/actionTypes';

class MainApp extends App {

    static async getInitialProps({Component, ctx, req}) {
        // we can dispatch from here too
        ctx.store.dispatch({type: types.SHOW_PAGE_LOADING, payload: true});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Head>
                    <title>App Title in _app.js ....</title>
                </Head>
                <ThemeProvider theme={{mode: 'dark'}}>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </ThemeProvider>
            </Container>
        );
    }

}

export default withRedux(initialState)(MainApp);