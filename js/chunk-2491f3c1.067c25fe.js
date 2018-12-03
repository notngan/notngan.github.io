(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2491f3c1"],{"44e4":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[!t.booking&&t.isSignedIn?i("v-container",{attrs:{"fill-height":""}},[i("v-layout",[i("h1",[t._v("You've not booked any bike, please go to "),i("router-link",{attrs:{to:"rentals"}},[t._v("Rentals")]),t._v(" to book one!")],1)])],1):t._e(),t.booking&&t.isSignedIn?i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",md5:"","px-2":"","my-2":""}},[i("v-card",{attrs:{flat:""}},[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Booking Details")])],1),i("v-list",[i("v-list-tile",[i("v-list-tile-avatar",[i("img",{attrs:{src:t.bike.imageUrl}})]),i("v-list-tile-content",[i("v-list-tile-title",{staticClass:"font-weight-bold"},[t._v(t._s(t.bike.title))]),i("v-list-tile-sub-title",[t._v(t._s(t.bike.description))])],1),i("v-list-tile-action",[i("span",{staticClass:"font-weight-bold"},[t._v("\n                  $"+t._s(t.bike.price)+"\n                ")]),i("v-list-tile-action-text",[t._v("1 day")])],1)],1)],1),i("v-divider"),i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{"justify-space-between":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-layout",{attrs:{column:""}},[i("p",{staticClass:"caption grey--text"},[t._v("Start:")]),i("v-flex",[i("h3",{staticClass:"font-weight-bold"},[t._v(t._s(t.booking.start.location))]),i("p",[t._v(t._s(t.booking.start.address))])]),i("v-flex",[i("h3",[t._v(t._s(t.booking.start.date))]),i("p",[t._v(t._s(t.booking.start.time))])])],1)],1),i("v-flex",{attrs:{xs12:""}},[i("v-layout",{attrs:{column:""}},[i("p",{staticClass:"caption grey--text"},[t._v("End:")]),i("v-flex",[i("h3",{staticClass:"font-weight-bold"},[t._v(t._s(t.booking.end.location))]),i("p",[t._v(t._s(t.booking.end.address))])]),i("v-flex",[i("h3",[t._v(t._s(t.booking.end.date))]),i("p",[t._v(t._s(t.booking.end.time))])])],1)],1)],1)],1),i("v-divider"),i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",[i("p",[t._v("Quantity:")]),i("p",[t._v("Number of day(s):")]),i("h3",[t._v("Total:")])]),i("v-spacer"),i("v-flex",{staticClass:"text-xs-right"},[i("p",[t._v(t._s(t.booking.quantity))]),i("p",[t._v(t._s(t.booking.dayNumber))]),i("h3",[t._v("$"+t._s(t.booking.quantity*t.booking.dayNumber*t.bike.price))])])],1)],1)],1)],1),i("v-flex",{attrs:{xs12:"",md7:"","px-2":"","my-2":""}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card",{attrs:{flat:""}},[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Personal Information")])],1),i("v-container",[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{"px-1":"",xs12:""}},[i("v-text-field",{attrs:{rules:[function(t){return!!t||"Name is required"}],required:"",outline:"",label:"Full name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-flex",{attrs:{"px-1":"",xs12:"",sm6:""}},[i("v-text-field",{attrs:{rules:t.emailRules,required:"",outline:"",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-flex",{attrs:{"px-1":"",xs12:"",sm6:""}},[i("v-text-field",{attrs:{rules:[function(t){return!!t||"Phone number is required"}],mask:"phone",required:"",outline:"",label:"Phone number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-flex",{attrs:{"px-1":"",xs12:"",sm6:""}},[i("v-autocomplete",{attrs:{rules:[function(t){return!!t||"Nationality is required"}],outline:"",items:t.countries,"item-text":"name","item-value":"name",label:"Nationality"},model:{value:t.nation,callback:function(e){t.nation=e},expression:"nation"}})],1),i("v-flex",{attrs:{"px-1":"",xs12:"",sm6:""}},[i("v-text-field",{attrs:{rules:[function(t){return!!t||"ID/Passport number is required"}],required:"",outline:"",label:"ID/Passport number"},model:{value:t.passport,callback:function(e){t.passport=e},expression:"passport"}})],1)],1)],1)],1),i("v-card",{staticClass:"my-3",attrs:{flat:""}},[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Payment Method")])],1),i("v-container",[i("v-radio-group",{attrs:{rules:[function(t){return!!t||"Choose a payment method to continue"}]},model:{value:t.payment,callback:function(e){t.payment=e},expression:"payment"}},t._l(t.payments,function(t){return i("v-radio",{key:t.value,attrs:{label:t.text,value:t.value}})})),t.showCard?i("v-form",[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{"px-2":"",xs12:"",md6:""}},[i("v-text-field",{attrs:{mask:"credit-card",outline:"",label:"Card Number"},model:{value:t.card.number,callback:function(e){t.$set(t.card,"number",e)},expression:"card.number"}})],1),i("v-flex",{attrs:{"px-2":"",xs12:"",md6:""}},[i("v-text-field",{attrs:{outline:"",label:"Name on Card"},model:{value:t.card.name,callback:function(e){t.$set(t.card,"name",e)},expression:"card.name"}})],1),i("v-flex",{attrs:{"px-2":"",xs6:""}},[i("v-text-field",{attrs:{outline:"",label:"MM/YY"},model:{value:t.card.date,callback:function(e){t.$set(t.card,"date",e)},expression:"card.date"}})],1),i("v-flex",{attrs:{"px-2":"",xs6:""}},[i("v-text-field",{attrs:{outline:"",label:"CVV"},model:{value:t.card.cvv,callback:function(e){t.$set(t.card,"cvv",e)},expression:"card.cvv"}})],1)],1)],1):t._e()],1)],1),i("v-flex",{attrs:{"offset-sm6":""}},[i("v-btn",{attrs:{block:"",color:"amber"},on:{click:t.checkout}},[t._v("complete booking "),i("v-icon",[t._v("arrow_right")])],1)],1)],1)],1)],1)],1):t._e()],1)},n=[],o=i("2f62");function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){r(t,e,i[e])})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={data:function(){return{bike:{},name:"",email:"",phone:null,nation:null,passport:null,payment:null,payments:[{text:"Cash on Delivery",value:1},{text:"Debit/ Credit Card",value:2}],card:{number:null,name:null,date:null,cvv:null},showCard:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],valid:!0}},computed:s({},Object(o["c"])(["signedInUser","countries","isSignedIn"]),{booking:function(){return JSON.parse(localStorage.getItem("booking"))}}),watch:{payment:function(t){this.showCard=2===t},isSignedIn:function(t){t||(this.addMessage({class:"error",message:"Please sign in to continue!"}),this.displaySignIn(!0))}},created:function(){var t=this.$store.getters.bikeById(this.booking.bikeId);this.bike=Object.assign({},t),this.name=this.signedInUser.name,this.email=this.signedInUser.email},methods:s({},Object(o["b"])(["saveToTransactions","removeBooking","addMessage","displaySignIn"]),{checkout:function(){var t=this;if(this.$refs.form.validate()){var e=this.booking;e.cost=this.booking.quantity*this.booking.dayNumber*this.bike.price;var i={name:this.name,email:this.email,phone:this.phone,nation:this.nation,passport:this.passport},a={booking:e,info:i,payment:this.payment,uid:this.signedInUser.id};this.saveToTransactions(a).then(function(){e.id&&(t.removeBooking({id:e.id,uid:t.signedInUser.id}),localStorage.removeItem("booking"))})}}})},u=l,c=(i("b25b"),i("2877")),d=i("6544"),v=i.n(d),h=i("c6a6"),f=i("8336"),p=i("b0af"),m=i("a523"),b=i("ce7e"),g=i("0e8f"),x=i("4bd4"),y=i("132d"),k=i("a722"),_=i("8860"),C=i("ba95"),w=i("40fe"),I=i("5d23"),S=i("c954"),V=(i("a14d"),i("9d26")),T=i("ba87"),$=i("b64a"),A=i("ad54"),O=i("6a18"),R=i("5368"),E=i("94ab"),D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};function j(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var B={name:"v-radio",mixins:[$["a"],A["a"],Object(E["a"])("radio","v-radio","v-radio-group"),O["a"]],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:D({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var t,e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];return(t=R["a"].methods.genInput).call.apply(t,[this].concat(j(i)))},genLabel:function(){return this.$createElement(T["a"],{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||!1,dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",D({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),!this.isDisabled&&this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(V["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(){this.isFocused=!0},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(t){return t("div",this.computedData,[this.genRadio(),this.genLabel()])}},q=(i("94a7"),i("60d0"),i("c37a")),L=i("5e28"),P={name:"v-radio-group",extends:q["a"],mixins:[L["a"],Object(E["b"])("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},q["a"].methods.genDefaultSlot.call(this))},onRadioChange:function(t){this.disabled||(this.hasInput=!0,this.internalValue=t,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(t){t.relatedTarget&&t.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",t))},register:function(t){t.isActive=this.valueComparator(this.internalValue,t.value),t.$on("change",this.onRadioChange),t.$on("blur",this.onRadioBlur),this.radios.push(t)},setErrorState:function(t){for(var e=this.radios.length;--e>=0;)this.radios[e].parentError=t},setActiveRadio:function(){for(var t=this.radios.length;--t>=0;){var e=this.radios[t];e.isActive=this.valueComparator(this.internalValue,e.value)}},unregister:function(t){t.$off("change",this.onRadioChange),t.$off("blur",this.onRadioBlur);var e=this.radios.findIndex(function(e){return e===t});e>-1&&this.radios.splice(e,1)}}},N=i("9910"),F=i("2677"),U=i("71d9"),M=i("2a7f"),J=Object(c["a"])(u,a,n,!1,null,null,null);J.options.__file="CheckOut.vue";e["default"]=J.exports;v()(J,{VAutocomplete:h["a"],VBtn:f["a"],VCard:p["a"],VContainer:m["a"],VDivider:b["a"],VFlex:g["a"],VForm:x["a"],VIcon:y["a"],VLayout:k["a"],VList:_["a"],VListTile:C["a"],VListTileAction:w["a"],VListTileActionText:I["a"],VListTileAvatar:S["a"],VListTileContent:I["b"],VListTileSubTitle:I["c"],VListTileTitle:I["d"],VRadio:B,VRadioGroup:P,VSpacer:N["a"],VTextField:F["a"],VToolbar:U["a"],VToolbarTitle:M["b"]})},"60d0":function(t,e,i){},"6e89":function(t,e,i){},a14d:function(t,e,i){},b25b:function(t,e,i){"use strict";var a=i("6e89"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-2491f3c1.067c25fe.js.map