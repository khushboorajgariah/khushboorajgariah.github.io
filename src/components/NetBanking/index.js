import React, { Fragment as F, Component } from 'react';
import './index.css';

export default class NetBanking extends Component {
    constructor(props) {
        super(props);
    }

    renderDefaultBanks() {
        //dummy data
        let defaultBanks = [
            'SBI',
            'ICICI'
        ];

        return defaultBanks.map((bank, ind) => {
            return (
                <div key={`bank_${ind}`} className={'bank-name'}>
                    <span>{bank}</span>
                </div>
            )
        })
    }

    getFilteredList(allBanks) {
        let { searchString } = this.props,
            output = [];

        if(!searchString) return [];
        allBanks.forEach((bank) => {
           if(bank.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
               output.push(bank);
           }
        });

        return output;
    }

    formatName(name, searchString) {
        let indexOfSearchString = name.indexOf(searchString);

        return (
            <F>
                <span>{name.substring(0, indexOfSearchString)}</span>
                <span className={'bold'}>{name.substring(indexOfSearchString, searchString.length)}</span>
                <span>{name.substring(indexOfSearchString+searchString.length+1, name.length)}</span>
            </F>
        )
    }

    renderResults(allBanks) {
        let filteredList = this.getFilteredList(allBanks),
            { searchString } = this.props;

        return filteredList.map((bank) => {
            return (<div>{this.formatName(bank, searchString)}</div>)
        })
    }

    render(){
        //dummyData
        let allBanks = ['Bank of Baroda', 'Bank of India', 'Bank of Maharashtra', 'RBI Bank', 'SBI', 'PNB'],
            { searchString } = this.props;
        return (
            <div className={'net-banking'}>
                <div className={'default-banks'}>{this.renderDefaultBanks()}</div>
                <div className={'search-container'}>
                    <input type={'text'}
                           placeholder={'Search by bank name'}
                           value={searchString}
                           onChange={(e)=>this.props.onSearch(e.target.value)}
                    />
                </div>
                <div className={'result-list'}>{this.renderResults(allBanks)}</div>
            </div>
        )
    }

};
