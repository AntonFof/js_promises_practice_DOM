var e=document.querySelector("body"),t=new Promise(function(t,n){e.addEventListener("click",function(){t("First promise was resolved")}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}),n=new Promise(function(t,n){e.addEventListener("click",function(){t("Second promise was resolved")}),e.addEventListener("contextmenu",function(e){e.preventDefault(),t("Second promise was resolved")})}),i=new Promise(function(t,n){var i=!1,r=!1;e.addEventListener("click",function(){i=!0,r&&t("Third promise was resolved")}),e.addEventListener("contextmenu",function(e){e.preventDefault(),r=!0,i&&t("Third promise was resolved")})}),r=function(t){var n=document.createElement("div");n.className="success",n.setAttribute("data-qa","notification"),n.innerText=t,e.appendChild(n)},c=function(t){var n=document.createElement("div");n.className="arning",n.setAttribute("data-qa","notification"),n.innerText=t,e.appendChild(n)};t.then(r).catch(c),n.then(r).catch(c),i.then(r).catch(c);
//# sourceMappingURL=index.e115772e.js.map