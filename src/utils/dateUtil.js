import moment from 'moment'

const formatIntoTimeAgo = (milliseconds) => {
        let suffix = ' from now';

        if (Math.abs(moment().diff(milliseconds)) < 25000) {
            return 'just now';
        }

        if(moment().diff(milliseconds) > 0) suffix = ' ago';
        return moment(milliseconds).fromNow(true) + suffix;
    },

    convertHtmlDateIntoMilliseconds = (string) => {
        return moment(string, 'YYYY-MM-DD').valueOf();
    },

    convertMillisecondsIntoHtmlTime = (milliseconds) => {
        return moment(milliseconds).format('YYYY-MM-DD');
    };

const DateUtil = {
    formatIntoTimeAgo: formatIntoTimeAgo,
    convertHtmlDateIntoMilliseconds: convertHtmlDateIntoMilliseconds,
    convertMillisecondsIntoHtmlTime: convertMillisecondsIntoHtmlTime
};

export default DateUtil;