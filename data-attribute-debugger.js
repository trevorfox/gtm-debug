var attrs = ["data-gtm-event", "data-gtm-action", "data-gtm-label"];
var dataEvents = document.querySelectorAll('*[' + attrs.join("],*[") + ']' );
console.log("Data Attribute Element");
console.log(dataEvents);
for (var i=0; i < dataEvents.length; i++){
  var el = dataEvents[i];
  var info = "Element: " + el.tagName.toLowerCase() + "\x0A"
           + "Name: " + (el.innerText ? el.innerText.trim() : el.getAttribute('title')) + "\x0A";

  for (var a = 0; a < attrs.length; a++){
    var attr = attrs[a];
    info += attr + ": " + el.getAttribute(attr) + "\x0A";
  }

  el.style.border = "thick outset red";
  el.style.color = "blue";
  el.setAttribute('title', info);
  el.onclick = function(e){
    console.log(this);
    e.preventDefault;
    alert(info);
  };
}
