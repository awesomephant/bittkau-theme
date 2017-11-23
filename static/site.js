console.log("hi");
var generateToc = function() {
  var headlines = document.querySelectorAll("#content .section-title");
  var toc = "<li>Auf dieser Seite:</li>";
  for (var i = 0; i < headlines.length; i++) {
    let id = headlines[i].innerHTML
      .replace(/ /g, "-")
      .replace(/&nbsp;/g, "-")
      .replace(/&amp;/g, "und")
      .toLowerCase();
    headlines[i].setAttribute("id", id);
    toc +=
      "<li><a class='article-toc--link' href='#" +
      id +
      "'>" +
      headlines[i].innerHTML +
      "</li>";
  }
  var el = document.createElement("ul");
  el.classList.add("article-toc");
  el.innerHTML = toc;
  var post = document.querySelector(".site-nav");
  if (headlines.length > 1) {
    post.appendChild(el);
  }
};

generateToc();
