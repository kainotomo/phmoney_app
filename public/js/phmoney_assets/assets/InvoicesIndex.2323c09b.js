var j=Object.defineProperty,P=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var k=(e,t,i)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,b=(e,t)=>{for(var i in t||(t={}))U.call(t,i)&&k(e,i,t[i]);if(g)for(var i of g(t))A.call(t,i)&&k(e,i,t[i]);return e},w=(e,t)=>P(e,N(t));import{_ as I,r as a,o as d,g as u,a as o,b as l,k as D,p as L,w as p,l as E,m as S,t as _,i as x,c as C,d as F}from"./main.ff91f6f2.js";const O={data(){return{filter:{page:1,id:null,billing_id:null,owner_name:null,only_active:!1,only_posted:!1,only_paid:!1,invoice_type:null}}},methods:{clear(){this.filter={page:1,id:null,billing_id:null,owner_name:null,only_active:!1,only_posted:!1,only_paid:!1,invoice_type:null},this.load(1)},async load(e){this.filter.page=e,await this.store.get("/phmoney/business/invoices",this.filter)},async destroy(e){confirm("Are you sure you want to delete this item?")&&(await this.store.delete(`/phmoney/business/invoices/destroy/${e.pk}`),this.load(1))},owner(e){if(e.customer)return e.customer.name;if(e.vendor)return e.vendor.name;if(e.employee)return e.employee.username;if(e.job){if(e.job.customer)return e.job.customer.name;if(e.job.vendor)return e.job.vendor.name}},owner_type(e){if(e.customer)return"Invoice";if(e.vendor)return"Bill";if(e.employee)return"Voucher";if(e.job){if(e.job.customer)return"Invoice";if(e.job.vendor)return"Bill"}}}},R={class:"p-6 overflow-x-auto"},M={class:"flex flex-wrap gap-2"},T=o("option",{disabled:"",value:null},"Filter by type",-1),q=o("option",null,"Invoice",-1),z=o("option",null,"Bill",-1),G=o("option",null,"Voucher",-1),H=[T,q,z,G],J=o("span",{class:"material-icons-outlined"}," search ",-1),K=o("span",{class:"material-icons-outlined"}," search_off ",-1),Q=o("th",null,"Num",-1),W=o("th",null,"Opened",-1),X=o("th",null,"Due",-1),Y=o("th",null,"Company",-1),Z=o("th",null,"Posted",-1),$=o("th",null,"Paid",-1),ee=o("th",null,"Type",-1),te=o("th",null,"Billing ID",-1),oe=o("span",{class:"material-icons-outlined"},"add",-1),ne={key:0},le={key:1},se={key:0,class:"material-icons-outlined text-sky-500"},ie={key:1,class:"material-icons-outlined text-red-500"},re={class:"flex"},de=o("span",{class:"material-icons-outlined"},"view_list",-1),ae=o("span",{class:"material-icons-outlined"},"edit",-1),ue=["onClick"],_e=o("span",{class:"material-icons-outlined"},"delete",-1),pe=[_e];function ce(e,t,i,h,s,r){const c=a("form-label"),m=a("form-checkbox"),f=a("form-input"),y=a("form-button"),V=a("form-secondary-button"),v=a("RouterLink"),B=a("Pagination");return d(),u("div",R,[o("div",M,[o("div",null,[l(c,{for:"only_active",value:"Is Active?"}),l(m,{id:"only_active",checked:s.filter.only_active,"onUpdate:checked":t[0]||(t[0]=n=>s.filter.only_active=n),onChange:t[1]||(t[1]=n=>r.load(1))},null,8,["checked"])]),o("div",null,[l(c,{for:"only_posted",value:"Is Posted?"}),l(m,{id:"only_posted",checked:s.filter.only_posted,"onUpdate:checked":t[2]||(t[2]=n=>s.filter.only_posted=n),onChange:t[3]||(t[3]=n=>r.load(1))},null,8,["checked"])]),o("div",null,[l(c,{for:"only_paid",value:"Is Paid?"}),l(m,{id:"only_paid",checked:s.filter.only_paid,"onUpdate:checked":t[4]||(t[4]=n=>s.filter.only_paid=n),onChange:t[5]||(t[5]=n=>r.load(1))},null,8,["checked"])]),D(o("select",{"onUpdate:modelValue":t[6]||(t[6]=n=>s.filter.invoice_type=n),name:"invoice_type",id:"invoice_type",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",onChange:t[7]||(t[7]=n=>r.load(1))},H,544),[[L,s.filter.invoice_type]]),l(f,{id:"invoice_id",name:"invoice_id",type:"text",modelValue:s.filter.id,"onUpdate:modelValue":t[8]||(t[8]=n=>s.filter.id=n),placeholder:"Num..."},null,8,["modelValue"]),l(f,{id:"billing_id",name:"billing_id",type:"text",modelValue:s.filter.billing_id,"onUpdate:modelValue":t[9]||(t[9]=n=>s.filter.billing_id=n),placeholder:"Billing Id..."},null,8,["modelValue"]),l(f,{id:"owner_name",name:"owner_name",type:"text",modelValue:s.filter.owner_name,"onUpdate:modelValue":t[10]||(t[10]=n=>s.filter.owner_name=n),placeholder:"Owner Name..."},null,8,["modelValue"]),l(y,{onClick:t[11]||(t[11]=n=>r.load(1)),title:"Search"},{default:p(()=>[J]),_:1}),l(V,{title:"Clear",onClick:r.clear},{default:p(()=>[K]),_:1},8,["onClick"])]),o("table",null,[o("thead",null,[o("tr",null,[Q,W,X,Y,Z,$,ee,te,o("th",null,[l(y,{onClick:t[12]||(t[12]=n=>e.$router.push({name:"business.invoices.create"})),title:"Add New"},{default:p(()=>[oe]),_:1})])])]),o("tbody",null,[e.store.props.invoices?(d(!0),u(E,{key:0},S(e.store.props.invoices.data,n=>(d(),u("tr",{key:n.guid},[o("td",null,_(n.id),1),o("td",null,_(n.date_opened),1),n.due_date!==null?(d(),u("td",ne,_(e.store.convert_date(n.due_date.timespec_val)),1)):(d(),u("td",le)),o("td",null,_(r.owner(n)),1),o("td",null,_(n.date_posted),1),o("td",null,[n.total_splits==="0"?(d(),u("span",se,"check_circle")):(d(),u("span",ie,"highlight_off"))]),o("td",null,_(r.owner_type(n)),1),o("td",null,_(n.billing_id),1),o("td",null,[o("div",re,[l(v,{class:"text-gray-500 hover:text-gray-300",to:{name:"business.invoices.entrys.index",params:{invoice_pk:n.pk}},title:"Entries"},{default:p(()=>[de]),_:2},1032,["to"]),l(v,{class:"text-sky-500 hover:text-sky-300",to:{name:"business.invoices.edit",params:{invoice_pk:n.pk}},title:"Edit"},{default:p(()=>[ae]),_:2},1032,["to"]),o("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:ve=>r.destroy(n),title:"Delete"},pe,8,ue)])])]))),128)):x("v-if",!0)]),o("tfoot",null,[e.store.props.invoices&&e.store.props.invoices.total>e.store.props.invoices.per_page?(d(),C(B,{key:0,current:e.store.props.invoices.current_page,total:e.store.props.invoices.total,"per-page":e.store.props.invoices.per_page,onPageChanged:r.load},null,8,["current","total","per-page","onPageChanged"])):x("v-if",!0)])])])}var me=I(O,[["render",ce],["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/business/invoices/InvoicesIndex.vue"]]);const fe={class:"bg-white shadow mt-4 prose max-w-none"},he={async created(){await this.store.get("/phmoney/business/invoices")}},ye=F(w(b({},he),{name:"InvoicesIndex",setup(e){return(t,i)=>{const h=a("AppLayout");return d(),C(h,{title:"Invoices"},{default:p(()=>[o("div",fe,[l(me)])]),_:1})}}}));var be=I(ye,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/business/invoices/InvoicesIndex.vue"]]);export{be as default};
