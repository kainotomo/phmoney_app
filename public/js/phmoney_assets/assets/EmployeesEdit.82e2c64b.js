var l=Object.defineProperty,c=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var a=(s,e,o)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,r=(s,e)=>{for(var o in e||(e={}))d.call(e,o)&&a(s,o,e[o]);if(t)for(var o of t(e))u.call(e,o)&&a(s,o,e[o]);return s},p=(s,e)=>c(s,_(e));import{_ as y,d as h,r as E,o as m,c as i,w as f,a as w,i as v}from"./main.ff91f6f2.js";import{E as k}from"./EmployeesEdit.52e1353d.js";const $={class:"bg-white shadow mt-4 prose max-w-none"},b={async created(){await this.store.get(`/phmoney/business/employees/edit/${this.$route.params.employee_pk}`)}},g=h(p(r({},b),{name:"EmployeesEdit",setup(s){return(e,o)=>{const n=E("FormLayout");return m(),i(n,{title:`Edit Employee - ${e.store.props.employee?e.store.props.employee.name:"..."}`},{default:f(()=>[w("div",$,[e.store.processing?v("v-if",!0):(m(),i(k,{key:0}))])]),_:1},8,["title"])}}}));var F=y(g,[["__file","/home/phalo/kainotomo/web_gnucash/vue/code/src/views/business/employees/EmployeesEdit.vue"]]);export{F as default};
