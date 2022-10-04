"use strict";(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[545],{3757:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t=r(5671),i=r(3144),u=r(136),o=r(2882),s=r(2791),c=r(359),l="Users_image__jP+12",a="Users_pagination__GlU3m",f="Users_selected__HJOZZ",p=r.p+"static/media/users.811261b883b0eb79ca8b.png",h=r(3504),g=r(885),d=r(184),v=function(n){for(var e=Math.ceil(n.totalUsersCount/n.pageSize),r=[],t=1;t<=e;t++)r.push(t);var i=Math.ceil(e/10),u=(0,s.useState)(1),o=(0,g.Z)(u,2),c=o[0],l=o[1],p=10*(c-1)+1,h=10*c;return(0,d.jsxs)("div",{className:a,children:[c>1&&(0,d.jsx)("button",{onClick:function(){return l(c-1)},children:"prev"}),r.filter((function(n){return n>=p&&n<=h})).map((function(e){return(0,d.jsx)("button",{onClick:function(){return n.changeCurrentPage(e)},className:n.currentPage===e?f:"",children:e})})),i>=c&&(0,d.jsx)("button",{onClick:function(){return l(c+1)},children:"next"})]})},y=function(n){return(0,d.jsxs)("div",{children:[(0,d.jsx)(v,(0,c.Z)({},n)),n.persons.map((function(e){return(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("div",{children:(0,d.jsx)(h.rU,{to:"/articles/"+e.id,children:(0,d.jsx)("img",{className:l,src:null!==e.photos.small?e.photos.small:p,alt:""})})}),(0,d.jsx)("div",{children:e.followed?(0,d.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===e.id})),onClick:function(){n.isUnFollowingThunk(e.id)},children:"Unfollow"}):(0,d.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===e.id})),onClick:function(){n.isFollowingThunk(e.id)},children:"Follow"})})]}),(0,d.jsxs)("span",{children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("div",{children:e.name}),(0,d.jsx)("div",{children:e.status})]}),(0,d.jsx)("span",{children:e.location?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:e.location.city}),(0,d.jsx)("div",{children:e.location.county})]}):""})]})]})}))]})},j=r(8687),x=r(1204),k=r(2363),m=r(7847),w=r(7781),C="NOT_FOUND";var b=function(n,e){return n===e};function P(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,i=void 0===t?b:t,u=r.maxSize,o=void 0===u?1:u,s=r.resultEqualityCheck,c=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,i=0;i<t;i++)if(!n(e[i],r[i]))return!1;return!0}}(i),l=1===o?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:C},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var i=r[t];return t>0&&(r.splice(t,1),r.unshift(i)),i.value}return C}return{get:t,put:function(e,i){t(e)===C&&(r.unshift({key:e,value:i}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(o,c);function a(){var e=l.get(arguments);if(e===C){if(e=n.apply(null,arguments),s){var r=l.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return a.clearCache=function(){return l.clear()},a}function U(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function F(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var i=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var u,o=0,s={memoizeOptions:void 0},c=t.pop();if("object"===typeof c&&(s=c,c=t.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,a=l.memoizeOptions,f=void 0===a?r:a,p=Array.isArray(f)?f:[f],h=U(t),g=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=h.length,r=0;r<e;r++)n.push(h[r].apply(null,arguments));return u=g.apply(null,n)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:g,dependencies:h,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),d};return i}var Z=F(P),T=Z((function(n){return n.users.persons}),(function(n){return n})),z=function(n){return n.users.pageSize},S=function(n){return n.users.totalUsersCount},_=function(n){return n.users.currentPage},A=function(n){return n.users.isFetching},I=function(n){return n.users.followingInProgress},O=function(n){(0,u.Z)(r,n);var e=(0,o.Z)(r);function r(){return(0,t.Z)(this,r),e.apply(this,arguments)}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsersThunk(e,r)}},{key:"changeCurrentPage",value:function(n){var e=this.props.pageSize;this.props.changeCurrentPage(n),this.props.getUsersThunk(n,e)}},{key:"render",value:function(){return(0,d.jsxs)(d.Fragment,{children:[this.props.isFetching&&(0,d.jsx)(k.Z,{}),(0,d.jsx)(y,{persons:this.props.persons,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,changeCurrentPage:this.changeCurrentPage.bind(this),isFollowingThunk:this.props.isFollowingThunk,isUnFollowingThunk:this.props.isUnFollowingThunk,followingInProgress:this.props.followingInProgress})]})}}]),r}(s.Component),E=(0,w.qC)((0,j.$j)((function(n){return{persons:T(n),pageSize:z(n),totalUsersCount:S(n),currentPage:_(n),isFetching:A(n),followingInProgress:I(n)}}),(function(n){return{changeCurrentPage:function(e){return n((0,x.oI)(e))},getUsersThunk:function(e,r){return n((0,x.aH)(e,r))},isFollowingThunk:function(e){return n((0,x.Od)(e))},isUnFollowingThunk:function(e){return n((0,x.Vg)(e))}}})),m.D)(O)},7847:function(n,e,r){r.d(e,{D:function(){return h}});var t=r(359),i=r(5671),u=r(3144),o=r(136),s=r(2882),c=r(2791),l=r(6871),a=r(8687),f=r(184),p=function(n){return{isAuth:n.auth.isAuth}},h=function(n){var e=function(e){(0,o.Z)(c,e);var r=(0,s.Z)(c);function c(){return(0,i.Z)(this,c),r.apply(this,arguments)}return(0,u.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(n,(0,t.Z)({},this.props)):(0,f.jsx)(l.Fg,{replace:!0,to:"/login"})}}]),c}(c.Component);return(0,a.$j)(p)(e)}}}]);
//# sourceMappingURL=545.76aab871.chunk.js.map