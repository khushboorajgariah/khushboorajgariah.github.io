import React, { Component, Fragment as F } from 'react';
import { connect } from 'react-redux';
import TitleBar from "../../components/TitleBar/index";
import Modal from "../../components/Modal/index";
import {commonConstants} from "../../constants";
import DateUtil from '../../utils/dateUtil'
import actions from './actions'
import './home.css'
import {Button} from "../../components/Button/index";

class Home extends Component {

    constructor(props) {
        super(props);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onAddCampaign = this.onAddCampaign.bind(this);
    }

    componentWillMount() {
        this.props.getAllCampaigns();
    }

    onAddCampaign(campaign) {
        let newCampaign = JSON.parse(JSON.stringify(campaign)),
            { rescheduleTime } = this.props.home;

        newCampaign.createdOn = rescheduleTime;

        this.props.addCampaign(newCampaign);
    }

    onClickReschedule() {
        this.props.setRescheduleTime('');
    }

    onChangeTime(event) {
        let newTime = DateUtil.convertHtmlDateIntoMilliseconds(event.target.value);

        this.props.setRescheduleTime(newTime);
    }

    getRescheduleContent(campaign) {
        let { rescheduleTime } = this.props.home;

        return (
            <F>
                <div>
                    <label>Date</label>
                    <input type='date' value={DateUtil.convertMillisecondsIntoHtmlTime(rescheduleTime)} onChange={this.onChangeTime}/>
                </div>
                <div className={'cta-container'}>
                    <Button solid text={'Create'} onClick={()=>this.onAddCampaign(campaign)}/>
                </div>
            </F>
        )
    }

    renderStaticColumns(campaign) {
        let { name, price, csv, report } = campaign;
        return (
            <F>
                <td>
                    <Modal trigger={<div>View Pricing</div>} content={<div><h4>{name}</h4><h5>{price}</h5></div>}/>
                </td>
                <td>
                    <Modal trigger={<div className={'inline-block'}>CSV</div>} content={<div><h4>{name}</h4><h5>{csv}</h5></div>}/>
                    <Modal trigger={<div className={'inline-block'}>Report</div>} content={<div><h4>{name}</h4><h5>{report}</h5></div>}/>
                    <Modal trigger={<div className={'inline-block'} onClick={this.onClickReschedule}>Schedule Again</div>} content={this.getRescheduleContent(campaign)}/>
                </td>
            </F>
        )
    }

    renderTableRows() {
        let { campaigns = [] } = this.props.home;

        return campaigns.map((campaign, index) => {
            let { createdOn, name, region } = campaign;
            return (
                <tr key={index}>
                    <td>{DateUtil.formatIntoTimeAgo(createdOn)}</td>
                    <td>
                        <div>{name}</div>
                        <div>{region}</div>
                    </td>
                    {this.renderStaticColumns(campaign)}
                </tr>
            )
        })
    }
    renderTable() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>CAMPAIGN</th>
                        <th>VIEW</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        )
    }

    render () {
        return (
            <div className={'home'}>
                <TitleBar/>
                <div className={'content'}>
                    <div className={'heading'}>MANAGE CAMPAIGNS</div>
                    {this.renderTable()}
                </div>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        home:state.home
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCampaigns: () => {
            dispatch(actions.getAllCampaigns());
        },
        addCampaign: (campaign) => {
            dispatch(actions.addCampaign(campaign));
        },
        setRescheduleTime: (time) => {
            dispatch(actions.setRescheduleTime(time));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);