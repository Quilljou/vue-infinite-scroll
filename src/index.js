import InfiniteScroll from './directive';
import {
  DIRECTION
} from './constants';

const install = function(Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll);
};

if (window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
infiniteScroll.DIRECTION = DIRECTION;
export default InfiniteScroll;
