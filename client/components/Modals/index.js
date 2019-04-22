import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import AvaiModal from '../Modals/avaiModal';
import styled from 'styled-components';
import { hideModal } from '../../actions';

const mapStateToProps = (state) => ({
    ...state.modal
})

const mapDispatchToProps = (dispatch) => ({
    hideModal: () => dispatch(hideModal())
})

const StyledModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
`;

const StyledModal = styled.div`
    top                   : 0;
    left                  : 0;
    width                 : 100%;
    height                :  100%;
    position              : fixed;
    z-index: 1041;
    
    &.fade {
        transition: opacity .15s linear;
    }
`;
  

class ModalContainer extends React.Component {
    state = {
        modalIsOpen: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                modalIsOpen: nextProps.modalProps.on
            })
        }
    }

    closeModal = () => {
        this.setState({modalIsOpen: false}, () => {
            this.props.hideModal()
        })
    }

    render() {
        if (!this.props.modalType) {
            return null;
        }
         
        const view = this.props.modalType === "availability" ? (
            <AvaiModal closeModal={this.closeModal} {...this.props.modalProps} />
        ) : null;

        return (
            <React.Fragment>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    overlayClassName="modal fade show"
                    bodyOpenClassName="modal-open"
                    className="modal-dialog modal-dialog-centered"
                    contentLabel=""
                    ariaHideApp={false}
                >
                    <StyledModal className={this.props.modalBackdrop ? 'fade':''}>{view}</StyledModal>
                </ReactModal>
                { this.state.modalIsOpen ? <StyledModalBackdrop/>:null}
            </React.Fragment>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)