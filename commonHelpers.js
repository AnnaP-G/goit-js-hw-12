import{i as d,a as p,S as f}from"./assets/vendor-b42c18af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const y={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:L,gallery:h,loader:i,btnElem:n}=y;i.classList.add("hidden");const a={key:"42331891-8a863af1b25a8d0e5dfa0d75b",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};L.addEventListener("submit",async t=>{if(t.preventDefault(),a.q=t.target.elements.input.value,!!a.q){h.innerHTML="",i.classList.remove("hidden");try{a.page=1;const s=await m();a.totalResults=s.totalHits,g(s),u(),t.target.reset()}catch(s){console.error("Error fetching images:",s),d.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight",timeout:5e3}),i.classList.add("hidden")}}});n.addEventListener("click",async()=>{a.page+=1;const t=await m();g(t),u(),window.scrollBy({top:465,behavior:"smooth"})});async function m(){h.innerHTML="";const t=new URLSearchParams(a);return(await p.get(`https://pixabay.com/api/?${t}`)).data}function g(t){if(t.hits.length===0)d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),n.classList.add("hidden");else{const l=t.hits.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
        </a>
        <div class="img-content">
        <div>
        <h3>Likes</h3>
        <p>${o.likes}</p>
        </div>

        <div>
        <h3>Views</h3>
        <p>${o.views}</p>
        </div>

        <div>
        <h3>Comments</h3>
        <p>${o.comments}</p>
        </div>

        <div>
        <h3>Downloads</h3>
        <p>${o.downloads}</p>
        </div>
        </div>
        `).join("");h.insertAdjacentHTML("beforeend",l),n.classList.remove("hidden")}new f(".gallery-link").refresh(),i.classList.add("hidden")}function u(){Math.ceil(a.totalResults/a.per_page)===a.page&&(n.classList.add("hidden"),d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#ed6205",position:"bottomRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}))}
//# sourceMappingURL=commonHelpers.js.map
