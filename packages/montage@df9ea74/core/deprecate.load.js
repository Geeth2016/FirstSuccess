montageDefine("df9ea74","core/deprecate",{dependencies:[],factory:function(e,t){var n=t.deprecationWarning=function n(e,t,n){if(n=n===!0?2:n){var i=Error.stackTraceLimit;Error.stackTraceLimit=n}if("undefined"!=typeof console&&"function"==typeof console.warn){var r=n?Error("").stack:"";t?console.warn(e+" is deprecated, use "+t+" instead.",r):console.warn(e,r)}n&&(Error.stackTraceLimit=i)};t.deprecateMethod=function(e,t,i,r){var o=function(){return n(i,r,3),t.apply(e?e:this,arguments)};return o.deprecatedFunction=t,o},t.callDeprecatedFunction=function(e,t,n,i){var r,o,a=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(r=Montage.getInfoForObject(e).objectName,i?console.warn(n+" is deprecated, use "+i+" instead.",r):console.warn(n,r)),Error.stackTraceLimit=a,o=ARRAY_PROTOTYPE.slice.call(arguments,4),t.apply(e?e:this,o)}}});