(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qianbaoxinxi-add-or-update"],{2654:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-4113fb2a]{padding:%?20?%}.content[data-v-4113fb2a]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-4113fb2a]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-4113fb2a]{width:%?180?%}.avator[data-v-4113fb2a]{width:%?150?%;height:%?60?%}.right-input[data-v-4113fb2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-4113fb2a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-4113fb2a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-4113fb2a]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-4113fb2a]{border:0}.cu-form-group uni-input[data-v-4113fb2a]{padding:0 %?30?%}.uni-input[data-v-4113fb2a]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-4113fb2a]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-4113fb2a]::after{line-height:%?88?%}.select .uni-input[data-v-4113fb2a]{line-height:%?88?%}.input .right-input[data-v-4113fb2a]{line-height:%?110?%}',""]),e.exports=t},"4ad1":function(e,t,r){"use strict";var i=r("ca8e"),n=r.n(i);n.a},"4bc8":function(e,t,r){"use strict";var i,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("编号")]),r("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"}},[e._v(e._s(e.ruleForm.bianhao))])],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("工号")]),r("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.gonghao,placeholder:"工号"},model:{value:e.ruleForm.gonghao,callback:function(t){e.$set(e.ruleForm,"gonghao",t)},expression:"ruleForm.gonghao"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("骑手姓名")]),r("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.qishouxingming,placeholder:"骑手姓名"},model:{value:e.ruleForm.qishouxingming,callback:function(t){e.$set(e.ruleForm,"qishouxingming",t)},expression:"ruleForm.qishouxingming"}})],1),r("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("金额")]),r("v-uni-picker",{attrs:{value:e.jineIndex,range:e.jineOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.jineChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.jine?e.ruleForm.jine:"请选择金额"))])],1)],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}))},aa98:function(e,t,r){"use strict";r.r(t);var i=r("ea50"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},ca8e:function(e,t,r){var i=r("2654");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("caa1e62a",i,!0,{sourceMap:!1,shadowMode:!1})},e137:function(e,t,r){"use strict";r.r(t);var i=r("4bc8"),n=r("aa98");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("4ad1");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4113fb2a",null,!1,i["a"],o);t["default"]=u.exports},ea50:function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o={data:function(){return{ruleForm:{bianhao:this.getUUID(),gonghao:"",qishouxingming:"",jine:"",userid:""},jineOptions:[],jineIndex:0,user:{},ro:{bianhao:!1,gonghao:!1,qishouxingming:!1,jine:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(i=e.sent,this.user=i.data,this.jineOptions="0".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("qianbaoxinxi",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(!t.cross){e.next=41;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 17:if((e.t1=e.t0()).done){e.next=41;break}if(a=e.t1.value,"bianhao"!=a){e.next=23;break}return this.ruleForm.bianhao=n[a],this.ro.bianhao=!0,e.abrupt("continue",17);case 23:if("gonghao"!=a){e.next=27;break}return this.ruleForm.gonghao=n[a],this.ro.gonghao=!0,e.abrupt("continue",17);case 27:if("qishouxingming"!=a){e.next=31;break}return this.ruleForm.qishouxingming=n[a],this.ro.qishouxingming=!0,e.abrupt("continue",17);case 31:if("jine"!=a){e.next=35;break}return this.ruleForm.jine=n[a],this.ro.jine=!0,e.abrupt("continue",17);case 35:if("userid"!=a){e.next=39;break}return this.ruleForm.userid=n[a],this.ro.userid=!0,e.abrupt("continue",17);case 39:e.next=17;break;case 41:this.styleChange();case 42:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},jineChange:function(e){this.jineIndex=e.target.value,this.ruleForm.jine=this.jineOptions[this.jineIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.jine){e.next=3;break}return this.$utils.msg("金额不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.jine||this.$validate.isIntNumer(this.ruleForm.jine)){e.next=6;break}return this.$utils.msg("金额应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("qianbaoxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("qianbaoxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}}]);