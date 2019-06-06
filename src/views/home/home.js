import React, { Component, Fragment as F } from 'react';
import { connect } from 'react-redux';
import TitleBar from "../../components/TitleBar/index";
import Modal from "../../components/modal/index";
import {commonConstants} from "../../constants";
import DateUtil from '../../utils/dateUtil'
import actions from './actions'
import './home.css'

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAllCampaigns();
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
                    <Modal trigger={<div className={'inline-block'}>Schedule Again</div>} content={<div><h4>{name}</h4><h5>{price}</h5></div>}/>
                </td>
            </F>
        )
    }

    renderTableRows() {
        let { campaigns = [] } = this.props.home;

        return campaigns.map((campaign) => {
            let { createdOn, name, region } = campaign;
            return (
                <tr>
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);