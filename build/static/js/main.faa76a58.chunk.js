(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(56)},39:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),o=(n(39),n(7)),i=n(8),s=n(10),u=n(9),m=n(11),d=n(20),p=n(31),h=n(12),f=n(13),E=(n(44),n(29)),v=n(33),g=n(22),b={campaigns:[],rescheduleTime:""},C=Object(f.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_ALL_CAMPAIGNS":return Object(g.a)({},e,{campaigns:t.payload});case"ADD_CAMPAIGN":var n=JSON.parse(JSON.stringify(e.campaigns));return n.push(t.payload),Object(g.a)({},e,{campaigns:n});case"SET_RESCHEDULE_TIME":return Object(g.a)({},e,{rescheduleTime:t.payload});default:return e}}}),O=[];O.push(Object(v.a)()),O.push(E.a);var k=f.a.apply(void 0,O),S=Object(f.d)(C,k),y=(n(45),n(16)),A=(n(46),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props;e.tabList,e.selectedTab;return r.a.createElement("div",{className:"title-bar"},r.a.createElement("div",null,r.a.createElement("img",{className:"logo",src:"/images/logo.png"}),r.a.createElement("div",{className:"app-version inline-block"},"BETA")))}}]),t}(a.Component)),M=(n(47),n(30)),T=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"popup"},r.a.createElement(M.a,{trigger:this.props.trigger,modal:!0,closeOnDocumentClick:!0},function(t){return r.a.createElement("div",{className:"modal"},r.a.createElement("a",{className:"close",onClick:function(){t()}},"\xd7"),function(){if(e.props.header)return r.a.createElement("div",{className:"popup-header"},e.props.header)}(),r.a.createElement("div",{className:"popup-content"},e.props.content))}))}}]),t}(a.Component),N=n(14),j=n.n(N),w={formatIntoTimeAgo:function(e){var t="from now";return Math.abs(j()().diff(e))<25e3?"just now":(j()().diff(e)>0&&(t=" ago"),j()(e).fromNow(!0)+t)},convertHtmlDateIntoMilliseconds:function(e){return j()(e,"YYYY-MM-DD").valueOf()},convertMillisecondsIntoHtmlTime:function(e){return j()(e).format("YYYY-MM-DD")}},I={getAllCampaigns:function(){return{type:"GET_ALL_CAMPAIGNS",payload:[{name:"Test Whatsapp",region:"US",createdOn:1559807714999,price:"Price info of Test Whatsapp",csv:"Some CSV link for Whatsapp",report:"Some report link for Whatsapp"},{name:"Super Jewels Quest",region:"CA, FR",createdOn:1559806715124,price:"Price info of Super Jewels Quest",csv:"Some CSV link for Super Jewels Quest",report:"Some report link for Super Jewels Ques"},{name:"Mole Slayer",region:"FR",createdOn:1559806711124,price:"Price info of Mole Slayer",csv:"Some CSV link for Mole Slayer",report:"Some report link for Mole Slayer"},{name:"Mancala Mix",region:"JP",createdOn:1559806680124,price:"Price info of Mancala Mix",csv:"Some CSV link for Mancala Mix",report:"Some report link for Mancala Mix"}]}},addCampaign:function(e){return{type:"ADD_CAMPAIGN",payload:e}},setRescheduleTime:function(e){return{type:"SET_RESCHEDULE_TIME",payload:e}}},R=(n(49),n(50),function(e){var t="custom-btn",n=e.onClick,a=function(e){t+=" "+e};return e.solid&&a("solid"),e.disabled&&(a("disabled"),n=null),e.className&&a(e.className),r.a.createElement("button",{className:t,onClick:n,onMouseUp:e.onMouseUp},r.a.createElement("div",{className:"button-content"},e.text))}),D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChangeTime=n.onChangeTime.bind(Object(y.a)(n)),n.onAddCampaign=n.onAddCampaign.bind(Object(y.a)(n)),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.getAllCampaigns()}},{key:"onAddCampaign",value:function(e){var t=JSON.parse(JSON.stringify(e)),n=this.props.home.rescheduleTime;t.createdOn=n,this.props.addCampaign(t)}},{key:"onClickReschedule",value:function(){this.props.setRescheduleTime("")}},{key:"onChangeTime",value:function(e){var t=w.convertHtmlDateIntoMilliseconds(e.target.value);this.props.setRescheduleTime(t)}},{key:"getRescheduleContent",value:function(e){var t=this,n=this.props.home.rescheduleTime;return r.a.createElement(a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date",value:w.convertMillisecondsIntoHtmlTime(n),onChange:this.onChangeTime})),r.a.createElement("div",{className:"cta-container"},r.a.createElement(R,{solid:!0,text:"Create",onClick:function(){return t.onAddCampaign(e)}})))}},{key:"renderStaticColumns",value:function(e){var t=e.name,n=e.price,l=e.csv,c=e.report;return r.a.createElement(a.Fragment,null,r.a.createElement("td",null,r.a.createElement(T,{trigger:r.a.createElement("div",null,"View Pricing"),content:r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("h5",null,n))})),r.a.createElement("td",null,r.a.createElement(T,{trigger:r.a.createElement("div",{className:"inline-block"},"CSV"),content:r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("h5",null,l))}),r.a.createElement(T,{trigger:r.a.createElement("div",{className:"inline-block"},"Report"),content:r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("h5",null,c))}),r.a.createElement(T,{trigger:r.a.createElement("div",{className:"inline-block",onClick:this.onClickReschedule},"Schedule Again"),content:this.getRescheduleContent(e)})))}},{key:"renderTableRows",value:function(){var e=this,t=this.props.home.campaigns;return(void 0===t?[]:t).map(function(t,n){var a=t.createdOn,l=t.name,c=t.region;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,w.formatIntoTimeAgo(a)),r.a.createElement("td",null,r.a.createElement("div",null,l),r.a.createElement("div",null,c)),e.renderStaticColumns(t))})}},{key:"renderTable",value:function(){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"DATE"),r.a.createElement("th",null,"CAMPAIGN"),r.a.createElement("th",null,"VIEW"),r.a.createElement("th",null,"ACTIONS"))),r.a.createElement("tbody",null,this.renderTableRows()))}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(A,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"heading"},"MANAGE CAMPAIGNS"),this.renderTable()))}}]),t}(a.Component),P=Object(d.b)(function(e){return{home:e.home}},function(e){return{getAllCampaigns:function(){e(I.getAllCampaigns())},addCampaign:function(t){e(I.addCampaign(t))},setRescheduleTime:function(t){e(I.setRescheduleTime(t))}}})(D),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:S},r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",component:P})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.faa76a58.chunk.js.map