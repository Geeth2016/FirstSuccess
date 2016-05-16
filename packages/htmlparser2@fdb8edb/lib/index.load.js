montageDefine("fdb8edb","lib/index",{dependencies:["./Parser.js","domhandler","./FeedHandler.js","./Tokenizer.js","domelementtype","./Stream.js","./WritableStream.js","./ProxyHandler.js","domutils","./CollectingHandler.js"],factory:function(e,t,n){function r(e,t){return delete n.exports[e],n.exports[e]=t,t}n.exports={get Parser(){return r("Parser",e("./Parser.js"))},get DomHandler(){return r("DomHandler",e("domhandler"))},get FeedHandler(){return r("FeedHandler",e("./FeedHandler.js"))},get Tokenizer(){return r("Tokenizer",e("./Tokenizer.js"))},get ElementType(){return r("ElementType",e("domelementtype"))},get Stream(){return r("Stream",e("./Stream.js"))},get WritableStream(){return r("WritableStream",e("./WritableStream.js"))},get ProxyHandler(){return r("ProxyHandler",e("./ProxyHandler.js"))},get DomUtils(){return r("DomUtils",e("domutils"))},get CollectingHandler(){return r("CollectingHandler",e("./CollectingHandler.js"))},get DefaultHandler(){return r("DefaultHandler",this.DomHandler)},get RssHandler(){return r("RssHandler",this.FeedHandler)},createDomStream:function(e,t,r){var i=new n.exports.DomHandler(e,t,r);return new n.exports.Parser(i,t)},EVENTS:{attribute:2,cdatastart:0,cdataend:0,text:1,processinginstruction:2,comment:1,commentend:0,closetag:1,opentag:2,opentagname:1,error:1,end:0}}}});