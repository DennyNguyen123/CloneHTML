document.addEventListener("DOMContentLoaded", ()=>{
  var list = document.querySelectorAll("*[include-html]");
  list.forEach(async item=>{
    var pathHTML = item.getAttribute("include-html");
    const response = await fetch(pathHTML);
    const body = await response.text();
    if(response.ok)
    {
      item.insertAdjacentHTML("beforeBegin",body);
      item.remove();
    }
  })
});


