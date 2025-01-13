import{i as n,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="48208038-3c3ecca5e2ade6beba42f0ed3",d="https://pixabay.com/api/";function h(s){const t=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}/?${t}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(s){return s.hits.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}" > 
              <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/> 
            </a>
            <ul class="statistics">
                <li class="photo-stat">
                <p><b>Likes</b></p>
                <p>${t.likes}</p>
                </li>
                <li class="photo-stat">
                <p><b>Views</b></p> 
                <p>${t.views}</p>
                </li>
                <li class="photo-stat">
                <p><b>Comments</b></p> 
                <p>${t.comments}</p>
                </li>
                <li class="photo-stat">
                <p><b>Downloads</b></p> 
                <p>${t.downloads}</p>
                </li>
            </ul>
            </li>`).join("")}const u=document.querySelector(".form"),c=document.querySelector(".loader"),l=document.querySelector(".search-result");u.addEventListener("submit",g);function g(s){s.preventDefault();const t=s.currentTarget.q.value.trim();c.classList.remove("loader-off"),h(t).then(r=>{if(l.innerHTML="",r.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),c.classList.add("loader-off");return}const a=m(r);l.insertAdjacentHTML("beforeend",a),new p(".search-result a",{captionsData:"alt",captionDelay:250}).refresh(),c.classList.add("loader-off")}).catch(r=>{console.error(r),n.show({message:`Error occured: ${r}`,position:"topRight"})}).finally(()=>u.reset())}
//# sourceMappingURL=index.js.map
