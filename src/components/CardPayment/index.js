import React, { Fragment as F, Component } from 'react';
import './index.css';
import moment from 'moment'
import {commonConstants} from "../../constants";

export default class CardPayment extends Component {
    constructor(props) {
        super(props);
    }

    onChangeNumber(number) {
        this.props.onChangeNumber(number);
        if (number.length === 4) {
            this.props.onChangeCardType(commonConstants.cardTypeVsFirstDigit[number.charAt(0)]);
        } else if(number.length < 4){
            this.props.onChangeCardType('');
        }
    }

    onChangeCvv(cvv, cardType) {
        let max = commonConstants.cardTypeVsCvv[cardType];

        if(cvv.length <= max) this.props.onChangeCvv(cvv);
    }

    render(){
        let date = moment(new Date(), "DD-MM-YYYY").add('days', 1).format('YYYY-MM-DD'),
            { onChangeName, onChangeNumber, onChangeExpiry, onChangeCvv, data } = this.props,
            { name, number, expiry, cvv, cardType } = data;

        return (
            <div className={'card-payment'}>
                <div className={'input-container'}>
                    <label htmlFor={'name'}>NAME ON CARD</label>
                    <input name={'name'} type={'text'}
                           value={name}
                           placeholder={'Enter your name'}
                           onChange={(e)=>onChangeName(e.target.value)}
                    />
                </div>
                <div className={'input-container'}>
                    <label htmlFor={'card-number'}>CARD NUMBER*</label>
                    <input name={'card-number'}
                           type={'number'}
                           value={number}
                           placeholder={'Enter your number'}
                           onChange={(e)=>this.onChangeNumber(e.target.value)}/>
                    <span>{cardType}</span>
                </div>
                {cardType ? <F>
                    <div className={'input-container'}>
                        <label htmlFor={'card-number'}>EXPIRATION DATE</label>
                        <input name={'card-number'}
                               type={'date'}
                               min={date}
                               value={expiry}
                               placeholder={'MM/YY'}
                               onChange={(e)=>onChangeExpiry(e.target.value)}/>
                    </div>
                    <div className={'input-container'}>
                        <label htmlFor={'card-number'}>CVV</label>
                        <input name={'card-number'}
                               type={'number'}
                               value={cvv}
                               placeholder={'CVV'}
                               onChange={(e)=>this.onChangeCvv(e.target.value, cardType)}/>
                    </div>
                </F> : ''}
            </div>
        )
    }
};
