!function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function t(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function o(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function i(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function a(t,n){function o(){var e=a;i(e)&&e.a.parentNode&&n(e.g)}var a=t;e(t.b,o),e(t.c,o),i(t)}function s(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function d(){if(null===f)if(l()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);f=!!e&&603>parseInt(e[1],10)}else f=!1;return f}function l(){return null===p&&(p=!!document.fonts),p}function c(){if(null===u){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}u=""!==e.style.font}return u}function r(e,t){return[e.style,e.weight,c()?e.stretch:"","100px",t].join(" ")}var h=null,f=null,u=null,p=null;s.prototype.load=function(e,i){var s=this,c=e||"BESbswy",f=0,u=i||3e3,p=(new Date).getTime();return new Promise(function(e,i){if(l()&&!d()){var m=new Promise(function(e,t){function n(){(new Date).getTime()-p>=u?t():document.fonts.load(r(s,'"'+s.family+'"'),c).then(function(t){1<=t.length?e():setTimeout(n,25)},function(){t()})}n()}),w=new Promise(function(e,t){f=setTimeout(t,u)});Promise.race([w,m]).then(function(){clearTimeout(f),e(s)},function(){i(s)})}else t(function(){function t(){var t;(t=-1!=v&&-1!=y||-1!=v&&-1!=b||-1!=y&&-1!=b)&&((t=v!=y&&v!=b&&y!=b)||(null===h&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),h=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=h&&(v==g&&y==g&&b==g||v==x&&y==x&&b==x||v==E&&y==E&&b==E)),t=!t),t&&(T.parentNode&&T.parentNode.removeChild(T),clearTimeout(f),e(s))}function d(){if((new Date).getTime()-p>=u)T.parentNode&&T.parentNode.removeChild(T),i(s);else{var e=document.hidden;!0!==e&&void 0!==e||(v=l.a.offsetWidth,y=m.a.offsetWidth,b=w.a.offsetWidth,t()),f=setTimeout(d,50)}}var l=new n(c),m=new n(c),w=new n(c),v=-1,y=-1,b=-1,g=-1,x=-1,E=-1,T=document.createElement("div");T.dir="ltr",o(l,r(s,"sans-serif")),o(m,r(s,"serif")),o(w,r(s,"monospace")),T.appendChild(l.a),T.appendChild(m.a),T.appendChild(w.a),document.body.appendChild(T),g=l.a.offsetWidth,x=m.a.offsetWidth,E=w.a.offsetWidth,d(),a(l,function(e){v=e,t()}),o(l,r(s,'"'+s.family+'",sans-serif')),a(m,function(e){y=e,t()}),o(m,r(s,'"'+s.family+'",serif')),a(w,function(e){b=e,t()}),o(w,r(s,'"'+s.family+'",monospace'))})})},"undefined"!=typeof module?module.exports=s:(window.FontFaceObserver=s,window.FontFaceObserver.prototype.load=s.prototype.load)}(),new FontFaceObserver("LatoWeb").load().then(function(){document.documentElement.classList.add("lato-font-loaded")},console.log.bind(console,"Failed to load Lato font"));
//# sourceMappingURL=maps/lato-fontfaceobserver-8e3b53becb.js.map
