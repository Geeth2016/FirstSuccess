montageDefine("df9ea74","core/converter/converter",{dependencies:["../core"],factory:function(e,t){var n=e("../core").Montage,i="[object Number]",o=Object.prototype.toString,s=function(e){return o.call(e)===i};t.isNumber=s;var r=function(e){return e&&e!==void 0};t.isDef=r,t.Validator=n.specialize({validate:{value:null}}),t.Converter=n.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null}},{blueprintModuleId:e("../core")._blueprintModuleIdDescriptor,blueprint:e("../core")._blueprintDescriptor})}});