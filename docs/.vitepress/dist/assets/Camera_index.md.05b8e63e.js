import{P as t,C as e,p as a,b as s,d as n,r as d,e as i,f as l,w as r,g as o,o as c,c as p,h,i as u,v,u as g,j as f,t as x,a as y,k as m}from"./app.fee60d13.js";import{V as w,b}from"./index.207465f4.js";class _ extends w{constructor(t){super(t),this.initModel()}getCameraHelper(){const a=new t(60,window.innerWidth/window.innerHeight,1,100);a.position.set(0,0,5);const s=new e(a);this.gScenes[this.sceneidx].add(s),this.gScenes[this.sceneidx].add(a)}init(){this.initEnvironment({path:"exr.exr",type:"exr"}),this.initSky(),this.sky.setSkyBox("sky4"),this.getCameraHelper()}}a("data-v-35c51d0c");const k={class:"wrap"},T={class:"loading"},I=y('<div class="loading-text" data-v-35c51d0c><span class="loading-text-words" data-v-35c51d0c>L</span><span class="loading-text-words" data-v-35c51d0c>O</span><span class="loading-text-words" data-v-35c51d0c>A</span><span class="loading-text-words" data-v-35c51d0c>D</span><span class="loading-text-words" data-v-35c51d0c>I</span><span class="loading-text-words" data-v-35c51d0c>N</span><span class="loading-text-words" data-v-35c51d0c>G</span></div>',1),S={class:"loding-percent"},C={class:"container"},A={class:"container-text"};s();var P=n({props:{sceneId:{type:String,default:"0"},visible:{type:Boolean,default:!1}},setup(t){const e=t,a=d();let s,n=d(!0),y=d(!1),m=d(""),w=d("0");i((()=>{P()})),l((()=>{s&&s.destroy(),b.off("scene")})),b.on("scene",(t=>{({loading:()=>{w.value=t.progressNum,n.value=t.value},transition:()=>{y.value=t.value}})[t.type]()})),r((()=>w),(t=>{b.emit("progressNum",g(t)),parseInt(g(t))>=100&&setTimeout((()=>{n.value=!1,y.value=!0,setTimeout((()=>{y.value=!1}),1500)}),1e3)}),{deep:!0}),r((()=>e.sceneId),(()=>{}),{deep:!0,immediate:!0});const P=()=>{const t=a.value;s=new _({el:t,tween:o,path:"../public/scene/"}),V("1")},V=t=>{switch(t){case"1":s.setScene(1,(()=>{s.init()})),m.value="相机",s.flyTo({position:[0,0,10],controls:[0,0,0],duration:2e3})}};return(t,e)=>(c(),p("div",k,[h("    loding"),u(f("div",T,[I,f("div",S,x(parseInt(g(w)))+"%",1)],512),[[v,g(n)]]),h("转场动画"),u(f("div",C,[f("span",A,x(g(m)),1)],512),[[v,g(y)]]),f("div",{ref:a,id:"map",class:"map"},null,512)]))}});P.__scopeId="data-v-35c51d0c";const V=f("h1",{id:"相机类"},[f("a",{class:"header-anchor",href:"#相机类","aria-hidden":"true"},"#"),m(" 相机类")],-1),j=y('<h2 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-js"><pre><code>内置方法，主类已经默认加载相机\nel<span class="token operator">:</span>dom元素\n<span class="token keyword">new</span> <span class="token class-name">Camera</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre></div><h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>Viewer</th><th style="text-align:left;">描述</th><th></th></tr></thead><tbody><tr><td>属性</td><td style="text-align:left;">描述</td><td></td></tr><tr><td>camera</td><td style="text-align:left;">相机对象（Viewer 中通过 this.activeCamera 访问）</td><td></td></tr><tr><td>方法</td><td style="text-align:left;">参数</td><td>描 述</td></tr><tr><td>flyTo</td><td style="text-align:left;">tween:过渡对象<br>controls:控制器类<br>option:见下方详解</td><td>相机飞行方法(Viewer 中通过 this.flyTo 调用)</td></tr></tbody></table><table><thead><tr><th>flyTo 参数</th><th style="text-align:left;">详解</th></tr></thead><tbody><tr><td>option</td><td style="text-align:left;">position:位置 <br> controls:中心偏移<br> duration:运动时长<br></td></tr><tr><td>回调函数</td><td style="text-align:left;">start:开始 <br> done:结束<br> stop:暂停<br>update:更新</td></tr></tbody></table>',5),N='{"title":"相机类","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"API","slug":"api"}],"relativePath":"Camera/index.md","lastUpdated":1678273049002}',H={};const B=Object.assign(H,{setup:function(t){return(t,e)=>(c(),p("div",null,[V,f(P),j]))}});export default B;export{N as __pageData};