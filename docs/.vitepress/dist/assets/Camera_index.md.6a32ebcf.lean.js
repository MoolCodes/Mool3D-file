import{P as t,aB as e,p as a,a as s,d as n,r as d,b as i,e as l,w as r,f as o,o as c,c as p,h,i as u,v,u as g,g as x,t as f,j as y,k as m}from"./app.ceccd6b0.js";import{V as w,b}from"./index.e1633dd4.js";class _ extends w{constructor(t){super(t),this.initModel()}getCameraHelper(){const a=new t(60,window.innerWidth/window.innerHeight,1,100);a.position.set(0,0,5);const s=new e(a);this.gScenes[this.sceneidx].add(s),this.gScenes[this.sceneidx].add(a)}init(){this.initEnvironment({path:"exr.exr",type:"exr"}),this.initSky(),this.sky.setSkyBox("sky4"),this.getCameraHelper()}}a("data-v-35c51d0c");const k={class:"wrap"},T={class:"loading"},I=y('<div class="loading-text" data-v-35c51d0c><span class="loading-text-words" data-v-35c51d0c>L</span><span class="loading-text-words" data-v-35c51d0c>O</span><span class="loading-text-words" data-v-35c51d0c>A</span><span class="loading-text-words" data-v-35c51d0c>D</span><span class="loading-text-words" data-v-35c51d0c>I</span><span class="loading-text-words" data-v-35c51d0c>N</span><span class="loading-text-words" data-v-35c51d0c>G</span></div>',1),S={class:"loding-percent"},C={class:"container"},A={class:"container-text"};s();var P=n({props:{sceneId:{type:String,default:"0"},visible:{type:Boolean,default:!1}},setup(t){const e=t,a=d();let s,n=d(!0),y=d(!1),m=d(""),w=d("0");i((()=>{P()})),l((()=>{s&&s.destroy(),b.off("scene")})),b.on("scene",(t=>{({loading:()=>{w.value=t.progressNum,n.value=t.value},transition:()=>{y.value=t.value}})[t.type]()})),r((()=>w),(t=>{b.emit("progressNum",g(t)),parseInt(g(t))>=100&&setTimeout((()=>{n.value=!1,y.value=!0,setTimeout((()=>{y.value=!1}),1500)}),1e3)}),{deep:!0}),r((()=>e.sceneId),(()=>{}),{deep:!0,immediate:!0});const P=()=>{const t=a.value;s=new _({el:t,tween:o,path:"../public/scene/"}),V("1")},V=t=>{switch(t){case"1":s.setScene(1,(()=>{s.init()})),m.value="相机",s.flyTo({position:[0,0,10],controls:[0,0,0],duration:2e3})}};return(t,e)=>(c(),p("div",k,[h("    loding"),u(x("div",T,[I,x("div",S,f(parseInt(g(w)))+"%",1)],512),[[v,g(n)]]),h("转场动画"),u(x("div",C,[x("span",A,f(g(m)),1)],512),[[v,g(y)]]),x("div",{ref:a,id:"map",class:"map"},null,512)]))}});P.__scopeId="data-v-35c51d0c";const V=x("h1",{id:"相机类"},[x("a",{class:"header-anchor",href:"#相机类","aria-hidden":"true"},"#"),m(" 相机类")],-1),j=y('',5),N='{"title":"相机类","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"API","slug":"api"}],"relativePath":"Camera/index.md","lastUpdated":1678273049002}',B={};const H=Object.assign(B,{setup:function(t){return(t,e)=>(c(),p("div",null,[V,x(P),j]))}});export default H;export{N as __pageData};