webpackJsonp([1],{0:function(e,t,a){e.exports=a(229)},229:function(e,t,a){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function t(e){return e&&e.__esModule?e:{"default":e}}var n=a(2),r=t(n),l=a(154),o=a(155),i=a(169),u=t(i),s=a(170),c=a(171),d=a(230),f=t(d),p=a(231),g=(e(p),a(233)),v=t(g),m=a(234),y=t(m);a(238);var h=window.__init_state,b=null;b=h?{data:h,app:{deletingpage:!1}}:v["default"],b=(0,s.fromJS)(b);var E=(0,o.applyMiddleware)(u["default"])(o.createStore)(f["default"],b);console.log("CODEX by Georges Madalinski"),(0,l.render)(r["default"].createElement(c.Provider,{store:E},r["default"].createElement(y["default"],null)),document.getElementById("react-view"))}).call(this)}finally{}},230:function(e,t,a){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(170),r=(0,n.Map)();t["default"]=function(e,t){switch(void 0===e&&(e=r),t.type){case"DELETE_PAGE_IN_PROG":return e.setIn(["app","deletingpage"],!0);case"DELETE_PAGE_END":return e.setIn(["app","deletingpage"],!1);case"REMOVE_PAGE_INFO":var a=function(){var a=null,n=null,r=null;return n=e.getIn(["data","drafts"]).toJS(),r=n.findIndex(function(e){return e.pageid===t.pageid}),r>=0?a="drafts":(n=e.getIn(["data","published"]).toJS(),r=n.findIndex(function(e){return e.pageid===t.pageid}),r>=0?a="published":r=null),a?{v:e.updateIn(["data",a],function(e){return e["delete"](r)})}:{v:e}}();if("object"==typeof a)return a.v;default:return e}},e.exports=t["default"]}).call(this)}finally{}},231:function(e,t,a){try{(function(){"use strict";function e(){return function(e){var t={title:"My New Adventure"};return(0,i.ajaxSendData)("/codex/create",JSON.stringify(t))}}function n(e){return{type:"REMOVE_PAGE_INFO",pageid:e}}function r(){return{type:"DELETE_PAGE_IN_PROG"}}function l(){return{type:"DELETE_PAGE_END"}}function o(e){return function(t,a){return t(r()),(0,i.ajaxGetData)("/codex/delete-page?pageid="+e).then(function(a){return t(l()),a.status?t(n(e)):a})["catch"](function(e){return t(l())})}}Object.defineProperty(t,"__esModule",{value:!0}),t.createPage=e,t.removePageInfo=n,t.deletePageInProg=r,t.deletePageEnd=l,t.deletePage=o;var i=(a(170),a(232))}).call(this)}finally{}},232:function(e,t,a){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){return new Promise(function(a,n){o["default"].ajax({type:"POST",dataType:"json",contentType:"application/json",url:e,data:t,success:function(e){a(e)}})})}function r(e){return new Promise(function(t,a){o["default"].get(e,function(e){t(e)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.ajaxSendData=n,t.ajaxGetData=r;var l=a(191),o=e(l)}).call(this)}finally{}},233:function(e,t,a){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:{username:"user",drafts:[{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"}],published:[{title:"Example Blog: The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"},{title:"The Gypsy Spaceman",details:"March 20, 2016",pageid:"idq21ksa2"}]},app:{deletingpage:!1}},e.exports=t["default"]}).call(this)}finally{}},234:function(e,t,a){try{(function(){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{data:e.get("data").toJS(),app:e.get("app").toJS()}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(r);if(null===s)return;e=s,t=l,a=o,n=!0,i=s=void 0}},c=a(2),d=r(c),f=a(171),p=(a(170),a(231)),g=n(p),v=a(235),m=r(v),y=a(236),h=r(y),b=a(237),E=r(b),P=function(e){function t(){var e=this;l(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.handleAddPage=function(){e.setState({visib:!e.state.visib}),e.props.createPage().then(function(e){e.status&&(window.location="/codex/editor/"+e.pageid)})},this.state={visib:!0}}return o(t,e),u(t,[{key:"render",value:function(){return d["default"].createElement("div",{className:"app"},d["default"].createElement("div",{className:"icons-loader"},d["default"].createElement("img",{src:"/assets/icons/rolling.gif"})),d["default"].createElement(m["default"],{username:this.props.data.username}),d["default"].createElement(h["default"],{handleClick:this.handleAddPage,username:this.props.data.username}),d["default"].createElement("div",{className:"allPages group "+(this.state.visib?"visib":"no-visib")},d["default"].createElement("div",{className:"list left-list"},d["default"].createElement(E["default"],{pages:this.props.data.drafts,username:this.props.data.username,title:"drafts",side:"left",deletingpage:this.props.app.deletingpage,deletePage:this.props.deletePage,removePageInfo:this.props.removePageInfo})),d["default"].createElement("div",{className:"list right-list"},d["default"].createElement(E["default"],{pages:this.props.data.published,username:this.props.data.username,title:"published",side:"right",deletingpage:this.props.app.deletingpage,deletePage:this.props.deletePage,removePageInfo:this.props.removePageInfo}))))}}]),t}(d["default"].Component);t["default"]=(0,f.connect)(i,g)(P),e.exports=t["default"]}).call(this)}finally{}},235:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(r);if(null===s)return;e=s,t=l,a=o,n=!0,i=s=void 0}},u=a(2),s=n(u),c=(a(232),function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.logout=function(){window.location="/codex/logout"}}return l(t,e),o(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"headerBar"},s["default"].createElement("div",{className:"tool-sect page-tools"},s["default"].createElement("div",{className:"toolbox"},s["default"].createElement("div",{className:"toolbox-box app-title"},"codex"))),s["default"].createElement("div",{className:"userstat"},s["default"].createElement("div",{className:"usernamedisp"},"signed in as ",s["default"].createElement("span",{className:"auth"},this.props.username)),s["default"].createElement("div",{className:"logout",onClick:this.logout},"log out")))}}]),t}(s["default"].Component));t["default"]=c,e.exports=t["default"]}).call(this)}finally{}},236:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(r);if(null===s)return;e=s,t=l,a=o,n=!0,i=s=void 0}},u=a(2),s=n(u),c=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return l(t,e),o(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"addPage"},s["default"].createElement("div",{className:"addPage-box",onClick:this.props.handleClick},"+ new page"))}}]),t}(s["default"].Component);t["default"]=c,e.exports=t["default"]}).call(this)}finally{}},237:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,l=t,o=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,l);if(void 0!==i){if("value"in i)return i.value;var u=i.get;if(void 0===u)return;return u.call(o)}var s=Object.getPrototypeOf(r);if(null===s)return;e=s,t=l,a=o,n=!0,i=s=void 0}},u=a(2),s=n(u),c=function(e){function t(){var e=this;r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.viewClick=function(e){return function(){window.location="/codex/view/"+e}},this.reqDelete=function(){e.props.deletePage(e.state.pageFocusId).then(function(){e.setState({dialogue:!1,pageFocusId:null,pageFocusTitle:null})})},this.handleDeletePage=function(t,a){return function(){e.setState({dialogue:!0,pageFocusId:t,pageFocusTitle:a})}},this.renderDeleteDialogue=function(){return s["default"].createElement("div",{className:"deleteDialogue"},s["default"].createElement("div",{className:"dialogueBox"},s["default"].createElement("div",{className:"dialogueQuestion"},s["default"].createElement("div",null,"Are you sure you want to delete"),s["default"].createElement("div",{className:"page-focus-title"},e.state.pageFocusTitle," ?")),e.props.deletingpage?s["default"].createElement("div",{className:"dialogue-deleting-prog"},s["default"].createElement("img",{src:"/assets/icons/rolling.gif"})):s["default"].createElement("div",{className:"dialogueAnswers-box"},s["default"].createElement("div",{className:"dialogueAnswer",onClick:e.reqDelete},"Yes"),s["default"].createElement("div",{className:"dialogueAnswer",onClick:function(){e.setState({dialogue:!1,pageFocusId:null,pageFocusTitle:null})}},"Cancel"))))},this.renderPages=function(t){return 0===t.length?s["default"].createElement("div",{className:"no-page"},"empty"):t.map(function(t){return s["default"].createElement("div",{className:"list-elem"},s["default"].createElement("a",{className:"editor-link",href:"/codex/editor/"+t.pageid},s["default"].createElement("div",{className:"page-title"},t.title),s["default"].createElement("div",{className:"page-details"},t.details)),s["default"].createElement("div",{className:"delete-bar"},s["default"].createElement("div",{className:"delete-page-btn",onClick:e.handleDeletePage(t.pageid,t.title)},s["default"].createElement("img",{src:"/assets/icons/deletepage.png"})),"published"===e.props.title?s["default"].createElement("a",{className:"view-page-btn",href:"/codex/view/"+e.props.username+"/"+t.pageid},s["default"].createElement("img",{src:"/assets/icons/eye.png"})):null))})},this.state={dialogue:!1,pageFocusId:null,pageFocusTitle:null}}return l(t,e),o(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"pageList "+this.props.side},this.state.dialogue?this.renderDeleteDialogue():null,s["default"].createElement("div",{className:"title"},s["default"].createElement("div",{className:"title-box"},this.props.title)),s["default"].createElement("div",{className:"list-area"},this.renderPages(this.props.pages)))}}]),t}(s["default"].Component);t["default"]=c,e.exports=t["default"]}).call(this)}finally{}},238:function(e,t){}});
//# sourceMappingURL=home.js.map