(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c8c"],{"1f45":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.bike?i("div",{staticClass:"wrapper"},[i("v-container",[i("v-layout",{attrs:{wrap:"","justify-space-between":""}},[i("v-flex",{attrs:{xs12:"",sm6:""}},[i("v-img",{attrs:{src:t.bike.imageUrl}})],1),i("v-flex",{attrs:{xs12:"","offset-sm1":"",sm5:""}},[i("h1",[t._v(t._s(t.bike.title))]),i("em",[t._v(t._s(t.bike.description))]),i("h3",{staticClass:"mt-3"},[t._v("Additional Benefits")]),i("ul",[i("li",[t._v("1 Raincoat")]),i("li",[t._v("2 Helmets")]),i("li",[t._v("1 Bike Lock")])]),i("h3",{staticClass:"mt-3"},[t._v("Free Services")]),i("ul",[i("li",[t._v("Repairs and Maintainance")]),i("li",[t._v("Door-to-door Delivery and Pickup")]),i("li",[t._v("24/24 Support")])]),i("v-divider",{staticClass:"my-3"}),i("v-layout",[i("v-flex",{attrs:{xs2:""}},[i("h3",{staticClass:"font-weight-bold primary--text"},[t._v("$"+t._s(t.bike.price))]),i("p",{staticClass:"caption"},[t._v("per day")])]),i("v-flex",{attrs:{"offset-xs1":""}},[i("v-btn",{attrs:{color:"amber",block:""},on:{click:t.book}},[t._v("\n              Book now\n            ")])],1)],1)],1)],1),i("v-layout",{attrs:{"my-3":"","align-center":"","fill-height":"","justify-space-between":""}},[i("h2",{staticClass:"font-weight-bold"},[t._v("See Other Bikes")]),i("v-btn",{attrs:{exact:"",flat:"",small:"",to:"/rentals"}},[t._v(" View all\n        "),i("v-icon",{attrs:{small:""}},[t._v("keyboard_arrow_right")])],1)],1),i("v-layout",{attrs:{wrap:""}},t._l(t.products,function(t){return i("v-flex",{key:t.id,attrs:{"mb-2":"","pa-2":"",xs12:"",sm6:"",md4:""}},[i("bike-item",{attrs:{bike:t}})],1)}))],1)],1):t._e()},n=[],s=i("2f62"),r=i("7f2f");function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){l(t,e,i[e])})}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={components:{BikeItem:r["a"]},data:function(){return{bikeId:null}},computed:o({},Object(s["c"])(["isSignedIn","products"]),{bike:function(){return this.$store.getters.bikeById(this.bikeId)}}),mounted:function(){this.bikeId=this.$route.params.id},methods:o({},Object(s["b"])(["displaySignIn"]),{book:function(){this.bookClicked=!0,this.isSignedIn?this.$router.push("/booking/"+this.bike.id):this.displaySignIn(!0)}})},u=c,b=i("2877"),v=i("6544"),f=i.n(v),d=i("8336"),p=i("a523"),k=i("ce7e"),m=i("0e8f"),h=i("132d"),_=i("adda"),y=i("a722"),w=Object(b["a"])(u,a,n,!1,null,null,null);w.options.__file="BikeDetail.vue";e["default"]=w.exports;f()(w,{VBtn:d["a"],VContainer:p["a"],VDivider:k["a"],VFlex:m["a"],VIcon:h["a"],VImg:_["a"],VLayout:y["a"]})}}]);
//# sourceMappingURL=chunk-2d0b6c8c.493ff299.js.map