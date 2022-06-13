import{_ as u,r as m,o as s,g as c,a as o,t as n,F as i,m as p,q as _,b as a,d as y,c as d,w as h,i as f}from"./main.d009b879.js";const v={},g={class:"p-6"},b={class:"text-center"},w={class:"overflow-x-auto"},B=o("thead",null,[o("th",null,"Name"),o("th",null,"Code"),o("th",null,"Debit"),o("th",null,"Credit")],-1),C=o("th",null,null,-1);function k(e,l){const r=m("amount-financial");return s(),c("div",g,[o("h2",b,n(e.store.props.company)+" "+n(e.store.props.title)+" For Period Covering "+n(e.store.convert_date(e.store.props.date_start))+" to "+n(e.store.convert_date(e.store.props.date_end)),1),o("div",w,[o("table",null,[B,o("tbody",null,[(s(!0),c(i,null,p(e.store.props.items,t=>(s(),c("tr",{key:t.guid},[o("td",{style:_(`padding-left: ${t.level}rem`)},n(t.name_simple),5),o("td",null,n(t.code),1),o("td",null,[a(r,{amount:t.debit,commodity:t.commodity},null,8,["amount","commodity"])]),o("td",null,[a(r,{amount:t.credit,commodity:t.commodity},null,8,["amount","commodity"])])]))),128)),o("tr",null,[C,o("th",null,[a(r,{amount:e.store.props.total_debit,commodity:e.store.props.currency},null,8,["amount","commodity"])]),o("th",null,[a(r,{amount:e.store.props.total_credit,commodity:e.store.props.currency},null,8,["amount","commodity"])])])])])])])}var N=u(v,[["render",k]]);const R={class:"bg-white shadow mt-4 prose max-w-none"},F=y({name:"ReportsIncomeExpenseTrialBalance",setup(e){return(l,r)=>{const t=m("ReportLayout");return s(),d(t,{title:"Trial Balance",extra_params:{},show_export_csv:!0},{default:h(()=>[o("div",R,[l.store.props.currency&&!l.store.processing?(s(),d(N,{key:0})):f("",!0)])]),_:1})}}});export{F as default};
