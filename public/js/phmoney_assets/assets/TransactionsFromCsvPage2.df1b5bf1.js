var y=Object.defineProperty,C=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var _=(e,o,t)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&_(e,t,o[t]);if(p)for(var t of p(o))$.call(o,t)&&_(e,t,o[t]);return e},d=(e,o)=>C(e,k(o));import{_ as f,r as a,o as v,g as x,a as n,b as s,w as i,n as T,e as B,d as P,c as N}from"./main.ff91f6f2.js";const S={data(){return{form:{upload_file:null}}},methods:{async submit(){let e=new FormData;e.append("upload_file",this.form.upload_file),e.append("file_path",null),e.append("items",null),e.append("delimiter",","),e.append("enclosure",'"'),e.append("date_format","m/d/Y"),e.append("currency_format","."),e.append("selected_columns",null),await this.store.post("/phmoney/import/transactions-from-csv/page3/update",e,{headers:{"Content-Type":"multipart/form-data"}}),this.$router.push({name:"import.transactions_from_csv.page3"})}}},D={class:"flex items-center justify-end mt-4 gap-2"},L=n("span",{class:"material-icons-outlined"},"navigate_before",-1),V=n("span",{class:"material-icons-outlined"},"navigate_next",-1);function j(e,o,t,l,c,m){const h=a("form-label"),b=a("form-input"),g=a("form-secondary-button"),w=a("form-button");return v(),x("form",{onSubmit:o[2]||(o[2]=B((...r)=>m.submit&&m.submit(...r),["prevent"])),class:"p-6"},[n("div",null,[s(h,{for:"upload_file",value:"Select a csv file"}),s(b,{id:"upload_file",type:"file",class:"mt-1 block w-full",onInput:o[0]||(o[0]=r=>c.form.upload_file=r.target.files[0]),required:"",autofocus:"",accept:".csv"})]),n("div",D,[s(g,{onClick:o[1]||(o[1]=r=>e.$router.back()),title:"Back"},{default:i(()=>[L]),_:1}),s(w,{class:T({"opacity-25":e.store.processing}),disabled:e.store.processing||c.form.upload_file===null,title:"Next"},{default:i(()=>[V]),_:1},8,["class","disabled"])])],32)}var q=f(S,[["render",j],["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/components/import/transactions_from_csv/TransactionsFromCsvPage2.vue"]]);const z={class:"bg-white shadow mt-4 prose max-w-none"},E={async created(){await this.store.get("/phmoney/import/transactions-from-csv/page2")}},I=P(d(u({},E),{name:"TransactionsFromCsvPage2",setup(e){return(o,t)=>{const l=a("FormLayout");return v(),N(l,{title:"Select File"},{default:i(()=>[n("div",z,[s(q)])]),_:1})}}}));var A=f(I,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/import/transactions_from_csv/TransactionsFromCsvPage2.vue"]]);export{A as default};