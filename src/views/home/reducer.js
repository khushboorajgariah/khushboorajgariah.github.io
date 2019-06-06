let defaultState = {
    selectedTab: 'CARD'
};

export default (state = defaultState, action={}) => {
    switch (action.type) {
        case 'GET_ALL_CAMPAIGNS': {
            return {...state, campaigns: action.payload}
        }
        default: return state;
    }
};
