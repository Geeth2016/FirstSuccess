montageDefine("07f2c2d","http-apps/cookie",{dependencies:["q","../http-cookie"],factory:function(e,t){function n(e){var t=u.exec(e);return t?[t[1],t[2]]:[e,""]}function r(e){var t=n(e),r=t[0],i=t[1];if(c.test(r))return[r+i];if("localhost"===r)return[r+i];for(var t=r.split("."),a=[];t.length>1;)a.push("."+t.join(".")+i),t.shift();return a}function i(e,t){var r=n(e),i=r[0],a=r[1],o=n(t),s=o[0],l=o[1];return a!==l?!1:c.test(i)||c.test(s)?i===s:/^\./.test(i)?s.lastIndexOf(i)===s.length-i.length||i.slice(1)===s:i===s}function a(e,t){return/^\/$/.test(e)?0===t.indexOf(e):t===e||0===t.indexOf(e+"/")}function o(e){return[].concat.apply([],e)}var s=e("q"),l=e("../http-cookie");s.longStackSupport=!0,t.CookieJar=function(e){var t={};return function(u){if(!u.headers.host)throw Error("Requests must have a host header");var h=r(u.headers.host),d=new Date,p=o(h.map(function(e){for(var e in t){var n=t[e];for(var r in n){var s=n[r];for(var l in s){var c=s[l];c.expires&&c.expires>d&&delete c[l]}}}return o(Object.keys(t).map(function(e){if(!i(e,u.headers.host))return[];var n=t[e];return o(Object.keys(n).map(function(e){if(!a(e,u.path))return[];var t=n[e];return Object.keys(t).map(function(e){return t[e]}).filter(function(e){return e.secure?u.ssl:!0})}))}))}));return p.length&&(u.headers.cookie=p.map(function(e){return l.stringify(e.key,e.value,e)}).join("; ")),s.when(e.apply(this,arguments),function(e){if(e.headers=e.headers||{},e.headers["set-cookie"]){var r=u.headers.host,a=n(r),o=a[0],s=c.test(o)?r:"."+r;Array.isArray(e.headers["set-cookie"])||(e.headers["set-cookie"]=[e.headers["set-cookie"]]),e.headers["set-cookie"].forEach(function(n){var r=e.headers.date?new Date(e.headers.date):new Date;n=l.parse(n,r),n.host&&!i(s,n.host)&&delete n.host;var a=s||n.host,o=n.path||"/",c=t[a]=t[a]||{},u=c[o]=c[o]||{};u[n.key]=n}),delete e.headers["set-cookie"]}return e})}};var c=/^\d+\.\d+\.\d+\.\d+$/,u=/^(.*)(:\d+)$/}});