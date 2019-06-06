import React, { Component } from 'react';
import './index.css';
import Popup from "reactjs-popup";

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="popup">
                <Popup trigger={this.props.trigger}
                       modal={true}
                       closeOnDocumentClick={true}>
                    {close => (
                        <div className="modal">
                            <a className="close"  onClick={()=> {
                                close()
                            }}>
                                &times;
                            </a>
                            {(() => {
                                if(!this.props.header) return;
                                return <div className="popup-header">
                                    {this.props.header}
                                </div>
                            })()}
                            <div className="popup-content">
                                {this.props.content}
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        )
    }
};
