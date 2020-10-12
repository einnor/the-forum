import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function formatDate([date, format = 'LLL']) {
  return moment(date).format(format);
});
