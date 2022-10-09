/*! For license information please see 728.38d0a2c1.chunk.js.LICENSE.txt */
(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[728],{6728:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return N}});var r=e(5671),i=e(3144),o=e(136),u=e(2882),s=e(2791),c=e(1413),a={image:"Users_image__jP+12",pagination:"Users_pagination__GlU3m",selected:"Users_selected__HJOZZ"},l=e(4387),p=e(3504),f=e(4942),h=e(885),g=e(1694),d=e.n(g),v=e(184),y=function(n){for(var t=Math.ceil(n.totalUsersCount/n.pageSize),e=[],r=1;r<=t;r++)e.push(r);var i=Math.ceil(t/10),o=(0,s.useState)(1),u=(0,h.Z)(o,2),c=u[0],l=u[1],p=10*(c-1)+1,g=10*c;return(0,v.jsxs)("div",{className:d()(a.pagination,(0,f.Z)({},a.click,!1)),children:[c>1&&(0,v.jsx)("button",{onClick:function(){return l(c-1)},children:"prev"}),e.filter((function(n){return n>=p&&n<=g})).map((function(t){return(0,v.jsx)("button",{onClick:function(){return n.changeCurrentPage(t)},className:n.currentPage===t?a.selected:"",children:t})})),i>=c&&(0,v.jsx)("button",{onClick:function(){return l(c+1)},children:"next"})]})},j=function(n){return(0,v.jsxs)("div",{children:[(0,v.jsx)(y,(0,c.Z)({},n)),n.persons.map((function(t){return(0,v.jsxs)("div",{children:[(0,v.jsxs)("span",{children:[(0,v.jsx)("div",{children:(0,v.jsx)(p.rU,{to:"/articles/"+t.id,children:(0,v.jsx)("img",{className:a.image,src:null!==t.photos.small?t.photos.small:l,alt:""})})}),(0,v.jsx)("div",{children:t.followed?(0,v.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===t.id})),onClick:function(){n.isUnFollowingThunk(t.id)},children:"Unfollow"}):(0,v.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===t.id})),onClick:function(){n.isFollowingThunk(t.id)},children:"Follow"})})]}),(0,v.jsxs)("span",{children:[(0,v.jsxs)("span",{children:[(0,v.jsx)("div",{children:t.name}),(0,v.jsx)("div",{children:t.status})]}),(0,v.jsx)("span",{children:t.location?(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:t.location.city}),(0,v.jsx)("div",{children:t.location.county})]}):""})]})]})}))]})},x=e(8687),m=e(1204),k=e(2363),w=e(7847),C=e(7781),b="NOT_FOUND";var P=function(n,t){return n===t};function U(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,i=void 0===r?P:r,o=e.maxSize,u=void 0===o?1:o,s=e.resultEqualityCheck,c=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!n(t[i],e[i]))return!1;return!0}}(i),a=1===u?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:b},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var i=e[r];return r>0&&(e.splice(r,1),e.unshift(i)),i.value}return b}return{get:r,put:function(t,i){r(t)===b&&(e.unshift({key:t,value:i}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(u,c);function l(){var t=a.get(arguments);if(t===b){if(t=n.apply(null,arguments),s){var e=a.getEntries(),r=e.find((function(n){return s(n.value,t)}));r&&(t=r.value)}a.put(arguments,t)}return t}return l.clearCache=function(){return a.clear()},l}function F(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function S(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o,u=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var a=s,l=a.memoizeOptions,p=void 0===l?e:l,f=Array.isArray(p)?p:[p],h=F(r),g=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(f)),d=n((function(){for(var n=[],t=h.length,e=0;e<t;e++)n.push(h[e].apply(null,arguments));return o=g.apply(null,n)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:g,dependencies:h,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return i}var Z=S(U),T=Z((function(n){return n.users.persons}),(function(n){return n})),z=function(n){return n.users.pageSize},A=function(n){return n.users.totalUsersCount},_=function(n){return n.users.currentPage},O=function(n){return n.users.isFetching},I=function(n){return n.users.followingInProgress},E=function(n){(0,o.Z)(e,n);var t=(0,u.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var n=this.props,t=n.currentPage,e=n.pageSize;this.props.getUsersThunk(t,e)}},{key:"changeCurrentPage",value:function(n){var t=this.props.pageSize;this.props.changeCurrentPage(n),this.props.getUsersThunk(n,t)}},{key:"render",value:function(){return(0,v.jsxs)(v.Fragment,{children:[this.props.isFetching&&(0,v.jsx)(k.Z,{}),(0,v.jsx)(j,{persons:this.props.persons,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,changeCurrentPage:this.changeCurrentPage.bind(this),isFollowingThunk:this.props.isFollowingThunk,isUnFollowingThunk:this.props.isUnFollowingThunk,followingInProgress:this.props.followingInProgress})]})}}]),e}(s.Component),N=(0,C.qC)((0,x.$j)((function(n){return{persons:T(n),pageSize:z(n),totalUsersCount:A(n),currentPage:_(n),isFetching:O(n),followingInProgress:I(n)}}),(function(n){return{changeCurrentPage:function(t){return n((0,m.oI)(t))},getUsersThunk:function(t,e){return n((0,m.aH)(t,e))},isFollowingThunk:function(t){return n((0,m.Od)(t))},isUnFollowingThunk:function(t){return n((0,m.Vg)(t))}}})),w.D)(E)},7847:function(n,t,e){"use strict";e.d(t,{D:function(){return h}});var r=e(1413),i=e(5671),o=e(3144),u=e(136),s=e(2882),c=e(2791),a=e(6871),l=e(8687),p=e(184),f=function(n){return{isAuth:n.auth.isAuth}},h=function(n){var t=function(t){(0,u.Z)(c,t);var e=(0,s.Z)(c);function c(){return(0,i.Z)(this,c),e.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(n,(0,r.Z)({},this.props)):(0,p.jsx)(a.Fg,{replace:!0,to:"/login"})}}]),c}(c.Component);return(0,l.$j)(f)(t)}},1694:function(n,t){var e;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var o=typeof e;if("string"===o||"number"===o)n.push(e);else if(Array.isArray(e)){if(e.length){var u=i.apply(null,e);u&&n.push(u)}}else if("object"===o){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var s in e)r.call(e,s)&&e[s]&&n.push(s)}}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(e=function(){return i}.apply(t,[]))||(n.exports=e)}()},4387:function(n,t,e){"use strict";n.exports=e.p+"static/media/users.811261b883b0eb79ca8b.png"}}]);
//# sourceMappingURL=728.38d0a2c1.chunk.js.map