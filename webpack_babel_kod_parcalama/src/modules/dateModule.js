import moment from 'moment';
import localization from 'moment/locale/tr';

export const getCurrentDate = () => {
    return moment()
        .locale('tr', localization)
        .format('DD MMMM YYYY - HH:mm:ss ');
}