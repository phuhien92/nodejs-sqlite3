import React from 'react'
import styled, { css } from 'styled-components';
import Button from '../Button';

const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
    width: 800px;
    margin: 30px auto auto auto;
`;

const ModalHeader = styled.div`
    position: relative;
`;

const ModalBody = styled.div`
    position: relative;
`;

const ModalFooter = styled.div`
    background-color: #EEEFF1;
    border-top: 1px solid #DBDCDE;
    padding: 10px 0;
    text-align: right;
`;

const ModalTitle = styled.h2`
    text-align: center;
`;

const StyledCloseButton = styled.img`
    font-size: 40px;
    font-weight: 100;
    position: absolute;
    right: 10px;
    top: 10px;
    padding-top: 0;
    margin-top: 0;
    margin-right: 10px;
    cursor: pointer;
`;

class AvaiModal extends React.Component {

    state = {
        isSubmitting: false
    }

    cancel = () => {
        return this.state.isSubmitting ? false:this.props.closeModal();
    }

    save = () => {
        this.setState({isSubmitting: !this.state.isSubmitting})
        return false;
    }

    render() {
        let {
            isSubmitting
        } = this.state;

        return (
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>
                        Avai Modal
                    </ModalTitle>
                    <StyledCloseButton src='/images/cross.png' onClick={this.cancel}></StyledCloseButton>
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button
                        size='large'
                        icon={isSubmitting ? "loader":""}
                        disabled={isSubmitting}
                        onClick={this.save}
                    >Done</Button>
                    <Button
                        link
                        size='large'
                        onClick={this.cancel}
                        disabled={isSubmitting}
                    >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        )
    }
}

export default AvaiModal;