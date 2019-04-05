import React from 'react';

import Portal from './../Modal/Portal';

class AvaiModal extends React.Component {

    render () {

        return (
            <React.Fragment>
              <Portal selector='#modal-root'>
                <div className='overlay'>
                  <div className='modal'>
                    <p>
                      This modal is rendered using{' '}
                    </p>
                    <button type='button' onClick={this.props.closeModal}>
                      Close Modal
                    </button>
                  </div>
                  <style jsx global>{`
                    body {
                      overflow: hidden;
                    }
                  `}</style>
                  <style jsx>{`
                    .overlay {
                      position: fixed;
                      background-color: rgba(0, 0, 0, 0.7);
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                      z-index: 9999;
                    }
                    .modal {
                      background-color: white;
                      position: absolute;
                      top: 10%;
                      right: 10%;
                      bottom: 10%;
                      left: 10%;
                      padding: 1em;
                    }
                  `}</style>
                </div>
              </Portal>
          </React.Fragment>
        )
    }
}

export default AvaiModal