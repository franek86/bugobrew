import Vue from 'vue';
import moment from 'moment';

Vue.use(moment);

Vue.filter('filterDate', function(created){
    return moment(created).format('DD.MM.YYYY');
});