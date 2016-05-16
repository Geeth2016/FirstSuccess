montageDefine("df9ea74","core/tree-controller",{dependencies:["./core","collections/weak-map","frb/parse","frb/evaluate"],factory:function(e,t){var n=e("./core").Montage,r=e("collections/weak-map"),i=e("frb/parse"),a=e("frb/evaluate"),o=t.TreeNode=n.specialize({constructor:{value:function(e,t){this.data=e,this.controller=t}},isExpanded:{get:function(){return this.controller.isNodeExpanded(this.data)},set:function(e){e?this.controller.expandNode(this.data):this.controller.collapseNode(this.data)}}});t.TreeController=n.specialize({constructor:{value:function(){this._listenersHash={},this._listenersCounter=0}},_childrenExpressionProperty:{value:"children"},_childrenExpression:{value:null},childrenExpression:{get:function(){return null===this._childrenExpression?"children":this._childrenExpression},set:function(e){if(this._childrenExpression!==e){var t=null;this._childrenExpression=e,e?("string"==typeof e&&(t=i(e)),this._childrenExpressionProperty=null!==t&&"property"===t.type&&t.args&&2===t.args.length&&"value"===t.args[0].type&&"literal"===t.args[1].type?t.args[1].value:null):this._childrenExpressionProperty="children"}}},_data:{value:null},data:{get:function(){return this._data},set:function(e){this._data!==e&&(this._expansionMap=new r,this._data=e,this.handleTreeChange())}},handleTreeChange:{value:function(){this._isOwnUpdate||(this._updateListeners(),this.delegate&&this.delegate.handleTreeChange&&this.delegate.handleTreeChange())}},_expandNode:{value:function(e){return this.isNodeExpanded(e)?!1:(this._expansionMap.set(e,{}),!0)}},expandNode:{value:function(e){return"object"==typeof e&&this._expandNode(e)?(this.handleTreeChange(),!0):!1}},_expandAll:{value:function(e){var t,n,r=this.childrenFromNode(e);if(r&&(t=r.length))for(this._expandNode(e),n=0;t>n;n++)this._expandAll(r[n])}},expandAll:{value:function(){this._data&&(this._expandAll(this._data),this.handleTreeChange())}},_collapseNode:{value:function(e){return this._expansionMap.delete(e)}},collapseNode:{value:function(e){return"object"==typeof e&&this._collapseNode(e)?(this.handleTreeChange(),!0):!1}},isNodeExpanded:{value:function(e){return this._expansionMap.has(e)}},childrenFromNode:{value:function(e){return null===this._childrenExpressionProperty?a(this._childrenExpression,e):e[this._childrenExpressionProperty]}},_getReachableExpandedNodes:{value:function(e,t){var n,r,i,a;if(t||(t=[]),e&&(n=this._expansionMap.get(e))&&(t.push(e),r=this.childrenFromNode(e)))for(i=r.length,a=0;i>a;a++)this._getReachableExpandedNodes(r[a],t);return t}},_addListener:{value:function(e){var t,n,r=this._expansionMap.get(e);return this._isOwnUpdate=!0,t=new o(e,this),n=t.addRangeAtPathChangeListener(this._childrenExpression?"data.path(controller._childrenExpression)":"data.children",this,"handleTreeChange"),this._isOwnUpdate=!1,this._listenersCounter++,this._listenersHash[this._listenersCounter]={cancelListener:n,node:e},r.listenerId=this._listenersCounter,this._listenersCounter}},_removeListener:{value:function(e){var t=this._listenersHash[e].node,n=this._expansionMap.get(t);this._listenersHash[e].cancelListener(),n&&delete n.listenerId}},_updateListeners:{value:function(){var e,t,n,r=this._getReachableExpandedNodes(this._data),i=r.length,a={},o=[];for(n=0;i>n;n++)e=this._expansionMap.get(r[n]),e.listenerId?o.push(e.listenerId):o.push(this._addListener(r[n])),a[e.listenerId]=this._listenersHash[e.listenerId],delete this._listenersHash[e.listenerId];for(t in this._listenersHash)this._removeListener(t);this._listenersHash=a}}})}});