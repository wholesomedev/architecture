(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/app/components/Architecture/Architecture.module.scss":function(e,t,n){},"./src/app/components/Architecture/Architecture.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return A});var s=n("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"),r=n.n(s),o=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),c=n.n(o),i=n("./node_modules/@babel/runtime/helpers/createClass.js"),u=n.n(i),l=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),a=n.n(l),d=n("./node_modules/@babel/runtime/helpers/inherits.js"),p=n.n(d),m=n("./node_modules/lodash-es/isEqual.js"),h=n("./node_modules/react/index.js"),b=n.n(h),f=n("./node_modules/vis/dist/vis.js"),k=n.n(f),j=n("./node_modules/reactstrap/dist/reactstrap.es.js"),_=n("./node_modules/react-redux/es/index.js"),v=n("./src/app/architecturalComponents/helpers.ts"),g=n("./src/app/store/reducers.ts"),C=n("./src/app/components/Architecture/Architecture.module.scss"),w=n.n(C),A=Object(_.b)(function(e){return{selectedArchitectureItem:Object(g.a)(e)}})(function(e){function t(){var e;return c()(this,t),(e=a()(this,(t.__proto__||r()(t)).apply(this,arguments))).container=null,e.network=null,e.getOptions=function(){return{autoResize:!0,clickToUse:!0,width:"100%",height:"100%"}},e.getSelectedNode=function(e){return e.components.map(v.b).find(function(t){var n=t.id;return null!==e.selectedArchitectureItem&&e.selectedArchitectureItem.itemId===n})},e.getSelectedEdge=function(e){return e.links.map(v.a).find(function(t){var n=t.id;return null!==e.selectedArchitectureItem&&e.selectedArchitectureItem.itemId===n})},e.setContainerRef=function(t){e.container=t},e}return p()(t,e),u()(t,[{key:"componentWillReceiveProps",value:function(e){if(!Object(m.a)(this.props.selectedArchitectureItem,e.selectedArchitectureItem)&&null!==this.network)if(e.selectedArchitectureItem){var t=this.getSelectedNode(e),n=this.getSelectedEdge(e);this.network.setSelection({nodes:t?[t.id]:[],edges:n?[n.id]:[]})}else this.network.unselectAll()}},{key:"componentDidMount",value:function(){this.createArchitecture(this.props)}},{key:"createArchitecture",value:function(e){var t=new k.a.DataSet,n=new k.a.DataSet;t.add(e.components.map(v.b)),n.add(e.links.map(v.a));var s={nodes:t,edges:n};this.network=new k.a.Network(this.container,s,{}),this.network.on("click",function(t){var n=t.nodes,s=t.edges,r=n.length>0?n[0]:s.length>0?s[0]:null;e.onClick(r)})}},{key:"render",value:function(){return b.a.createElement(j.a,{className:w.a.root},b.a.createElement("div",{style:{height:100*this.props.components.length},className:w.a.content,ref:this.setContainerRef}))}}]),t}(b.a.Component))},"./src/app/pages/VisitorRequestProcessing/VisitorRequestProcessing.tsx":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"VisitorRequestProcessing",function(){return I});var s=n("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"),r=n.n(s),o=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),c=n.n(o),i=n("./node_modules/@babel/runtime/helpers/createClass.js"),u=n.n(i),l=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),a=n.n(l),d=n("./node_modules/@babel/runtime/helpers/inherits.js"),p=n.n(d),m=n("./node_modules/react/index.js"),h=n.n(m),b=n("./node_modules/react-hot-loader/index.js"),f=n("./node_modules/react-redux/es/index.js"),k=n("./src/app/components/Architecture/Architecture.tsx"),j=n("./src/app/architecturalComponents/componentMap.ts"),_=n("./src/app/architecturalComponents/linkMap.ts"),v=n("./src/app/store/actions.ts"),g=j.a.visitorComponent,C=j.a.browserComponent,w=_.a.visitorRequestProcessing["visitor-browser"],A=function(e){function t(){var e;return c()(this,t),(e=a()(this,(t.__proto__||r()(t)).apply(this,arguments))).components=[g,C],e.links=[w],e.handleClick=function(t){e.props.setSelectedItem({architecture:"visitorRequestProcessing",itemId:t})},e}return p()(t,e),u()(t,[{key:"render",value:function(){return h.a.createElement(k.a,{components:this.components,links:this.links,onClick:this.handleClick})}}]),t}(h.a.PureComponent),I=Object(b.hot)(e)(Object(f.b)(void 0,{setSelectedItem:v.a})(A))}.call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=2.afe8f91c917b57295220.js.map