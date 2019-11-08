import BiButton from "./components/button/BiButton";
import BiContainer from "./components/container/BiContainer";
import BiInputBox from "./components/inputBox/BiInputBox";
import BiModal from "./components/modal/BiModal";
import BiPopconfirm from "./components/Popconfirm";
import BiSearch from "./components/search/BiSearch";
import BiSpin from "./components/spin/BiSpin";
import BiTag from "./components/tag/BiTag";
import BiTimeline from "./components/timeline/BiTimeline";
import BiTransfer from "./components/transfer/BiTransfer";
import BiAirview from "./components/airview/BiAirview";
import BiNotFound from "./components/notfound/BiNotFound";
import BiNotificationAPI from "./components/notification/BiNotificationApi";
import BiCabinetComponent from "./components/cabinet/index"

const components = {
  BiButton,
  BiContainer,
  BiInputBox,
  BiModal,
  BiPopconfirm,
  BiSearch,
  BiSpin,
  BiTag,
  BiTimeline,
  BiTransfer,
  BiAirview,
  BiNotFound,
  BiNotificationAPI,
  BiCabinetComponent
}

const install = function(Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components
};

// 导出， 语句替换了一下
/*module.exports.default = module.exports = API;*/
export default API;
