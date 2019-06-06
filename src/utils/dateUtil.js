import moment from 'moment'

const formatIntoTimeAgo = (milliseconds) => {
    if (Math.abs(moment().diff(milliseconds)) < 25000) {
        return 'just now';
    }
    return moment(milliseconds).fromNow(true) + ' ago';
};

const DateUtil = {
    formatIntoTimeAgo: formatIntoTimeAgo
};

export default DateUtil;