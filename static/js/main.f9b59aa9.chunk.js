(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(8),c=a.n(n),i=(a(16),a(1)),o=a(2),r=a(3),m=a(5),p=a(4),u=a(6),d=(a(17),a(9)),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(Object(i.a)({},this.props.textLines)),a="completed"===this.props.filter?t.filter(function(t){return e.props.textLines[t]}):"active"===this.props.filter?t.filter(function(t){return!e.props.textLines[t]}):Object(d.a)(t);return this.props.viewedItems!==a.length&&this.props.countingItems(a.length),a.map(function(t){return s.a.createElement("li",{className:""},s.a.createElement("div",{className:"view"},s.a.createElement("input",{className:"toggle",type:"checkbox",checked:e.props.textLines[t],onClick:function(){return e.props.toggleIsComplete(t)}}),s.a.createElement("label",null,t),console.log(e.props.textLines),console.log(e.props.filter),s.a.createElement("button",{className:"destroy",onClick:function(){return e.props.removeTask(t)}})))})}}]),t}(s.a.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).countingItems=function(e){a.setState({viewedItems:e})},a.addTask=function(e){if("Enter"===e.key){var t=e.target.value;e.target.value="",a.setState({displayStyle:{display:"block"}}),a.setState(function(e){var a=Object(i.a)({},e.textLines);return a[t]=!1,{textLines:a}})}},a.changeDisplay=function(e){var t=e?{display:"none"}:{display:"block"};console.log(t),a.setState({displayStyle:t})},a.removeTask=function(e){a.setState(function(t){var a=Object(i.a)({},t.textLines);return delete a[e],{textLines:a}})},a.isComplete=function(e){a.setState(function(t){var a=Object(i.a)({},t.textLines);return a[e]=!t.textLines[e],{textLines:a}})},a.clearComplete=function(){a.setState(function(e){var t=Object(i.a)({},e.textLines);for(var a in t)t[a]&&delete t[a];return{textLines:t}})},a.state={textLines:{hello:!1,bye:!1,"another task":!1,"last task":!1},viewedItems:0,filter:null,displayStyle:{display:"block"},isSelect:{all:"selected",active:"",completed:""}},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return"block"===this.state.displayStyle.display&&0===Object.keys(this.state.textLines).length&&this.setState({displayStyle:{display:"none"}}),s.a.createElement("section",{className:"todoapp"},s.a.createElement("header",{className:"header"},s.a.createElement("h1",null,"todos App"),s.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:"",autocomplete:"off",onKeyPress:this.addTask})),s.a.createElement("section",{className:"main",style:this.state.displayStyle},s.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox"}),s.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),s.a.createElement("ul",{className:"todo-list"},s.a.createElement(f,{textLines:this.state.textLines,toggleIsComplete:this.isComplete,removeTask:this.removeTask,filter:this.state.filter,countingItems:this.countingItems,viewedItems:this.state.viewedItems}))),s.a.createElement("footer",{className:"footer",style:this.state.displayStyle},s.a.createElement("span",{className:"todo-count"},s.a.createElement("strong",null,this.state.viewedItems)," items left"),s.a.createElement("ul",{className:"filters"},s.a.createElement("li",null,s.a.createElement("a",{href:"#/",className:this.state.isSelect.all,onClick:function(){e.setState({filter:null,isSelect:{all:"selected",active:"",completed:""}})}},"All")),s.a.createElement("li",null,s.a.createElement("a",{href:"#/active",className:this.state.isSelect.active,onClick:function(){e.setState({filter:"active",isSelect:{all:"",active:"selected",completed:""}})}},"Active")),s.a.createElement("li",null,s.a.createElement("a",{href:"#/completed",className:this.state.isSelect.completed,onClick:function(){e.setState({filter:"completed",isSelect:{all:"",active:"",completed:"selected"}})}},"Completed"))),s.a.createElement("button",{className:"clear-completed",style:this.state.displayStyle,onClick:function(){e.clearComplete()}},"clear-completed")))}}]),t}(s.a.Component);c.a.render(s.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f9b59aa9.chunk.js.map