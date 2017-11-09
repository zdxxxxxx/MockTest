define("node_modules/react-dom/lib/HTMLDOMPropertyConfig",function(e,t,a){"use strict";var r=e("node_modules/react-dom/lib/DOMProperty"),o=r.injection.MUST_USE_PROPERTY,i=r.injection.HAS_BOOLEAN_VALUE,n=r.injection.HAS_NUMERIC_VALUE,l=r.injection.HAS_POSITIVE_NUMERIC_VALUE,s=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE,c={isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+r.ATTRIBUTE_NAME_CHAR+"]*$")),Properties:{accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:i,allowTransparency:0,alt:0,as:0,async:i,autoComplete:0,autoPlay:i,capture:i,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:o|i,cite:0,classID:0,className:0,cols:l,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:i,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,"default":i,defer:i,dir:0,disabled:i,download:s,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:i,formTarget:0,frameBorder:0,headers:0,height:0,hidden:i,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:i,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:o|i,muted:o|i,name:0,nonce:0,noValidate:i,open:i,optimum:0,pattern:0,placeholder:0,playsInline:i,poster:0,preload:0,profile:0,radioGroup:0,readOnly:i,referrerPolicy:0,rel:0,required:i,reversed:i,role:0,rows:l,rowSpan:n,sandbox:0,scope:0,scoped:i,scrolling:0,seamless:i,selected:o|i,shape:0,size:l,sizes:0,span:l,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:n,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,"typeof":0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:i,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{},DOMMutationMethods:{value:function(e,t){return null==t?e.removeAttribute("value"):void("number"!==e.type||e.hasAttribute("value")===!1?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&e.setAttribute("value",""+t))}}};a.exports=c});