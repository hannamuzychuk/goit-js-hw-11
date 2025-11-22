import{a as c,S as l,i as s}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="https://pixabay.com/api/",f="53360647-c263b6c497f5f63021bb419c5";function p(n){const o={key:f,q:n,image_type:"photo",orientation:" horizontal",safesearch:!0};return c.get(u,{params:o}).then(e=>e.data)}const m=document.querySelector(".gallery"),d=new l(".gallery a");function h(n){const o=n.map(e=>`
                <li class="gallery-item">
                    <a href="${e.largeImageURL}">
                        <img src="${e.webformatURL}" alt="${e.tags}" loading lazy />
                    </a>
                    <div class="info">
                     <p><b>Likes</b>${e.likes}</p>
                     <p><b>Views</b>${e.views}</p>
                     <p><b>Comments</b>${e.comments}</p>
                     <p><b>Downloads</b>${e.downloads}</p>
                    </div>
                </li>`).join("");m.innerHTML=o,d.refresh()}const y=document.querySelector(".form"),g=document.querySelector('input[name="search-text"]');y.addEventListener("submit",b);function b(n){n.preventDefault();const o=g.value.trim();if(!o){s.error({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}p(o).then(e=>{if(e.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits)}).catch(e=>{console.error(e),s.error({title:"Error",message:"Something went wrong!",position:"topRight"})}).finally(()=>{})}
//# sourceMappingURL=index.js.map
