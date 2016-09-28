(function(){

  // List all data attributes to check for
  var attrs = ["ga-on", "ga-event-category", "ga-event-action"];

  // DOM object list of all elements with specified data attributes
  var dataElems = document.querySelectorAll('*[' + attrs.join("],*[") + ']' );

  console.log("Data Attribute Elements");
  console.log(dataElems);

  // Create an 'info' string with encoded linebreaks to set to element title.
  for (var i = 0; i < dataElems.length; i++){
    var el = dataElems[i];
    var info = "Element: " + el.tagName.toLowerCase() + "\x0A";
        info += "Name: " + (el.innerText ? el.innerText.trim() : el.getAttribute('title')) + "\x0A";

    for (var a = 0; a < attrs.length; a++){
      var attr = attrs[a];
      info += attr + ": " + el.getAttribute(attr) + "\x0A";
    }

    // Make stuff look cool and do stuff
    el.style.border = "thick outset deepskyblue";
    el.style["background-color"] = "coral";
    el.style.color = "deepskyblue";
    el.setAttribute('title', info);
    el.onclick = function(e){
      console.log(this);
      alert(this.getAttribute('title'));
    };
  }
}());
