(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,t,a){"use strict";a.r(t);a(75),a(76),a(77),a(150),a(156);var n=a(34),r=a.n(n),m=a(7),i=a.n(m),s=a(0),c=a.n(s),l=a(179),u=a(175),o=a(176),d=a(157),h=a(160),b=a(4),p=a.n(b),f=(a(33),a(153),c.a.createContext({})),E=function(e){return c.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};E.propTypes={data:p.a.object,query:p.a.string.isRequired,render:p.a.func,children:p.a.func};var v=function(e){var t=e.children;return c.a.createElement(E,{query:"755544856",render:function(e){return c.a.createElement("main",null,t)},data:h})};v.propTypes={children:p.a.node.isRequired};var M=v,y=a(162),g=a.n(y),k=function(){return c.a.createElement(g.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"My Title"),c.a.createElement("script",{src:"https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js",crossorigin:!0}),c.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}))},N=a(181),I=a(180),S=a(177),T=a(182),x=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={memberName:""},a.addMember=a.addMember.bind(r()(a)),a.calculateMemberTotal=a.calculateMemberTotal.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.addMember=function(){this.props.addMember(this.state.memberName),this.setState({memberName:""})},a.calculateMemberTotal=function(e){return this.props.items.reduce(function(t,a){return a.members.includes(e)?t+a.price/a.members.length:t},0)},a.render=function(){var e=this;return c.a.createElement(N.a,null,c.a.createElement(N.a.Body,null,this.props.members.map(function(t,a){var n;return c.a.createElement(u.a,{style:{paddingBottom:"1em"}},c.a.createElement(o.a,{xs:9},c.a.createElement(N.a.Title,{key:a},t.name," - $",e.calculateMemberTotal(t.name).toFixed(2))),c.a.createElement(o.a,null,c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(I.a,((n={variant:"danger",onClick:function(){return e.props.removeMember(t.name)},style:{marginLeft:"auto"}}).variant="danger",n),"Remove"))))}),c.a.createElement(S.a,{className:"mb-3"},c.a.createElement(T.a,{placeholder:"Member Name",value:this.state.memberName,onChange:function(t){return e.setState({memberName:t.target.value})}}),c.a.createElement(S.a.Append,null,c.a.createElement(I.a,{variant:"primary",onClick:this.addMember},"Add")))))},t}(c.a.Component),C=a(178),w=function(e){return c.a.createElement(N.a,null,c.a.createElement(N.a.Body,null,c.a.createElement(C.a,{className:"justify-content-between"},c.a.createElement(N.a.Title,null,e.item.name," - $",e.item.price),c.a.createElement(I.a,{variant:"danger",onClick:function(){return e.removeItem(e.item.id)}},"Remove")),c.a.createElement("br",null),e.members.map(function(t,a){return c.a.createElement(N.a.Subtitle,{key:a,style:{paddingTop:"0.5em"}},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:e.item.id+"-switch-"+t.name,checked:e.item.members.includes(t.name),onChange:function(a){a.target.checked?e.checkMember(t.name,e.item.id):e.uncheckMember(t.name,e.item.id)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:e.item.id+"-switch-"+t.name},t.name)))})))},R=a(173),q=a.n(R),j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={itemName:"",itemPrice:0},a}return i()(t,e),t.prototype.render=function(){var e=this;return q.a.createElement(q.a.Fragment,null,q.a.createElement(u.a,null,q.a.createElement(o.a,null,q.a.createElement(S.a,{className:"mb-3"},q.a.createElement(T.a,{placeholder:"Item Name",value:this.state.itemName,onChange:function(t){return e.setState({itemName:t.target.value})}}),q.a.createElement(T.a,{placeholder:"Price",value:this.state.itemPrice,onChange:function(t){e.setState({itemPrice:t.target.value})}})))),q.a.createElement(u.a,null,q.a.createElement(o.a,null,q.a.createElement(C.a,null,q.a.createElement(I.a,{variant:"primary",onClick:function(){e.props.addItem(e.state.itemName,e.state.itemPrice),e.setState({itemPrice:0}),e.setState({itemName:""})},block:!0},"Add Item")))))},t}(q.a.Component),P=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={members:[],items:[]},a.addMember=a.addMember.bind(r()(a)),a.removeMember=a.removeMember.bind(r()(a)),a.checkMember=a.checkMember.bind(r()(a)),a.uncheckMember=a.uncheckMember.bind(r()(a)),a.addItem=a.addItem.bind(r()(a)),a.removeItem=a.removeItem.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.addMember=function(e){this.state.members.push({name:e}),this.state.items.forEach(function(t){t.members.push(e)}),this.setState({members:this.state.members,items:this.state.items})},a.removeMember=function(e){this.state.members.splice(this.state.members.findIndex(function(t){return t.name===e}),1),this.state.items.forEach(function(t){t.members.splice(t.members.findIndex(function(t){return t.name===e}),1)}),this.setState({members:this.state.members,items:this.state.items})},a.checkMember=function(e,t){var a=this.state.items.find(function(e){return e.id===t});a&&!a.members.includes(e)&&(a.members.push(e),this.setState({items:this.state.items}))},a.uncheckMember=function(e,t){var a=this.state.items.find(function(e){return e.id===t});if(a){var n=a.members.findIndex(function(t){return t===e});a.members.splice(n,1),this.setState({items:this.state.items})}},a.addItem=function(e,t){if(!isNaN(t)){var a={id:Object(d.v4)(),name:e,price:t,members:this.state.members.map(function(e){return e.name})};this.state.items.push(a),this.setState({items:this.state.items})}},a.removeItem=function(e){var t=this.state.items.findIndex(function(t){return t.id===e});t>-1&&(this.state.items.splice(t,1),this.setState({items:this.state.items}))},a.render=function(){var e=this;return c.a.createElement(M,null,c.a.createElement(k,null),c.a.createElement(l.a,{style:{paddingTop:"2em"}},c.a.createElement(u.a,null,c.a.createElement(o.a,null,c.a.createElement(x,{members:this.state.members,items:this.state.items,addMember:this.addMember,removeMember:this.removeMember}))),c.a.createElement("br",null),this.state.items.map(function(t,a){return c.a.createElement("div",{key:a,style:{paddingTop:"1em"}},c.a.createElement(w,{item:t,members:e.state.members,checkMember:e.checkMember,uncheckMember:e.uncheckMember,removeItem:e.removeItem}))}),c.a.createElement("br",null),c.a.createElement(j,{addItem:this.addItem})))},t}(c.a.Component);t.default=P},153:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Receipt Calculator"}}}}},161:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),m=a(4),i=a.n(m),s=a(69),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-4ab2e53b00605bcbabeb.js.map