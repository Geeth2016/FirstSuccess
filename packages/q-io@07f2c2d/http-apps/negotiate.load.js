montageDefine("07f2c2d","http-apps/negotiate",{dependencies:["q","mimeparse","./status"],factory:function(e,t){function n(e,t,n){var r=Object.keys(t),a=e.headers[n||"accept"]||"*",o=i.bestMatch(r,a);return t[o]}var r=e("q"),i=e("mimeparse"),a=e("./status");t.negotiate=n,t.Method=function(e,t){var n=Object.keys(e);return t||(t=a.methodNotAllowed),function(r){var i=r.method;return Object.has(n,i)?Object.get(e,i)(r):t(r)}};var o=function(e,t,n){return function(o,s){var l=Object.keys(o);return s||(s=a.notAcceptable),function(a){var c=a.headers[e]||"*",u=i.bestMatch(l,c);return a.terms=a.terms||{},a.terms[t]=u,Object.has(l,u)?r.when(o[u](a),function(e){return null!==n&&e&&200===e.status&&e.headers&&(e.headers[t]=u),e}):s(a)}}};t.ContentType=o("accept","content-type"),t.Language=o("accept-language","language"),t.Charset=o("accept-charset","charset"),t.Encoding=o("accept-encoding","encoding"),t.Host=function(e,t){var n=Object.keys(e).map(function(t){var n=t.split(":");return[t,n[0]||"*",n[1]||"*",e[t]]});return t||(t=a.notAcceptable),function(e){for(var r=0;n.length>r;r++){var i=n[r],a=i[0],o=i[1],s=i[2],l=i[3];if(!("*"!==o&&o!==e.hostname||"*"!==s&&s!==""+e.port))return e.terms=e.terms||{},e.terms.host=a,l(e)}return t(e)}},t.Select=function(e){return function(t){return r.when(e(t),function(e){return e(t)})}}}});