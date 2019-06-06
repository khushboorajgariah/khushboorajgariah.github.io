import React, { Component } from 'react';
import './index.css';
import {commonConstants} from "../../constants";

export default class TitleBar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let { tabList, selectedTab } = this.props;

        return (
            <div className={'title-bar'}>
                <div>
                    <img className={'logo'} src={'/images/logo.png'}/>
                    <div className={'app-version inline-block'}>BETA</div>
                </div>
            </div>
            )
    }

};
