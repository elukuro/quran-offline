(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(t,a,e){var i=e(171);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(22).default)("96d3baf6",i,!0,{})},170:function(t,a,e){"use strict";var i=e(169);e.n(i).a},171:function(t,a,e){(t.exports=e(21)(!1)).push([t.i,"\n.surah__header[data-v-33ea78e1] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.surah__title[data-v-33ea78e1] {\n  font-size: 2rem;\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-33ea78e1] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-33ea78e1] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-33ea78e1] {\n  text-align: right;\n}\n",""])},172:function(t,a,e){"use strict";e(53);var i=e(8),n=e.n(i),s=(e(0),e(1),e(2),e(9)),r={name:"SurahCard",props:{surahArray:{type:Array,default:function(){return[]}}},computed:n()({},Object(s.d)(["surahFavorite"])),methods:n()({},Object(s.b)(["addToFavorite","removeFromFavorite","showNotification"]),{doAddToFavorite:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})},doremoveFromfavorite:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})},findInFavorite:function(t){return(this.surahFavorite||[]).find(function(a){return a.index===t.index})},getSurahDetailUrl:function(t){return"/".concat(t)},goToSurahDetail:function(t){var a=this.getSurahDetailUrl(t);this.$router.push(a)}})},o=(e(170),e(4)),l=Object(o.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"surah__root"},t._l(t.surahArray,function(a){return e("a",{key:a.index,staticClass:"surah block_content has-shadow",on:{click:function(e){e.preventDefault(),t.goToSurahDetail(a.index)}}},[e("div",{staticClass:"surah__header"},[e("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(a.index)+"\n      ")]),t._v(" "),e("div",{staticClass:"surah__header--right"},[t.findInFavorite(a)?t._e():e("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#000"},on:{click:function(e){e.preventDefault(),t.doAddToFavorite(a)}}},[e("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),t.findInFavorite(a)?e("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#f5aa1e"},on:{click:function(e){e.preventDefault(),t.doremoveFromfavorite(a)}}},[e("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),e("div",{staticClass:"divider clearfix"},[e("div",{staticClass:"surah__title"},[t._v("\n        "+t._s(a.arabic)+"\n      ")])]),t._v(" "),e("div",{staticClass:"divider clearfix"},[e("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(a.latin)+"\n      ")])]),t._v(" "),e("div",{staticClass:"divider clearfix"},[e("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(a.translation)+": "+t._s(a.ayah_count)+" Ayat)\n      ")])])])}))},[],!1,null,"33ea78e1",null);l.options.__file="SurahCard.vue";a.a=l.exports},174:function(t,a,e){var i=e(188);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(22).default)("61adaa1e",i,!0,{})},187:function(t,a,e){"use strict";var i=e(174);e.n(i).a},188:function(t,a,e){(t.exports=e(21)(!1)).push([t.i,"\n.all-surah[data-v-7d4d963a] {\n  width: 90%;\n  margin: 0 auto;\n}\n",""])},212:function(t,a,e){"use strict";e.r(a);var i=e(8),n=e.n(i),s=(e(0),e(1),e(2),e(9)),r=e(172),o=e(30),l={name:"PageIndex",components:{SurahCard:r.a},data:function(){return{loading:!0}},computed:n()({},Object(s.d)(["allSurahList"]),{isHaveSource:function(){return Object(o.b)(this.$route.query.source)}}),mounted:function(){this.setHeaderTitle("Daftar Surat"),this.fetchSurahInfo()},methods:n()({},Object(s.c)(["setHeaderTitle"]),Object(s.b)(["fetchAllSurah"]),{fetchSurahInfo:function(){var t=this;this.fetchAllSurah({success:function(){t.isHaveSource?t.loading=!1:setTimeout(function(){t.loading=!1},1e3)}})}})},c=(e(187),e(4)),u=Object(c.a)(l,function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"container"},[this.loading?a("div",this._l(5,function(t){return a("div",{key:t,staticClass:"skeleton skeleton_row skeleton_row--big"})})):a("div",{staticClass:"all-surah"},[a("SurahCard",{attrs:{"surah-array":this.allSurahList}})],1)])},[],!1,null,"7d4d963a",null);u.options.__file="all-surah.vue";a.default=u.exports}}]);