"use strict";

function scrollElement(element) {
    console.log("Pollyfill");
    console.log(element);
    //var scrollContainer = document.body;
    //scrollContainer.scrollTo(0, element.scrollHeight);
}

window.addEventListener("load" = function() {
    var arrows = document.querySelectorAll(".next");
    console.log(arrows);
    for (var index=0; index<arrows.length; index++) {
        var arrow = arrows[index];

        arrow.onclick = function() {
            var id = this.attributes["href"].value;
            scrollElement(document.querySelector(id));
        };
    }
});
