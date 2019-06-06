let defaultState = {
    campaigns: [],
    rescheduleTime: ''
};

export default (state = defaultState, action={}) => {
    switch (action.type) {
        case 'GET_ALL_CAMPAIGNS': {
            return {...state, campaigns: action.payload}
        }
        case 'ADD_CAMPAIGN': {
            let allCampaigns = JSON.parse(JSON.stringify(state.campaigns));

            allCampaigns.push(action.payload);

            return {...state, campaigns: allCampaigns}
        }
        case 'SET_RESCHEDULE_TIME': {
            return {...state, rescheduleTime: action.payload}
        }
        default: return state;
    }
};
