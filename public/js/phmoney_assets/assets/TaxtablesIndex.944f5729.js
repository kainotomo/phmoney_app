var k=Object.defineProperty,w=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&m(e,a,t[a]);if(_)for(var a of _(t))T.call(t,a)&&m(e,a,t[a]);return e},b=(e,t)=>w(e,$(t));import{_ as f,r,o as n,g as d,a as s,b as l,w as i,l as I,m as L,t as N,i as x,c as y,d as A}from"./main.ff91f6f2.js";const B={methods:{async load(e){await this.store.get("/phmoney/business/taxtables",{page:e})},async destroy(e){confirm("Are you sure you want to delete this item?")&&(await this.store.delete(`/phmoney/business/taxtables/destroy/${e.pk}`),this.load(1))}}},P={class:"p-6 overflow-x-auto"},E=s("th",null,"Name",-1),V=s("span",{class:"material-icons-outlined"},"add",-1),D={class:"flex"},R=s("span",{class:"material-icons-outlined"},"view_list",-1),F=s("span",{class:"material-icons-outlined"},"edit",-1),S=["onClick"],j=s("span",{class:"material-icons-outlined"},"delete",-1),q=[j];function z(e,t,a,p,M,c){const g=r("form-button"),u=r("RouterLink"),v=r("Pagination");return n(),d("div",P,[s("table",null,[s("thead",null,[s("tr",null,[E,s("th",null,[l(g,{onClick:t[0]||(t[0]=o=>e.$router.push({name:"business.taxtables.create"})),title:"Add New"},{default:i(()=>[V]),_:1})])])]),s("tbody",null,[e.store.props.taxtables?(n(!0),d(I,{key:0},L(e.store.props.taxtables.data,o=>(n(),d("tr",{key:o.guid},[s("td",null,N(o.name),1),s("td",null,[s("div",D,[l(u,{class:"text-gray-500 hover:text-gray-300",to:{name:"business.taxtables.entrys.index",params:{taxtable_pk:o.pk}},title:"Tax Table Entries"},{default:i(()=>[R]),_:2},1032,["to"]),l(u,{class:"text-sky-500 hover:text-sky-300",to:{name:"business.taxtables.edit",params:{taxtable_pk:o.pk}},title:"Edit"},{default:i(()=>[F]),_:2},1032,["to"]),s("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:O=>c.destroy(o),title:"Delete"},q,8,S)])])]))),128)):x("v-if",!0)]),s("tfoot",null,[e.store.props.taxtables&&e.store.props.taxtables.total>e.store.props.taxtables.per_page?(n(),y(v,{key:0,current:e.store.props.taxtables.current_page,total:e.store.props.taxtables.total,"per-page":e.store.props.taxtables.per_page,onPageChanged:c.load},null,8,["current","total","per-page","onPageChanged"])):x("v-if",!0)])])])}var G=f(B,[["render",z],["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/business/taxtables/TaxtablesIndex.vue"]]);const H={class:"bg-white shadow mt-4 prose max-w-none"},J={async created(){await this.store.get("/phmoney/business/taxtables")}},K=A(b(h({},J),{name:"TaxtablesIndex",setup(e){return(t,a)=>{const p=r("AppLayout");return n(),y(p,{title:"Tax Tables"},{default:i(()=>[s("div",H,[l(G)])]),_:1})}}}));var W=f(K,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/business/taxtables/TaxtablesIndex.vue"]]);export{W as default};
