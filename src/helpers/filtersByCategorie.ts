import moment from 'moment';
import {ChildrenProps} from '../screens/types';

const filterByCategories = (value: number, data: ChildrenProps[]) => {
  switch (value) {
    case 0:
      return data.sort(function (a, b) {
        if (
          moment(a.data.created_utc).format() >
          moment(b.data.created_utc).format()
        ) {
          return 1;
        }
        if (
          moment(a.data.created_utc).format() <
          moment(b.data.created_utc).format()
        ) {
          return -1;
        }

        return 0;
      });
    case 1:
      return data.sort(function (a, b) {
        if (moment(a.data.score) < moment(b.data.score)) {
          return 1;
        }
        if (moment(a.data.score) > moment(b.data.score)) {
          return -1;
        }

        return 0;
      });
    case 2:
      return data.sort(function (a, b) {
        if (moment(a.data.likes) < moment(b.data.likes)) {
          return 1;
        }
        if (moment(a.data.likes) > moment(b.data.likes)) {
          return -1;
        }

        return 0;
      });
    case 3:
      return data.sort(function (a, b) {
        if (moment(a.data.score) < moment(b.data.score)) {
          if (moment(a.data.num_comments) < moment(b.data.num_comments)) {
            return 1;
          }
        }
        if (moment(a.data.score) > moment(b.data.score)) {
          if (moment(a.data.num_comments) > moment(b.data.num_comments)) {
            return -1;
          }
        }

        return 0;
      });
    default:
      break;
  }
};

export default filterByCategories;
