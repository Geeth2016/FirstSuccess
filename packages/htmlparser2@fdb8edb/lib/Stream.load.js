montageDefine("fdb8edb","lib/Stream",{dependencies:["./WritableStream.js","util","../"],factory:function(e,t,n){function r(e){a.call(this,new i(this),e)}function i(e){this.scope=e}n.exports=r;var a=e("./WritableStream.js");e("util").inherits(r,a),r.prototype.readable=!0;var o=e("../").EVENTS;Object.keys(o).forEach(function(e){if(0===o[e])i.prototype["on"+e]=function(){this.scope.emit(e)};else if(1===o[e])i.prototype["on"+e]=function(t){this.scope.emit(e,t)};else{if(2!==o[e])throw Error("wrong number of arguments!");i.prototype["on"+e]=function(t,n){this.scope.emit(e,t,n)}}})}});