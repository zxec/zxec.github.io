import{z as R,n as k,q as s,o as c,s as m,w as e,b as t,a as n,t as f,p as P,e as j,_ as g,c as C,F as A,A as N,d as h,u as F,v,r as S,x as G}from"./BRaYK_H4.js";import{_ as T}from"./C-RwaSEM.js";import{_ as L}from"./B3GIbjqu.js";import{k as V}from"./CfZuxCf1.js";import{_ as U}from"./DKuoQjBR.js";const z=R("/icons/mir.svg"),q=o=>(P("data-v-37c0139b"),o=o(),j(),o),K={class:"d-flex flex-column h-100"},H={class:"d-flex justify-end mb-auto"},J={class:"d-flex justify-space-between"},O=q(()=>n("img",{class:"icon",src:z,alt:"MIR",width:"60"},null,-1)),Q=k({__name:"Card",props:["number","expirationDate"],setup(o){const a=o;return(i,_)=>{const l=s("v-btn"),d=s("v-card-text"),r=s("v-card");return c(),m(r,{variant:"flat"},{default:e(()=>[t(d,{class:"debit-card"},{default:e(()=>[n("div",K,[n("div",H,[t(l,{icon:"mdi-trash-can",color:"#414141",variant:"text",density:"comfortable"})]),n("div",null,[n("p",null,f(a.number),1)]),n("div",J,[n("p",null,f(a.expirationDate),1),O])])]),_:1})]),_:1})}}}),W=g(Q,[["__scopeId","data-v-37c0139b"]]),X={},Y=o=>(P("data-v-464e3e1b"),o=o(),j(),o),Z={class:"text-center"},tt=Y(()=>n("p",null,[n("b",null,"Добавить карту")],-1));function et(o,a){const i=s("v-icon"),_=s("v-card-text"),l=s("v-card");return c(),m(l,{variant:"flat",link:""},{default:e(()=>[t(_,{class:"debit-card d-flex justify-center align-center"},{default:e(()=>[n("div",Z,[t(i,{icon:"mdi-plus-circle-outline",size:"30",color:"#414141CC",class:"mb-2"}),tt])]),_:1})]),_:1})}const nt=g(X,[["render",et],["__scopeId","data-v-464e3e1b"]]),ot={class:"d-flex flex-column h-100 mb-auto"},at={class:"mb-3"},st={class:"mb-7"},ct={key:0},_t={key:1,class:"d-flex justify-space-between align-center"},lt=k({__name:"Card",props:["tariffData"],setup(o){const a=o;return(i,_)=>{const l=s("v-icon"),d=s("v-list-item-title"),r=s("v-list-item"),M=s("v-list"),b=T,I=s("v-card-text"),D=s("v-card");return c(),m(D,{variant:"flat"},{default:e(()=>[t(I,{class:"tariff-card"},{default:e(()=>{var x,u,$,y;return[n("div",ot,[n("h3",at,f((x=a.tariffData)==null?void 0:x.title),1),n("p",st,f((u=a.tariffData)==null?void 0:u.description),1),t(M,{class:"benefits-list mb-auto",density:"compact"},{default:e(()=>{var p;return[(c(!0),C(A,null,N((p=a.tariffData)==null?void 0:p.benefits,B=>(c(),m(r,{slim:""},{prepend:e(()=>[t(l,{icon:"mdi-check",color:"primary"})]),default:e(()=>[t(d,{class:"benefits-list__title"},{default:e(()=>[h(f(B),1)]),_:2},1024)]),_:2},1024))),256))]}),_:1}),($=a.tariffData)!=null&&$.is_active?(c(),C("div",ct,[t(b,{height:"48",disabled:""},{default:e(()=>{var p;return[h("Активен | "+f((p=a.tariffData)==null?void 0:p.price)+" ₽/мес ",1)]}),_:1})])):(c(),C("div",_t,[n("h3",null,"От "+f((y=a.tariffData)==null?void 0:y.price)+" ₽/мес",1),t(b,{height:"48"},{default:e(()=>[h("Подключить")]),_:1})]))])]}),_:1})]),_:1})}}}),it=g(lt,[["__scopeId","data-v-c609c385"]]),rt=R("/icons/visa.svg"),dt=R("/icons/mastercard.svg"),E=o=>(P("data-v-3cdcc765"),o=o(),j(),o),pt=E(()=>n("div",{class:"payment-icons"},[n("img",{class:"icon",src:z,alt:"MIR",width:"40"}),n("img",{class:"icon",src:rt,alt:"VISA",width:"40"}),n("img",{class:"icon",src:dt,alt:"MASTERCARD",width:"40"})],-1)),mt=E(()=>n("p",{class:"p-small"}," Платеж будет проведен через сервис ЮKassa. Ваш платеж защищен в соответствии с международными стандартами безопасности платежей. ",-1)),ut=k({__name:"AppendForm",setup(o){return(a,i)=>{const _=s("v-row"),l=L,d=s("v-col"),r=s("v-form");return c(),m(r,null,{default:e(()=>[t(_,{class:"ma-0 mb-3"},{default:e(()=>[h(" При добавлении карты будет резерв и мгновенный возврат небольшой суммы. ")]),_:1}),t(_,{class:"ma-0"},{default:e(()=>[F((c(),m(l,{placeholder:"0000 0000 0000 0000",label:"Номер карты"},{"append-inner":e(()=>[pt]),_:1})),[[v(V),"#### #### #### ####"]])]),_:1}),t(_,{class:"ma-0 font-weight-bold"},{default:e(()=>[t(d,{class:"pl-0"},{default:e(()=>[F(t(l,{placeholder:"__/__",label:"ММ / ГГ"},null,512),[[v(V),"##/##"]])]),_:1}),t(d,{class:"pr-0"},{default:e(()=>[F(t(l,{placeholder:"___",label:"Код CVV"},null,512),[[v(V),"###"]])]),_:1})]),_:1}),t(_,{class:"ma-0"},{default:e(()=>[mt]),_:1})]),_:1})}}}),ft=g(ut,[["__scopeId","data-v-3cdcc765"]]),vt=n("h2",null,"Способы оплаты",-1),ht=n("p",{class:"mb-7"},"Выберите карту, с которой будут списываться деньги за подписку",-1),bt={class:"d-flex ga-7 mb-13"},xt=n("h2",{class:"mb-7"},"Тарифы",-1),$t=k({__name:"Form",setup(o){let a=S(!1),i=S([{number:"•••• 3210",expiration_date:"03/28"}]);const _=S([{title:"Бесплатный тариф",description:"Возможность новым пользователям попробовать сервис и убедиться, что забота о семье — это легко.",benefits:["Семейный чат","Заказ продуктов для ваших близких","Книга семейных рецептов","Заказ медикаментов у партнеров G&G"],price:0,is_active:!0},{title:"Платный тариф",description:"Расширенная версия — настоящее управление жизнью семьи и безграничные варианты заботы.",benefits:["Все возможности бесплатного тарифа","Возможность добавить несколько членов семьи","Семейное древо — визуализируйте историю своей семьи","Лента рецептов","Калькулятор здоровья для семьи","Многие другие опции"],price:299,is_active:!1}]),l=()=>{r(),!(i.value.length>1)&&i.value.push({number:"•••• 3210",expiration_date:"03/28"})},d=()=>{a.value=!0},r=()=>{a.value=!1};return(M,b)=>{const I=W,D=nt,x=it,u=s("v-col"),$=s("v-row"),y=ft,p=T,B=U;return c(),C(A,null,[vt,ht,n("div",bt,[(c(!0),C(A,null,N(v(i),w=>(c(),m(I,{number:w.number,"expiration-date":w.expiration_date},null,8,["number","expiration-date"]))),256)),t(D,{onClick:d})]),n("div",null,[xt,t($,null,{default:e(()=>[t(u,{cols:"12",md:"6"},{default:e(()=>[t(x,{"tariff-data":v(_)[0]},null,8,["tariff-data"])]),_:1}),t(u,{cols:"12",md:"6"},{default:e(()=>[t(x,{"tariff-data":v(_)[1]},null,8,["tariff-data"])]),_:1})]),_:1})]),t(B,{modelValue:v(a),"onUpdate:modelValue":b[0]||(b[0]=w=>G(a)?a.value=w:a=w),title:"Добавить карту",onClose:r},{actions:e(()=>[t($,{class:"ma-0"},{default:e(()=>[t(u,{cols:"6"},{default:e(()=>[t(p,{variant:"outlined",block:"",onClick:r},{default:e(()=>[h("Отменить")]),_:1})]),_:1}),t(u,{cols:"6"},{default:e(()=>[t(p,{variant:"flat",block:"",onClick:l},{default:e(()=>[h("Сохранить")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(y)]),_:1},8,["modelValue"])],64)}}}),wt={};function Ct(o,a){const i=$t;return c(),m(i)}const Bt=g(wt,[["render",Ct]]);export{Bt as default};
