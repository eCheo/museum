webpackJsonp([7],{EzJB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%",height:"100%"}},[a("div",{staticClass:"warp"},[a("div",{staticClass:"content"},[a("div",{staticClass:"looks"},[e._v("参观展览")]),e._v(" "),a("div",{staticClass:"look-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{placeholder:"姓名："},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"name1",attrs:{placeholder:"联系电话："},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),a("textarea",{staticClass:"name2",attrs:{type:"textarea",placeholder:"备注："}})]),e._v(" "),a("div",{staticClass:"button",on:{click:e.goTo}},[e._v("参加展览")])])])])},staticRenderFns:[]};var n=a("VU/8")({data:function(){return{name:"",phone:""}},methods:{goTo:function(){""==this.name?this.$Message.error("请输入联系人姓名"):""==this.phone?this.$Message.error("请输入联系人电话"):(this.$Message.success("参加展览成功"),this.$router.push("lookArrange"))}}},s,!1,function(e){a("nRtV")},null,null);t.default=n.exports},nRtV:function(e,t){}});
//# sourceMappingURL=7.84e7d279a213a79340e8.js.map