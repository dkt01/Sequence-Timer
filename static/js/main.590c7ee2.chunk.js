(this["webpackJsonpsequence-timer"]=this["webpackJsonpsequence-timer"]||[]).push([[0],{14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),r=n(8),a=n.n(r),o=(n(14),n(2)),c=n(3),l=n(5),m=n(4),u=(n(6),n(9)),h=n.n(u),p=n(0),d=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).startTimer=function(){i.setState({timerOn:!0,timerTime:i.state.timerTime,timerStart:Date.now()-i.state.timerTime}),i.noSleep.enable(),i.timer=setInterval((function(){i.setState({timerTime:Date.now()-i.state.timerStart}),i.props.onChange&&i.props.onChange(i.state.timerTime)}),1e3)},i.stopTimer=function(){i.setState({timerOn:!1}),i.noSleep.disable(),clearInterval(i.timer)},i.resetTimer=function(){i.setState({timerStart:0,timerTime:0}),i.props.onChange&&i.props.onChange(0)},i.noSleep=new h.a,i.state={timerOn:!1,timerStart:0,timerTime:0},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.timerTime,t=("0"+Math.floor(e/1e3)%60).slice(-2),n=("0"+Math.floor(e/6e4)%60).slice(-2);return Object(p.jsxs)("div",{className:"Stopwatch",children:[Object(p.jsxs)("div",{className:"Stopwatch-display",children:[n," : ",t]}),!1===this.state.timerOn&&0===this.state.timerTime&&Object(p.jsx)("button",{onClick:this.startTimer,children:"Start"}),!0===this.state.timerOn&&Object(p.jsx)("button",{onClick:this.stopTimer,children:"Stop"}),!1===this.state.timerOn&&this.state.timerTime>0&&Object(p.jsx)("button",{onClick:this.startTimer,children:"Resume"}),!1===this.state.timerOn&&this.state.timerTime>0&&Object(p.jsx)("button",{onClick:this.resetTimer,children:"Reset"})]})}}]),n}(i.Component),j="inactive",f="high",b="med",v="low",O="expired",T=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(o.a)(this,n),"undefined"===typeof(i=t.call(this,e)).props.timeRemaining_s&&(i.props.timeRemaining_s=i.props.totalTime_s),"undefined"===typeof i.props.status&&(i.props.status=j),i}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.totalTime_s,n=e.timeRemaining_s,i=("0"+n%60).slice(-2),s=("0"+Math.floor(n/60)%60).slice(-2),r=("0"+t%60).slice(-2),a=("0"+Math.floor(t/60)%60).slice(-2),o={opacity:n%2?.99:1};return Object(p.jsxs)("div",{className:"SequenceElementBlock Block-"+this.props.status,style:o,children:[Object(p.jsx)("p",{className:"SequenceElementTitle Title-"+this.props.status,children:this.props.name}),Object(p.jsxs)("p",{className:"SequenceElementTimeRemaining Time-"+this.props.status,children:[s,":",i," / ",a,":",r]})]})}}]),n}(i.Component);T.defaultProps={name:"",totalTime_s:0};var g=T,w=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.elapsedSeconds,n=0,i=s.a.Children.map(this.props.children,(function(i,r){var a=Math.min(i.props.totalTime_s,t),o=i.props.totalTime_s-a;return t-=a,0===o?(n++,s.a.cloneElement(i,{timeRemaining_s:o,status:O})):o<=e.props.critThreshold?s.a.cloneElement(i,{timeRemaining_s:o,status:v}):o<=e.props.warnThreshold?s.a.cloneElement(i,{timeRemaining_s:o,status:b}):a>0||r===n?s.a.cloneElement(i,{timeRemaining_s:o,status:f}):s.a.cloneElement(i,{timeRemaining_s:o,status:j})}));return Object(p.jsx)("div",{className:"SequenceTimeline",children:i})}}]),n}(i.Component);w.defaultProps={elapsedSeconds:0,warnThreshold:30,critThreshold:10};var S=w,x=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={time_ms:0},e.updateTime_ms=function(t){e.setState({time_ms:t})},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)("body",{children:Object(p.jsxs)("div",{className:"App App-body",children:[Object(p.jsx)(d,{onChange:this.updateTime_ms}),Object(p.jsxs)(S,{elapsedSeconds:Math.floor(this.state.time_ms/1e3),children:[Object(p.jsx)(g,{name:"Introductions",totalTime_s:120}),Object(p.jsx)(g,{name:"Project Presentation",totalTime_s:300}),Object(p.jsx)(g,{name:"Project Q&A",totalTime_s:300}),Object(p.jsx)(g,{name:"Robot Design Presentation",totalTime_s:300}),Object(p.jsx)(g,{name:"Robot Design Q&A",totalTime_s:300}),Object(p.jsx)(g,{name:"Core Values Q&A",totalTime_s:240}),Object(p.jsx)(g,{name:"Team Feedback",totalTime_s:240})]})]})})}}]),n}(s.a.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Sequence-Timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Sequence-Timer","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):k(t,e)}))}}()},6:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.590c7ee2.chunk.js.map