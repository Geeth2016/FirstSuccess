montageDefine("c4eaeaf","test",{dependencies:["./inherits.js","assert"],factory:function(e){function t(e){a(e.constructor===n),a(e.constructor.super_===i),a(Object.getPrototypeOf(e)===n.prototype),a(Object.getPrototypeOf(Object.getPrototypeOf(e))===i.prototype),a(e instanceof n),a(e instanceof i)}function n(){i.call(this),t(this)}function i(){}var r=e("./inherits.js"),a=e("assert");r(n,i);var o=new n;t(o),console.log("ok")}});