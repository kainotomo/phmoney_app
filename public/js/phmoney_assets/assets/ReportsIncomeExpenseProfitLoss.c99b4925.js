var w=Object.defineProperty,L=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&y(e,t,r[t]);if(h)for(var t of h(r))$.call(r,t)&&y(e,t,r[t]);return e},v=(e,r)=>L(e,P(r));import{_ as k,r as u,o as n,g as l,a as o,t as a,l as p,m as _,q as c,c as i,b as d,d as E,w as g,k as I,p as C,i as N}from"./main.ff91f6f2.js";const B={},V={class:"p-6"},S={class:"text-center"},D={class:"border-b"},F=o("h3",null,"Revenues",-1),T={class:"w-full"},q=o("th",{class:"text-left"},"Total Revenue",-1),z={class:"text-right"},M={class:"border-b"},U=o("h3",null,"Expenses",-1),j={class:"w-full"},A=o("th",{class:"text-left"},"Total Expenses",-1),G={class:"text-right"},H={class:""},J={class:"w-full"},K={key:0,class:"text-left"},O={key:1,class:"text-left"},Q={class:"text-right"};function W(e,r){const t=u("amount-financial");return n(),l("div",V,[o("h2",S,a(e.store.props.company)+" "+a(e.store.props.title)+" For Period Covering "+a(e.store.convert_date(e.store.props.date_start))+" to "+a(e.store.convert_date(e.store.props.date_end)),1),o("div",D,[F,o("table",T,[(n(!0),l(p,null,_(e.store.props.incomes.items,s=>(n(),l("tr",{key:s.guid},[o("td",{style:c(`padding-left: ${s.level}rem`)},a(s.name_simple),5),o("td",{class:"text-right",style:c(`padding-right: ${s.level}rem`)},[e.store.props.level==s.level?(n(),i(t,{key:0,amount:-s.amount_sum,commodity:s.commodity},null,8,["amount","commodity"])):(n(),i(t,{key:1,amount:-s.amount,commodity:s.commodity},null,8,["amount","commodity"]))],4)]))),128)),o("tr",null,[q,o("th",z,[d(t,{amount:e.store.props.incomes.total,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])]),o("div",M,[U,o("table",j,[(n(!0),l(p,null,_(e.store.props.expenses.items,s=>(n(),l("tr",{key:s.guid},[o("td",{style:c(`padding-left: ${s.level}rem`)},a(s.name_simple),5),o("td",{class:"text-right",style:c(`padding-right: ${s.level}rem`)},[e.store.props.level==s.level?(n(),i(t,{key:0,amount:s.amount_sum,commodity:s.commodity},null,8,["amount","commodity"])):(n(),i(t,{key:1,amount:s.amount,commodity:s.commodity},null,8,["amount","commodity"]))],4)]))),128)),o("tr",null,[A,o("th",G,[d(t,{amount:e.store.props.expenses.total,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])]),o("div",H,[o("table",J,[o("tr",null,[e.store.props.net_income>=0?(n(),l("th",K,"Net Income for Period")):(n(),l("th",O,"Net Loss for Period")),o("th",Q,[d(t,{amount:e.store.props.net_income,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])])])}var X=k(B,[["render",W],["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/reports/ReportsIncomeExpenseProfitLoss.vue"]]);const Y={class:"flex gap-2"},Z=["value"],x={class:"bg-white shadow mt-4 prose max-w-none"},ee={data(){return{extra_params:{level:0},levels:[0,1,2,3,4,5,6]}}},oe=E(v(f({},ee),{name:"ReportsIncomeExpenseProfitLoss",setup(e){return(r,t)=>{const s=u("form-label"),b=u("ReportLayout");return n(),i(b,{title:"Profit & Loss",extra_params:r.extra_params},{settings:g(()=>[o("div",Y,[o("div",null,[d(s,{for:"levels",value:"Levels of subaccounts"}),I(o("select",{id:"levels","onUpdate:modelValue":t[0]||(t[0]=m=>r.store.report_settings.params.level=m),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),l(p,null,_(r.levels,m=>(n(),l("option",{value:m},a(m),9,Z))),256))],512),[[C,r.store.report_settings.params.level]])])])]),default:g(()=>[o("div",x,[r.store.props.currency&&!r.store.processing?(n(),i(X,{key:0})):N("v-if",!0)])]),_:1},8,["extra_params"])}}}));var re=k(oe,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/reports/ReportsIncomeExpenseProfitLoss.vue"]]);export{re as default};
