var w=Object.defineProperty,k=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var _=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))F.call(t,s)&&_(e,s,t[s]);if(i)for(var s of i(t))R.call(t,s)&&_(e,s,t[s]);return e},y=(e,t)=>k(e,C(t));import{_ as b,r as p,o as r,g as l,a as o,t as a,l as d,m,b as u,d as E,c as v,w as f,k as I,p as M,i as $}from"./main.ff91f6f2.js";const B={},D={class:"p-6"},L={class:"text-center"},V={class:"border-b"},N=o("thead",null,[o("tr",null,[o("th",null,"Selected Accounts")])],-1),S=["item"],A={class:"border-b"},O=o("thead",null,[o("tr",null,[o("th",{colspan:"2"},"Money into selected accounts comes from")])],-1),U=["item"],j=o("td",null,"Money In",-1),q={class:"border-b"},z=o("thead",null,[o("tr",null,[o("th",{colspan:"2"},"Money out of selected accounts goes to")])],-1),G=["item"],H=o("td",null,"Money Out",-1),J=o("td",null,"Difference",-1);function K(e,t){const s=p("amount-financial");return r(),l("div",D,[o("h2",L,a(e.store.props.company)+" "+a(e.store.props.title)+" From "+a(e.store.convert_date(e.store.props.date_start))+" to "+a(e.store.convert_date(e.store.props.date_end)),1),o("div",V,[o("table",null,[N,o("tbody",null,[(r(!0),l(d,null,m(e.store.props.selected_accounts,n=>(r(),l("tr",{key:n.guid,item:n},[o("td",null,a(n.name),1)],8,S))),128))])])]),o("div",A,[o("table",null,[O,o("tbody",null,[(r(!0),l(d,null,m(e.store.props.money_in,n=>(r(),l("tr",{key:n.guid,item:n},[o("td",null,a(n.name),1),o("td",null,[u(s,{amount:n.amount,commodity:n.commodity},null,8,["amount","commodity"])])],8,U))),128))]),o("tbody",null,[o("tr",null,[j,o("th",null,[u(s,{amount:e.store.props.money_in_amount,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])])]),o("div",q,[o("table",null,[z,o("tbody",null,[(r(!0),l(d,null,m(e.store.props.money_out,n=>(r(),l("tr",{key:n.guid,item:n},[o("td",null,a(n.name),1),o("td",null,[u(s,{amount:n.amount,commodity:n.commodity},null,8,["amount","commodity"])])],8,G))),128))]),o("tbody",null,[o("tr",null,[H,o("th",null,[u(s,{amount:e.store.props.money_out_amount,commodity:e.store.props.currency},null,8,["amount","commodity"])])]),o("tr",null,[J,o("th",null,[u(s,{amount:e.store.props.money_in_amount-e.store.props.money_out_amount,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])])])])}var P=b(B,[["render",K],["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/reports/ReportsIncomeExpenseCashFlow.vue"]]);const Q={class:"flex gap-2"},T=["value"],W={class:"bg-white shadow mt-4 prose max-w-none"},X={data(){return{extra_params:{level:0},levels:[0,1,2,3,4,5,6]}}},Y=E(y(h({},X),{name:"ReportsIncomeExpenseCashFlow",setup(e){return(t,s)=>{const n=p("form-label"),g=p("ReportLayout");return r(),v(g,{title:"Cash Flow",extra_params:t.extra_params},{settings:f(()=>[o("div",Q,[o("div",null,[u(n,{for:"levels",value:"Account Display Length"}),I(o("select",{id:"levels","onUpdate:modelValue":s[0]||(s[0]=c=>t.store.report_settings.params.level=c),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(r(!0),l(d,null,m(t.levels,c=>(r(),l("option",{value:c},a(c),9,T))),256))],512),[[M,t.store.report_settings.params.level]])])])]),default:f(()=>[o("div",W,[t.store.props.currency&&!t.store.processing?(r(),v(P,{key:0})):$("v-if",!0)])]),_:1},8,["extra_params"])}}}));var oo=b(Y,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/reports/ReportsIncomeExpenseCashFlow.vue"]]);export{oo as default};
