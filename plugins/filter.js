import Vue from 'vue';
import moment from 'moment';

Vue.use(moment)

Vue.filter('filterDate', function(){
    return moment().format('DD.MM.YYYY');
});