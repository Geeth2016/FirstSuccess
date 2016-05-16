"use strict";var Montage=require("../core").Montage,Promise=require("../promise").Promise,ObjectProperty=require("./object-property").ObjectProperty,BinderModule=require("./binder"),BlueprintReference=require("./blueprint-reference").BlueprintReference,PropertyBlueprint=require("./property-blueprint").PropertyBlueprint,AssociationBlueprint=require("./association-blueprint").AssociationBlueprint,DerivedPropertyBlueprint=require("./derived-property-blueprint").DerivedPropertyBlueprint,EventBlueprint=require("./event-blueprint").EventBlueprint,PropertyValidationRule=require("./validation-rule").PropertyValidationRule,deprecate=require("../deprecate"),logger=require("../logger").logger("blueprint"),Defaults={name:"default",customPrototype:!1},Blueprint=exports.Blueprint=Montage.specialize({FileExtension:{value:".meta"},constructor:{value:function Blueprint(){this.superForValue("constructor")(),this._eventBlueprints=[],this.defineBinding("eventBlueprints",{"<-":"_eventBlueprints.concat(parent.eventBlueprints)"})}},initWithName:{value:function(e){return this._name=null!==e?e:"default",this.customPrototype=!1,this}},initWithNameAndModuleId:{value:deprecate.deprecateMethod(void 0,function(e){return this.initWithName(e)},"Blueprint#initWithNameAndModuleId","ModuleBlueprint#initWithModuleAndExportName")},serializeSelf:{value:function(e){e.setProperty("name",this.name),this._binder&&!this.binder.isDefault&&e.setProperty("binder",this._binder,"reference"),this.blueprintInstanceModule&&e.setProperty("blueprintModule",this.blueprintInstanceModule),this._parentReference&&e.setProperty("parent",this._parentReference),this._setPropertyWithDefaults(e,"customPrototype",this.customPrototype),this._propertyBlueprints.length>0&&e.setProperty("propertyBlueprints",this._propertyBlueprints),Object.getOwnPropertyNames(this._propertyBlueprintGroups).length>0&&e.setProperty("propertyBlueprintGroups",this._propertyBlueprintGroups),this._eventBlueprints.length>0&&e.setProperty("eventBlueprints",this._eventBlueprints),this._propertyValidationRules.length>0&&e.setProperty("propertyValidationRules",this._propertyValidationRules)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name");var t=e.getProperty("binder");t&&(this._binder=t),this.blueprintInstanceModule=e.getProperty("blueprintModule"),this._parentReference=e.getProperty("parent"),this.customPrototype=this._getPropertyWithDefaults(e,"customPrototype");var n;n=e.getProperty("propertyBlueprints"),n&&(this._propertyBlueprints=n),n=e.getProperty("propertyBlueprintGroups"),n&&(this._propertyBlueprintGroups=n),n=e.getProperty("eventBlueprints"),n&&(this._eventBlueprints=n),n=e.getProperty("propertyValidationRules"),n&&(this._propertyValidationRules=n)}},_setPropertyWithDefaults:{value:function(e,t,n){n!=Defaults[t]&&e.setProperty(t,n)}},_getPropertyWithDefaults:{value:function(e,t){var n=e.getProperty(t);return n?n:Defaults[t]}},_name:{value:null},name:{get:function(){return this._name}},create:{value:function(e,t){if(e===void 0||Blueprint.prototype.isPrototypeOf(e)){var n=Object.getPrototypeOf(Blueprint).create;return n.call(this,e===void 0?this:e,t)}var r=Montage.create(e,t);return this.ObjectProperty.applyWithBlueprint(r.prototype,this),this.customPrototype=!0,r}},newInstance:{value:function(){var e=this.newInstancePrototype();return e?new e:null}},newInstancePrototype:{value:function(){if(!this.customPrototype){var e=this.parent?this.parent.newInstancePrototype():Montage,t=Montage.create(e,{init:{value:function(){return this}}});return this.ObjectProperty.applyWithBlueprint(t.prototype,this),t?t:null}throw Error("FIXME")}},ObjectProperty:{serializable:!1,enumerable:!0,get:function(){return this.binder?this.binder.ObjectProperty:BinderModule.Binder.manager.defaultBlueprintObjectProperty}},blueprintInstanceModule:{serializable:!1,value:null},blueprintInstanceModuleId:{get:function(){throw Error("blueprintInstanceModuleId is deprecated, use blueprintInstanceModule instead")},set:function(){throw Error("blueprintInstanceModuleId is deprecated, use blueprintInstanceModule instead")}},identifier:{get:function(){return["blueprint",(this.name||"unnamed").toLowerCase()].join("_")}},_binder:{value:null},binder:{serializable:!1,get:function(){return this._binder||(this._binder=BinderModule.Binder.manager.defaultBinder,this._binder.addBlueprint(this)),this._binder},set:function(e){this._binder=e}},_parentReference:{value:null},_parent:{value:null},parent:{serializable:!1,get:function(){return this._parent},set:function(e){e?(this._parentReference=(new BlueprintReference).initWithValue(e),this._parent=e):(this._parentReference=null,this._parent=null)}},moduleId:{get:function(){throw Error("Blueprint#moduleId is deprecated, use ModuleBlueprint#module instead")},set:function(){throw Error("Blueprint#moduleId is deprecated, use ModuleBlueprint#module instead")}},prototypeName:{get:function(){throw Error("Blueprint#prototypeName is deprecated, use ModuleBlueprint#exportName instead")},set:function(){throw Error("Blueprint#prototypeName is deprecated, use ModuleBlueprint#exportName instead")}},customPrototype:{value:!1},_propertyBlueprints:{value:[],distinct:!0},propertyBlueprints:{get:function(){var e=[];return e=e.concat(this._propertyBlueprints),this.parent&&(e=e.concat(this.parent.propertyBlueprints)),e}},_propertyBlueprintsTable:{value:{},distinct:!0,writable:!1},addPropertyBlueprint:{value:function(e){if(null!==e&&null!==e.name){var t=this._propertyBlueprints.indexOf(e);0>t&&(null!==e.owner&&e.owner!==this&&e.owner.removePropertyBlueprint(e),this._propertyBlueprints.push(e),this._propertyBlueprintsTable[e.name]=e,e._owner=this)}return e}},removePropertyBlueprint:{value:function(e){if(null!==e&&null!==e.name){var t=this._propertyBlueprints.indexOf(e);t>=0&&(this._propertyBlueprints.splice(t,1),delete this._propertyBlueprintsTable[e.name],e._owner=null)}return e}},newPropertyBlueprint:{value:function(e,t){return(new PropertyBlueprint).initWithNameBlueprintAndCardinality(e,this,t)}},newAssociationBlueprint:{value:function(e,t){return(new AssociationBlueprint).initWithNameBlueprintAndCardinality(e,this,t)}},newDerivedPropertyBlueprint:{value:function(e,t){return(new DerivedPropertyBlueprint).initWithNameBlueprintAndCardinality(e,this,t)}},addToOnePropertyBlueprintNamed:{value:function(e){return this.addPropertyBlueprint(this.newPropertyBlueprint(e,1))}},addToManyPropertyBlueprintNamed:{value:function(e){return this.addPropertyBlueprint(this.newPropertyBlueprint(e,1/0))}},addToOneAssociationBlueprintNamed:{value:function(e,t){var n=this.addPropertyBlueprint(this.newAssociationBlueprint(e,1));return t&&(n.targetBlueprint=t.owner,t.targetBlueprint=this),n}},addToManyAssociationBlueprintNamed:{value:function(e,t){var n=this.addPropertyBlueprint(this.newAssociationBlueprint(e,1/0));return t&&(n.targetBlueprint=t.owner,t.targetBlueprint=this),n}},propertyBlueprintForName:{value:function(e){var t=this._propertyBlueprintsTable[e];if(t===void 0){t=UnknownPropertyBlueprint;var n,r;for(r=0;(n=this._propertyBlueprints[r])!==void 0;r++)if(n.name===e){t=n;break}this._propertyBlueprintsTable[e]=t}return t===UnknownPropertyBlueprint&&(t=null),!t&&this.parent&&(t=this.parent.propertyBlueprintForName(e)),t}},_propertyBlueprintGroups:{distinct:!0,value:{}},propertyBlueprintGroups:{get:function(){var e=[];for(var t in this._propertyBlueprintGroups)e.push(t);return this.parent&&(e=e.concat(this.parent.propertyBlueprintGroups)),e}},propertyBlueprintGroupForName:{value:function(e){var t=this._propertyBlueprintGroups[e];return!t&&this.parent&&(t=this.parent.propertyBlueprintGroupForName(e)),t}},addPropertyBlueprintGroupNamed:{value:function(e){var t=this._propertyBlueprintGroups[e];return null==t&&(t=[],this._propertyBlueprintGroups[e]=t),t}},removePropertyBlueprintGroupNamed:{value:function(e){var t=this._propertyBlueprintGroups[e];return null!=t&&delete this._propertyBlueprintGroups[e],t}},addPropertyBlueprintToGroupNamed:{value:function(e,t){var n=this._propertyBlueprintGroups[t];null==n&&(n=this.addPropertyBlueprintGroupNamed(t));var r=n.indexOf(e);return 0>r&&n.push(e),n}},removePropertyBlueprintFromGroupNamed:{value:function(e,t){var n=this._propertyBlueprintGroups[t];if(null!=n&&null!=e){var r=n.indexOf(e);r>=0&&n.splice(r,1)}return null!=n?n:[]}},_eventBlueprints:{value:null},eventBlueprints:{value:null},_eventBlueprintsTable:{value:{},distinct:!0,writable:!1},addEventBlueprint:{value:function(e){if(null!==e&&null!==e.name){var t=this._eventBlueprints.indexOf(e);0>t&&(e.owner&&e.owner!==this&&e.owner.removeEventBlueprint(e),this._eventBlueprints.push(e),this._eventBlueprintsTable[e.name]=e,e._owner=this)}return e}},removeEventBlueprint:{value:function(e){if(null!==e&&null!==e.name){var t=this._eventBlueprints.indexOf(e);t>=0&&(this._eventBlueprints.splice(t,1),delete this._eventBlueprintsTable[e.name],e._owner=null)}return e}},newEventBlueprint:{value:function(e){return(new EventBlueprint).initWithNameAndBlueprint(e,this)}},addEventBlueprintNamed:{value:function(e){return this.addEventBlueprint(this.newEventBlueprint(e))}},eventBlueprintForName:{value:function(e){var t=this._eventBlueprintsTable[e];if(t===void 0){t=UnknownEventBlueprint;var n,r;for(r=0;(n=this._eventBlueprints[r])!==void 0;r++)if(n.name===e){t=n;break}this._eventBlueprintsTable[e]=t}return t===UnknownEventBlueprint&&(t=null),!t&&this.parent&&(t=this.parent.eventBlueprintForName(e)),t}},_propertyValidationRules:{value:{}},propertyValidationRules:{get:function(){var e=[];for(var t in this._propertyValidationRules)e.push(this._propertyValidationRules[t]);return this.parent&&(e=e.concat(this.parent.propertyValidationRules)),e}},propertyValidationRuleForName:{value:function(e){var t=this._propertyValidationRules[e];return!t&&this.parent&&(t=this.parent.propertyValidationRuleForName(e)),t}},addPropertyValidationRule:{value:function(e){var t=this._propertyValidationRules[e];return null==t&&(t=(new PropertyValidationRule).initWithNameAndBlueprint(e,this),this._propertyValidationRules[e]=t),t}},removePropertyValidationRule:{value:function(e){var t=this._propertyValidationRules[e];return null!=t&&delete this._propertyValidationRules[e],t}},evaluateRules:{value:function(e){var t=[];for(var n in this._propertyValidationRules){var r=this._propertyValidationRules[n];r.evaluateRule(e)&&t.push(r.messageKey)}return t}},blueprintModuleId:require("../core")._blueprintModuleIdDescriptor,blueprint:require("../core")._blueprintDescriptor},{getBlueprintWithModuleId:{value:deprecate.deprecateMethod(void 0,function(e,t){return require("./module-blueprint").ModuleBlueprint.getBlueprintWithModuleId(e,t)},"Blueprint.getBlueprintWithModuleId","ModuleBlueprint.getBlueprintWithModuleId")},createDefaultBlueprintForObject:{value:function(e){if(e){var t=Montage.getInfoForObject(e).isInstance?Object.getPrototypeOf(e):e,n=Montage.getInfoForObject(t),r=new this;for(var i in t)if("_"!==i.charAt(0)&&t.hasOwnProperty(i)){var o,a=t[i];o=Array.isArray(a)?r.addToManyPropertyBlueprintNamed(i):r.addToOnePropertyBlueprintNamed(i),r.addPropertyBlueprintToGroupNamed(o,n.objectName)}var s=Object.getPrototypeOf(t);return s&&"blueprint"in s?s.blueprint.then(function(e){return r.parent=e,r}):Promise.resolve(r)}return Promise.resolve(UnknownBlueprint)}}}),UnknownBlueprint=Object.freeze((new Blueprint).initWithName("Unknown")),UnknownPropertyBlueprint=Object.freeze((new PropertyBlueprint).initWithNameBlueprintAndCardinality("Unknown",null,1)),UnknownEventBlueprint=Object.freeze((new EventBlueprint).initWithNameAndBlueprint("Unknown",null));