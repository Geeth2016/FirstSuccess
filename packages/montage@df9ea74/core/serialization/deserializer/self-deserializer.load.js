montageDefine("df9ea74","core/serialization/deserializer/self-deserializer",{dependencies:["../../core"],factory:function(e,t){var n=e("../../core").Montage,r=n.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},_unitNames:{value:null},_objectUnitNames:{value:null},create:{value:function(){return new this}},initWithObjectAndObjectDescriptorAndContextAndUnitNames:{value:function(e,t,n,r){return this._object=e,this._objectDescriptor=t,this._context=n,this._unitNames=r,this}},getProperty:{value:function(e){return this._objectDescriptor.properties?this._objectDescriptor.properties[e]:void 0}},getType:{value:function(){return"prototype"in this._objectDescriptor?"prototype":"object"in this._objectDescriptor?"object":void 0}},getTypeValue:{value:function(){return this._objectDescriptor.prototype||this._objectDescriptor.object}},getObjectByLabel:{value:function(e){this._context.getObject(e)}},deserializeProperties:{value:function(e){var t,r=this._object,i=this._objectDescriptor.properties;if(i){e||(e=n.getSerializablePropertyNames(r));for(var o=0,a=e.length;a>o;o++)t=e[o],r[t]=i[t]}}},deserializeUnit:{value:function(e){var t=this._objectUnitNames;t?-1===t.indexOf(e)&&t.push(e):(t=this._objectUnitNames=[e],this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,t))}},deserializeUnits:{value:function(){var e=this._objectUnitNames;if(e)for(var t,n=0;t=e[n];n++)-1===e.indexOf(t)&&e.push(t);else e=this._objectUnitNames=this._unitNames,this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,e)}}});t.SelfDeserializer=r}});