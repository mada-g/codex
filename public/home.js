webpackJsonp([1],{0:function(e,t,a){e.exports=a(229)},229:function(e,t,a){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function t(e){return e&&e.__esModule?e:{"default":e}}var n=a(2),r=t(n),l=a(154),o=a(155),i=a(169),u=t(i),c=a(170),s=a(171),f=a(230),d=t(f),p=a(231),g=(e(p),a(233)),v=t(g),y=a(234),m=t(y);a(238);var h=window.__init_state,b=null;b=h?{data:h,app:{deletingpage:!1}}:v["default"],b=(0,c.fromJS)(b);var E=(0,o.applyMiddleware)(u["default"])(o.createStore)(d["default"],b);console.log("CODEX by Georges Madalinski"),(0,l.render)(r["default"].createElement(s.Provider,{store:E},r["default"].createElement(m["default"],null)),document.getElementById("react-view"))}).call(this)}finally{}},230:function(e,t,a){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(170),r=(0,n.Map)();t["default"]=function(e,t){switch(void 0===e&&(e=r),t.type){case"DELETE_PAGE_IN_PROG":return e.setIn(["app","deletingpage"],!0);case"DELETE_PAGE_END":return e.setIn(["app","deletingpage"],!1);case"REMOVE_PAGE_INFO":var a=function(){var a=null,n=null,r=null;return n=e.getIn(["data","drafts"]).toJS(),r=n.findIndex(function(e){return e.pageid===t.pageid}),r>=0?a="drafts":(n=e.getIn(["data","published"]).toJS(),r=n.findIndex(function(e){return e.pageid===t.pageid}),r>=0?a="published":r=null),a?{v:e.updateIn(["data",a],function(e){return e["delete"](r)})}:{v:e}}();if("object"==typeof a)return a.v;default:return e}},e.exports=t["default"]}).call(this)}finally{}},231:function(e,t,a){try{(function(){"use strict";function e(){return function(e){var t={title:"My New Adventure"};return(0,i.ajaxSendData)("/codex/create",JSON.stringify(t))}}function n(e){return{type:"REMOVE_PAGE_INFO",pageid:e}}function r(){return{type:"DELETE_PAGE_IN_PROG"}}function l(){return{type:"DELETE_PAGE_END"}}function o(e){return function(t,a){return t(r()),(0,i.ajaxGetData)("/codex/delete-page?pageid="+e).then(function(a){return t(l()),a.status?t(n(e)):a})["catch"](function(e){return t(l())})}}Object.defineProperty(t,"__esModule",{value:!0}),t.createPage=e,t.removePageInfo=n,t.deletePageInProg=r,t.deletePageEnd=l,t.deletePage=o;var i=(a(170),a(232))}).call(this)}finally{}},232:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){return new Promise(function(a,n){o["default"].ajax({type:"POST",dataType:"json",contentType:"application/json",url:e,data:t,success:function(e){a(e)}})})}function r(e){return new Promise(function(t,a){o["default"].get(e,function(e){t(e)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.ajaxSendData=n,t.ajaxGetData=r;var l=a(191),o=e(l)}).call(this)}finally{}},233:function(e,t,a){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:{username:"user",drafts:[{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"Example Blog: The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"}],published:[]},app:{deletingpage:!1}},e.exports=t["default"]}).call(this)}finally{}},234:function(e,t,a){try{(function(){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{data:e.get("data").toJS(),app:e.get("app").toJS()}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=l,a=o,n=!0,i=c=void 0}},s=a(2),f=r(s),d=a(171),p=(a(170),a(231)),g=n(p),v=a(235),y=r(v),m=a(236),h=r(m),b=a(237),E=r(b),P=function(e){function t(){var e=this;l(this,t),c(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.handleAddPage=function(){e.setState({visib:!e.state.visib}),e.props.createPage().then(function(e){e.status&&(window.location="/codex/editor/"+e.pageid)})},this.state={visib:!0}}return o(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("div",{className:"app"},f["default"].createElement("div",{className:"icons-loader"},f["default"].createElement("img",{src:"/assets/icons/rolling.gif"})),f["default"].createElement(y["default"],null),f["default"].createElement(h["default"],{handleClick:this.handleAddPage}),f["default"].createElement("div",{className:"allPages group "+(this.state.visib?"visib":"no-visib")},f["default"].createElement("div",{className:"list left-list"},f["default"].createElement(E["default"],{pages:this.props.data.drafts,title:"drafts",side:"left",deletingpage:this.props.app.deletingpage,deletePage:this.props.deletePage,removePageInfo:this.props.removePageInfo})),f["default"].createElement("div",{className:"list right-list"},f["default"].createElement(E["default"],{pages:this.props.data.published,title:"published",side:"right",deletingpage:this.props.app.deletingpage,deletePage:this.props.deletePage,removePageInfo:this.props.removePageInfo}))))}}]),t}(f["default"].Component);t["default"]=(0,d.connect)(i,g)(P),e.exports=t["default"]}).call(this)}finally{}},235:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=l,a=o,n=!0,i=c=void 0}},u=a(2),c=n(u),s=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return l(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"headerBar"},c["default"].createElement("div",{className:"tool-sect page-tools"},c["default"].createElement("div",{className:"toolbox"},c["default"].createElement("div",{className:"toolbox-box app-title"},"codex"))))}}]),t}(c["default"].Component);t["default"]=s,e.exports=t["default"]}).call(this)}finally{}},236:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=l,a=o,n=!0,i=c=void 0}},u=a(2),c=n(u),s=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return l(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"addPage"},c["default"].createElement("div",{className:"addPage-box",onClick:this.props.handleClick},"+ new page"))}}]),t}(c["default"].Component);t["default"]=s,e.exports=t["default"]}).call(this)}finally{}},237:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=l,a=o,n=!0,i=c=void 0}},u=a(2),c=n(u),s=function(e){function t(){var e=this;r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.reqDelete=function(){e.props.deletePage(e.state.pageFocusId).then(function(){e.setState({dialogue:!1,pageFocusId:null,pageFocusTitle:null})})},this.handleDeletePage=function(t,a){return function(){e.setState({dialogue:!0,pageFocusId:t,pageFocusTitle:a})}},this.renderDeleteDialogue=function(){return c["default"].createElement("div",{className:"deleteDialogue"},c["default"].createElement("div",{className:"dialogueBox"},c["default"].createElement("div",{className:"dialogueQuestion"},c["default"].createElement("div",null,"Are you sure you want to delete"),c["default"].createElement("div",{className:"page-focus-title"},e.state.pageFocusTitle," ?")),e.props.deletingpage?c["default"].createElement("div",{className:"dialogue-deleting-prog"},c["default"].createElement("img",{src:"/assets/icons/rolling.gif"})):c["default"].createElement("div",{className:"dialogueAnswers-box"},c["default"].createElement("div",{className:"dialogueAnswer",onClick:e.reqDelete},"Yes"),c["default"].createElement("div",{className:"dialogueAnswer",onClick:function(){e.setState({dialogue:!1,pageFocusId:null,pageFocusTitle:null})}},"Cancel"))))},this.renderPages=function(t){return 0===t.length?c["default"].createElement("div",{className:"no-page"},"empty"):t.map(function(t){return c["default"].createElement("div",{className:"list-elem"},c["default"].createElement("a",{href:"/codex/editor/"+t.pageid},c["default"].createElement("div",{className:"page-title"},t.title),c["default"].createElement("div",{className:"page-details"},t.details)),c["default"].createElement("div",{className:"delete-bar"},c["default"].createElement("div",{className:"delete-page-btn",onClick:e.handleDeletePage(t.pageid,t.title)},c["default"].createElement("img",{src:"/assets/icons/deletepage.png"}))))})},this.state={dialogue:!1,pageFocusId:null,pageFocusTitle:null}}return l(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"pageList "+this.props.side},this.state.dialogue?this.renderDeleteDialogue():null,c["default"].createElement("div",{className:"title"},c["default"].createElement("div",{className:"title-box"},this.props.title)),c["default"].createElement("div",{className:"list-area"},this.renderPages(this.props.pages)))}}]),t}(c["default"].Component);t["default"]=s,e.exports=t["default"]}).call(this)}finally{}},238:function(e,t){}});
//# sourceMappingURL=home.js.map