function initMasonry(){var n=document.querySelector(".loading-placeholder"),t=document.querySelector("#masonry-container");if(n&&t){n.style.display="block",t.style.display="none";for(var e=document.querySelectorAll("#masonry-container .masonry-item img"),o=0,i=0;i<e.length;i++){var a=e[i];a.complete?r():a.addEventListener("load",r)}o===e.length&&l()}function r(){++o===e.length&&l()}function l(){n.style.opacity=0,setTimeout(()=>{n.style.display="none",t.style.display="block";var e=768<=window.innerWidth?255:150;new MiniMasonry({baseWidth:e,container:t,gutterX:10,gutterY:10,surroundingGutter:!1}).layout(),t.style.opacity=1},100)}}if(data.masonry){try{swup.hooks.on("page:view",initMasonry)}catch(e){}document.addEventListener("DOMContentLoaded",initMasonry)}export{initMasonry};