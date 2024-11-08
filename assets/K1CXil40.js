import{_ as $,q as c,o as b,s as h,U as D,w as e,b as t,d as u,n as C,u as M,v as r,r as F,x as v,a as n}from"./BRaYK_H4.js";import{_ as R}from"./CzgZc6U5.js";import{_ as T}from"./C-RwaSEM.js";import{_ as A}from"./DKuoQjBR.js";import{_ as I}from"./B3GIbjqu.js";import{k as G}from"./CfZuxCf1.js";const H={};function J(m,l){const o=c("v-switch");return b(),h(o,D({"hide-details":"auto",color:"primary","base-color":"primary",style:{color:"red !important"},inset:""},m.$attrs),null,16)}const K=$(H,[["render",J]]),L={};function O(m,l){const o=c("v-checkbox");return b(),h(o,D({color:"primary","base-color":"primary"},m.$attrs),null,16)}const Q=$(L,[["render",O]]),W={};function X(m,l){const o=c("v-row"),_=c("v-form");return b(),h(_,null,{default:e(()=>[t(o,{class:"ma-0"},{default:e(()=>[u(" Вы действительно хотите удалить свой аккаунт? Это действие необратимо и приведет к потере всех данных, связанных с вашим аккаунтом, включая перечислите важные данные, например, сообщения, фотографии и т.д. ")]),_:1})]),_:1})}const Y=$(W,[["render",X]]),Z=C({__name:"EditPhoneForm",setup(m){return(l,o)=>{const _=I,f=c("v-row"),p=c("v-form");return b(),h(p,null,{default:e(()=>[t(f,{class:"ma-0"},{default:e(()=>[M(t(_,{placeholder:"+7 (___) ___-__-__",label:"Телефон"},null,512),[[r(G),"+7 (###) ###-##-##"]])]),_:1})]),_:1})}}}),tt=C({__name:"EditPasswordForm",setup(m){let l=F(!1),o=F(!1);return(_,f)=>{const p=I,x=c("v-row"),y=c("v-form");return b(),h(y,null,{default:e(()=>[t(x,{class:"ma-0"},{default:e(()=>[t(p,{"append-inner-icon":r(l)?"mdi-eye-off":"mdi-eye",type:r(l)?"text":"password","onClick:appendInner":f[0]||(f[0]=B=>v(l)?l.value=!r(l):l=!r(l)),label:"Старый пароль"},null,8,["append-inner-icon","type"])]),_:1}),t(x,{class:"ma-0"},{default:e(()=>[t(p,{"append-inner-icon":r(o)?"mdi-eye-off":"mdi-eye",type:r(o)?"text":"password","onClick:appendInner":f[1]||(f[1]=B=>v(o)?o.value=!r(o):o=!r(o)),label:"Новый пароль",hint:"Не менее 8 символов, как минимум одна цифра"},null,8,["append-inner-icon","type"])]),_:1})]),_:1})}}}),et=n("h2",null,"Способы входа",-1),ot=n("p",{class:"mb-7"},"В сервис можно войти несколькими способами, выберите наиболее предпочтительный или сразу несколько на выбор",-1),nt=n("div",{class:"font-weight-bold"}," СМС на номер ",-1),lt=n("p",{style:{color:"#41414199"}},"Потребуется ввести одноразовый код, он придёт по СМС",-1),st=n("div",{class:"font-weight-bold"}," +7 921 930-32-12 ",-1),_t=n("div",{class:"font-weight-bold"}," По логину и паролю ",-1),at=n("p",{style:{color:"#41414199"}},"Для входа необходимо ввести ваш логин @alex92 и пароль",-1),ct=n("div",{class:"font-weight-bold"}," +7 921 930-32-12 ",-1),rt=n("h2",null,"Уведомления",-1),dt=n("p",{class:"mb-7"},"Здесь можно выбрать предпочтительный(е) способ(ы) получения уведомлений, а также их категории",-1),it=n("h2",{class:"mb-4"},"Категории уведомлений",-1),ut=n("div",null,"Звонки и сообщения",-1),mt=n("div",{style:{color:"#41414199"}},"Получать уведомления о звонках и новых сообщениях",-1),ft=n("div",null,"Напоминания о приеме лекарств",-1),pt=n("div",{style:{color:"#41414199"}},"Получать уведомления, напоминающие о необходимости принять лекарство",-1),vt=n("div",null,"Доставка",-1),bt=n("div",{style:{color:"#41414199"}},"Получать уведомления о статусе доставки",-1),ht=n("h2",null,"Настройки языка и интерфейса",-1),xt=n("p",{class:"mb-7"},"Настройте интерфейс сервиса под себя",-1),wt=n("h2",{class:"mb-6"},"Действия с аккаунтом",-1),yt=n("div",{style:{color:"#E53E3E"}},"Удалить аккаунт",-1),kt=n("div",null,"Вы можете полностью удалить аккаунт и данные в нём.",-1),Ft=C({__name:"Form",setup(m){let l=F(!1),o=F(!1),_=F(!1);const f=()=>{l.value=!0},p=()=>{l.value=!1},x=()=>{o.value=!1},y=()=>{_.value=!1};return(B,d)=>{const k=K,s=c("v-row"),g=c("v-btn"),E=c("v-card-text"),P=c("v-card"),a=c("v-col"),S=Q,j=R,U=Y,w=T,V=A,N=Z,z=tt,q=c("v-form");return b(),h(q,null,{default:e(()=>[et,ot,t(s,{class:"mb-14"},{default:e(()=>[t(a,{cols:"6"},{default:e(()=>[t(P,{class:"pa-4",style:{"background-color":"#F5F5F5"}},{default:e(()=>[t(E,{style:{"font-size":"18px !important"}},{default:e(()=>[t(s,{class:"justify-space-between"},{default:e(()=>[nt,t(k)]),_:1}),t(s,{class:"mb-13"},{default:e(()=>[lt]),_:1}),t(s,{class:"justify-space-between"},{default:e(()=>[st,t(g,{class:"font-weight-bold",variant:"text",onClick:d[0]||(d[0]=i=>v(o)?o.value=!0:o=!0)},{default:e(()=>[u(" Изменить номер ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(P,{class:"pa-4",style:{"background-color":"#F5F5F5"}},{default:e(()=>[t(E,{style:{"font-size":"18px !important"}},{default:e(()=>[t(s,{class:"justify-space-between"},{default:e(()=>[_t,t(k)]),_:1}),t(s,{class:"mb-13"},{default:e(()=>[at]),_:1}),t(s,{class:"justify-space-between"},{default:e(()=>[ct,t(g,{class:"font-weight-bold",variant:"text",onClick:d[1]||(d[1]=i=>v(_)?_.value=!0:_=!0)},{default:e(()=>[u(" Изменить пароль ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),rt,dt,t(s,{class:"mb-13"},{default:e(()=>[t(S,{class:"mr-6",label:"СМС"}),t(S,{label:"Электронная почта"})]),_:1}),it,t(s,{class:"mx-0 align-center"},{default:e(()=>[t(k),t(a,null,{default:e(()=>[ut,mt]),_:1})]),_:1}),t(s,{class:"mx-0 align-center"},{default:e(()=>[t(k),t(a,null,{default:e(()=>[ft,pt]),_:1})]),_:1}),t(s,{class:"mb-13 mx-0 align-center"},{default:e(()=>[t(k),t(a,null,{default:e(()=>[vt,bt]),_:1})]),_:1}),ht,xt,t(s,{class:"mb-7"},{default:e(()=>[t(a,{cols:"6"},{default:e(()=>[t(j,{label:"Язык интерфейса",items:["Русский","Не Русский"]})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(j,{label:"Размер шрифта",items:["20px","18px","16px"]})]),_:1})]),_:1}),wt,t(s,{class:"mx-0 mb-15 align-center"},{default:e(()=>[t(g,{variant:"plain",icon:"mdi-trash-can-outline",color:"error",onClick:f}),t(a,null,{default:e(()=>[yt,kt]),_:1})]),_:1}),t(V,{modelValue:r(l),"onUpdate:modelValue":d[2]||(d[2]=i=>v(l)?l.value=i:l=i),title:"Удаление аккаунта",onClose:p},{actions:e(()=>[t(s,{class:"ma-0"},{default:e(()=>[t(a,{cols:"6"},{default:e(()=>[t(w,{variant:"outlined",block:"",onClick:p},{default:e(()=>[u("Отменить")]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(w,{variant:"flat",block:"",onClick:p},{default:e(()=>[u("Удалить аккаунт")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(U)]),_:1},8,["modelValue"]),t(V,{modelValue:r(o),"onUpdate:modelValue":d[3]||(d[3]=i=>v(o)?o.value=i:o=i),title:"Изменение номера",onClose:x},{actions:e(()=>[t(s,{class:"ma-0"},{default:e(()=>[t(a,{cols:"6"},{default:e(()=>[t(w,{variant:"outlined",block:"",onClick:x},{default:e(()=>[u("Отменить")]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(w,{variant:"flat",block:"",onClick:x},{default:e(()=>[u("Сохранить")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(N)]),_:1},8,["modelValue"]),t(V,{modelValue:r(_),"onUpdate:modelValue":d[4]||(d[4]=i=>v(_)?_.value=i:_=i),title:"Изменение пароля",onClose:y},{actions:e(()=>[t(s,{class:"ma-0"},{default:e(()=>[t(a,{cols:"6"},{default:e(()=>[t(w,{variant:"outlined",block:"",onClick:y},{default:e(()=>[u("Отменить")]),_:1})]),_:1}),t(a,{cols:"6"},{default:e(()=>[t(w,{variant:"flat",block:"",onClick:y},{default:e(()=>[u("Сохранить")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(z)]),_:1},8,["modelValue"])]),_:1})}}}),Pt=C({__name:"index",setup(m){return(l,o)=>{const _=Ft;return b(),h(_)}}});export{Pt as default};
