montageDefine("07f2c2d","http-apps/fs",{dependencies:["q","url2","mime","../fs","./status","./redirect","./negotiate","./html","../deprecate"],factory:function(e,t){var n=e("q"),r=e("url2"),i=e("mime"),a=e("../fs"),o=e("./status"),s=e("./redirect"),l=e("./negotiate"),c=e("./html"),u=e("../deprecate");t.File=function(e,n){return function(r){return t.file(r,e+"",n)}},t.FileTree=function(e,i){i||(i={}),i.notFound=i.notFound||o.notFound,i.file=i.file||t.file,i.directory=i.directory||t.directory,i.fs=i.fs||a;var l=i.fs;return e=l.canonical(e),function(t,a){r.parse(t.url),t.fs=l;var o=i.redirect||(t.permanent||i.permanent?s.permanentRedirect:s.temporaryRedirect);return n.when(e,function(e){var r=l.join(e,t.pathInfo.slice(1));return n.when(l.canonical(r),function(s){return i.followInsecureSymlinks&&(u.deprecationWarning("followInsecureSymlinks","followInsecureSymbolicLinks"),i.followInsecureSymbolicLinks=!0),l.contains(e,s)||i.followInsecureSymbolicLinks?r!==s&&i.redirectSymbolicLinks?o(t,l.relativeFromFile(r,s)):n.when(l.stat(s),function(e){return e.isFile()?i.file(t,s,i.contentType,l):e.isDirectory()?i.directory(t,s,i.contentType,l):i.notFound(t,a)}):i.notFound(t,a)},function(){return i.notFound(t,a)})})}},t.file=function(e,r,s,l){return l=l||a,s=s||i.lookup(r),n.when(l.stat(r),function(n){var i,a=t.etag(n),c={flags:"rb"},u=200,h={"content-type":s,etag:a};if("range"in e.headers)if("if-range"in e.headers&&a!=e.headers["if-range"]);else{if(i=f(e.headers.range,n.size),!i)return o.responseForStatus(e,416);if(i.end>n.size&&(i.end=n.size),i.end<=i.begin)return o.responseForStatus(e,416);u=206,h["content-range"]="bytes "+i.begin+"-"+(i.end-1)+"/"+n.size,h["content-length"]=""+(i.end-i.begin),c.begin=i.begin,c.end=i.end}else{if(a==e.headers["if-none-match"])return o.responseForStatus(e,304);h["content-length"]=""+n.size}return{status:u,headers:h,body:l.open(r,c),file:r,range:i}})};var h=/^\s*bytes\s*=\s*(\d*\s*-\s*\d*\s*(?:,\s*\d*\s*-\s*\d*\s*)*)$/,d=/^\s*(\d*)\s*-\s*(\d*)\s*$/,p=function(e,t){var n=d.exec(e);if(n&&(""!=n[1]||""!=n[2])){var r,i;return""==n[1]?(r=0,i=+n[2]+1):""==n[2]?(r=+n[1],i=t):(r=+n[1],i=+n[2]+1),{begin:r,end:i}}},f=t.interpretFirstRange=function(e,t){var n=h.exec(e);if(n){for(var r=n[1].split(/\s*,\s*/),i=p(r[0],t),a=0,o=r.length;o>a;a++){var s=p(r[a],t);if(!(s.begin<=i.end))return;i.end=s.end}return i}};t.etag=function(e){return[e.node.ino,e.size,e.lastModified().getTime()].join("-")},t.directory=function(e,t){var n=o.notFound(e);return n.directory=t,n},t.ListDirectories=function(e,r){return r=r||t.listDirectory,function(t){if(t.directoryIndex)throw Error("DirectoryIndex must be used after ListDirectories");return t.listDirectories=!0,n.fcall(e,t).then(function(e){return void 0!==e.directory?r(t,e):e})}},t.listDirectory=function(e,n){if(e.location=r.parse(e.path),e.location.file)return s.redirect(e,e.location.file+"/");var i={};i["text/plain"]=t.listDirectoryText,i["text/markdown"]=t.listDirectoryMarkdown,e.handleHtmlFragmentResponse&&(i["text/html"]=t.listDirectoryHtmlFragment),e.handleJsonResponse&&(i["application/json"]=t.listDirectoryJson);var a=l.negotiate(e,i)||function(){return n};return a(e,n)},t.listDirectoryHtmlFragment=function(e,n){return t.listDirectoryData(e,n).then(function(e){return{status:200,headers:{"content-type":"text/html"},htmlTitle:"Directory Index",htmlFragment:{forEach:function(t){t('<ul class="directory-index">\n'),Object.keys(e).sort().forEach(function(n){var r=e[n],i="";"directory"===r.type&&(i="/"),t('    <li class="entry '+r.type+'"><a href="'+c.escapeHtml(n+i)+'">'+c.escapeHtml(n+i)+"</a></li>\n")}),t("</ul>\n")}}}})},t.listDirectoryText=function(e,n){return t.listDirectoryData(e,n).then(function(e){return{status:200,headers:{"content-type":"text/plain"},body:{forEach:function(t){Object.keys(e).sort().forEach(function(n){var r=e[n],i="";"directory"===r.type&&(i="/"),t(n+i+"\n")})}}}})},t.listDirectoryMarkdown=function(e,n){return t.listDirectoryData(e,n).then(function(e){return{status:200,headers:{"content-type":"text/plain"},body:{forEach:function(t){t("\n# Directory Index\n\n"),Object.keys(e).forEach(function(n){var r=e[n],i="";"directory"===r.type&&(i="/"),t("-   "+n+i+"\n")}),t("\n")}}}})},t.listDirectoryJson=function(e,n){return t.listDirectoryData(e,n).then(function(e){return{status:200,headers:{},data:e}})},t.listDirectoryData=function(e,t){if(!e.fs)throw Error("Can't list a directory without a designated file system");var r=e.fs;return n.invoke(r,"list",t.directory).then(function(e){return e.sort(),e.map(function(e){return n.invoke(r,"stat",r.join(t.directory,e)).then(function(t){return t.isDirectory()?{name:e,stat:{type:"directory"}}:t.isFile()?{name:e,stat:{type:"file"}}:void 0},function(){})})}).all().then(function(e){var t={};return e.forEach(function(e){e&&(t[e.name]=e.stat)}),t})},t.DirectoryIndex=function(e,t){return t=t||"index.html",function(i){return i.directoryIndex=!0,i.location=r.parse(i.path),i.location.file===t?s.redirect(i,"."):n.fcall(e,i).then(function(a){if(void 0!==a.directory){if(i.location.file)return s.redirect(i,i.location.file+"/");var o=i.fs.join(a.directory,t);return n.invoke(i.fs,"isFile",o).then(function(n){return n?(i.url=r.resolve(i.url,t),i.pathInfo+=t,e(i)):a})}return a})}}}});