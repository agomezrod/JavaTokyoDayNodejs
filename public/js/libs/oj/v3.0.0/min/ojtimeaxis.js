/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTimeAxis","ojs/ojvalidation-datetime"],function(a,g,c,b,d){a.ab("oj.ojTimeAxis",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",qh:function(a,b,c){return d.TimeAxis.newInstance(a,b,c)},rg:function(){var a=this._super();a.push("oj-timeaxis");return a},ok:function(){var a=this._super();a["oj-timeaxis-label"]={path:"labelStyle",property:"CSS_TEXT_PROPERTIES"};return a},Il:function(){return["optionChange"]},xj:function(){var a=
this.options.translations,b=this._super();b["DvtUtilBundle.TIMEAXIS"]=a.componentName;return b},Ir:function(){function a(c){var d=typeof b.options[c];"number"!==d&&"string"!==d&&(b.options[c]=null)}this._super();var b=this;a("start");a("end")},Yn:function(){null==this.options._resources&&(this.options._resources={});var b=this.options._resources,c=a.La.Vk(a.Mh.CONVERTER_TYPE_DATETIME),d=c.createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),g=c.createConverter({hour:"numeric",minute:"2-digit"}),
l=c.createConverter({hour:"numeric"}),m=c.createConverter({month:"numeric",day:"2-digit"}),p=c.createConverter({month:"long"}),t=c.createConverter({year:"numeric"}),r=c.createConverter({month:"short"}),n=c.createConverter({year:"2-digit"}),p={seconds:d,minutes:g,hours:l,days:m,weeks:m,months:p,quarters:p,years:t},d={seconds:d,minutes:g,hours:l,days:m,weeks:m,months:r,quarters:r,years:n};b.converterFactory=c;b.converter=p;b.converterVert=d;b.axisClass="oj-timeaxis-container";b.axisLabelClass="oj-timeaxis-label";
b.axisSeparatorClass="oj-timeaxis-separator";b.borderTopVisible=!1;b.borderRightVisible=!1;b.borderBottomVisible=!1;b.borderLeftVisible=!1;b.firstDayOfWeek=a.pb.mQ()}});a.U.ob("oj-time-axis","dvtBaseComponent",{properties:{converter:{type:"object",properties:{days:{},"default":{},hours:{},minutes:{},months:{},quarters:{},seconds:{},weeks:{},years:{}}},end:{type:"string"},scale:{type:"string",enumValues:"seconds minutes hours days weeks months quarters years".split(" ")},start:{type:"string"},translations:{properties:{componentName:{type:"string"}}}},
methods:{},extension:{mb:"ojTimeAxis"}});a.U.register("oj-time-axis",{metadata:a.U.getMetadata("oj-time-axis")})});