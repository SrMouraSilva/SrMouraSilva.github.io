$(document).ready(function(){
  $("article h3").each(function(){
    $("nav ul").append(
      "<li><h3><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</h3></a>"+ $(this).parent().find("p")[0].innerHTML +"</li>"
    );
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var target = event.currentTarget.hash;
    window.history.pushState({}, "", target);

    var position = $(target).offset().top - 120;
    console.log(position);
    window.scrollTo(0, position);

    $("nav ul li").removeClass("active");
    $(this).parent().parent().addClass("active");
    event.preventDefault();
  });
});

fixScale = function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }
};