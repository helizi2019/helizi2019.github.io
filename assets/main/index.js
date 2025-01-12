System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/EventName.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"a0cf00BogBDh44WS/OgnBq6","EventName",void 0);e("EventName",function(e){return e.onRegBtnClick="onRegBtnClick",e}({}));n._RF.pop()}}}));

System.register("chunks:///_virtual/Global.ts",["cc"],(function(t){var e,r,c;return{setters:[function(t){e=t.cclegacy,r=t._decorator,c=t.sys}],execute:function(){var o,s;e._RF.push({},"bdffbxenlFB0qcbDz8rvEJP","Global",void 0);var a=r.ccclass;r.property,t("Global",a("Global")(((s=function(){function t(){}return t.saveToLocal=function(){c.localStorage.setItem("userData",JSON.stringify(t.userList))},t}()).userList=[],o=s))||o);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./EventName.ts","./Global.ts","./main.ts","./userItem.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Global.ts","./userItem.ts"],(function(t){var e,r,i,a,n,o,s,u,l,c,d,p,f,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t.cclegacy,o=t._decorator,s=t.EditBox,u=t.Node,l=t.Prefab,c=t.sys,d=t.instantiate,p=t.Component},function(t){f=t.Global},function(t){m=t.userItem}],execute:function(){var b,h,L,g,y,v,U,E,x,D,I;n._RF.push({},"a4facGDmUhBE7+Ku23VSM/6","main",void 0);var N=o.ccclass,z=o.property,w=t("UserState",function(t){return t.Normal="正常",t.Face="认证",t.Limit="上限",t}({}));t("main",(b=N("main"),h=z(s),L=z(s),g=z(u),y=z(l),b((E=e((U=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n))||this,i(e,"addUserEdbox",E,a(e)),i(e,"addUserNameEdbox",x,a(e)),i(e,"userList",D,a(e)),i(e,"userItem",I,a(e)),e}r(e,t);var n=e.prototype;return n.start=function(){this.loadLocalData()},n.update=function(t){},n.loadLocalData=function(){var t=c.localStorage.getItem("userData");t&&(t=JSON.parse(t),console.log(t,"本地"),f.userList=t,this.updateUserList())},n.updateUserList=function(){var t=this;this.userList.removeAllChildren(),f.userList.forEach((function(e,r){var i=d(t.userItem);i.getComponent(m).init(e),t.userList.addChild(i)})),f.saveToLocal()},n.addUser=function(){var t={id:this.addUserEdbox.string,name:this.addUserNameEdbox.string,state:w.Normal,mttCount:0,todayWin:0};f.userList.push(t),this.updateUserList(),this.addUserEdbox.string=""},e}(p)).prototype,"addUserEdbox",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(U.prototype,"addUserNameEdbox",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(U.prototype,"userList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(U.prototype,"userItem",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=U))||v));n._RF.pop()}}}));

System.register("chunks:///_virtual/userItem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventName.ts"],(function(t){var e,n,i,r,a,o,u,s,l,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,u=t.Label,s=t.game,l=t.Component},function(t){c=t.EventName}],execute:function(){var p,b,f,m,d,g,h,y,L;a._RF.push({},"80d4bQyEoJPiYHbpntd+0oo","userItem",void 0);var v=o.ccclass,z=o.property;t("userItem",(p=v("userItem"),b=z(u),f=z(u),m=z(u),p((h=e((g=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,i(e,"idLab",h,r(e)),i(e,"nameLab",y,r(e)),i(e,"stateLab",L,r(e)),e.user=null,e}n(e,t);var a=e.prototype;return a.init=function(t){this.user=t,this.idLab.string="id:"+t.id,this.nameLab.string="名:"+t.name,this.stateLab.string="状态:"+t.state.toString()},a.onButtonClick=function(){s.emit(c.onRegBtnClick,this.user.id)},a.start=function(){},a.update=function(t){},e}(l)).prototype,"idLab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=e(g.prototype,"nameLab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(g.prototype,"stateLab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=g))||d));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});