(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{180:function(t,n,e){var a=e(200);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(22).default)("ade1b9c8",a,!0,{})},199:function(t,n,e){"use strict";var a=e(180);e.n(a).a},200:function(t,n,e){(t.exports=e(21)(!1)).push([t.i,"\n.home__wrapper[data-v-17b01ae9] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1em;\n}\n.item[data-v-17b01ae9] {\n  width: 100%;\n  margin: 1em 1em;\n}\n.item__link[data-v-17b01ae9] {\n    text-decoration: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 1em;\n    border-radius: 4px;\n    font-size: 1rem;\n    background-color: #c6f3df;\n    color: #000;\n}\n",""])},214:function(t,n,e){"use strict";e.r(n);var a=e(8),i=e.n(a),o=(e(0),e(1),e(2),e(9)),s=e(101),r=e(103),c=e(102),l=e(104),d=e(105),m=e(78),u=e(76),p=e(77),_=e(6),k={name:"PageIndex",components:{MdHomeIcon:s.a,MdBookIcon:r.a,MdHelpCircleIcon:c.a,MdCodeIcon:l.a,MdSearchIcon:d.a,IosNavigateIcon:m.a,IosStarOutlineIcon:u.a,IosBookmarkIcon:p.a},data:function(){return{loading:!0,AppConstant:_.b}},computed:{},mounted:function(){var t=this;this.setHeaderTitle(_.b.TITLE),setTimeout(function(){t.loading=!1},1e3)},methods:i()({},Object(o.c)(["setHeaderTitle"]))},b=(e(199),e(4)),v=Object(b.a)(k,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container"},[t.loading?e("div",t._l(5,function(t){return e("div",{key:t,staticClass:"skeleton skeleton_row"})})):e("div",{staticClass:"home"},[e("div",{staticClass:"home__wrapper"},[e("div",{staticClass:"item"},[e("router-link",{staticClass:"item__link has-shadow",attrs:{to:"/all-surah"}},[e("MdBookIcon",{attrs:{w:"2em",h:"2em"}}),t._v("\n          Daftar Surat\n        ")],1)],1),t._v(" "),e("div",{staticClass:"item"},[e("router-link",{staticClass:"item__link has-shadow",attrs:{to:"/search"}},[e("MdSearchIcon",{attrs:{w:"2em",h:"2em"}}),t._v("\n          "+t._s(t.AppConstant.SEARCH_PAGE)+"\n        ")],1)],1),t._v(" "),e("div",{staticClass:"item"},[e("router-link",{staticClass:"item__link has-shadow",attrs:{to:"/last-verse"}},[e("IosBookmarkIcon",{attrs:{w:"2em",h:"2em"}}),t._v("\n          "+t._s(t.AppConstant.LAST_READ)+"\n        ")],1)],1),t._v(" "),e("div",{staticClass:"item"},[e("router-link",{staticClass:"item__link has-shadow",attrs:{to:"/favorite"}},[e("IosStarOutlineIcon",{attrs:{w:"2em",h:"2em"}}),t._v("\n          "+t._s(t.AppConstant.FAVORITE)+"\n        ")],1)],1),t._v(" "),e("div",{staticClass:"item"},[e("router-link",{staticClass:"item__link has-shadow",attrs:{to:"/recommendation"}},[e("IosNavigateIcon",{attrs:{w:"2em",h:"2em"}}),t._v("\n          "+t._s(t.AppConstant.RECOMMENDATION)+"\n        ")],1)],1)])])])},[],!1,null,"17b01ae9",null);v.options.__file="index.vue";n.default=v.exports}}]);