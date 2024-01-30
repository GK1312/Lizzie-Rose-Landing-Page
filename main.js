function menuToggle() {
  $("#navigation").toggleClass("active");
  if ($("#navigation").hasClass("active")) {
    $("html").css("overflow", "hidden");
  } else {
    $("html").css("overflow", "auto");
  }
}

$(document).ready(function () {
  var homeLinks = $(".home_tag"),
    videoLinks = $(".video_tag"),
    blogLinks = $(".blog_tag"),
    aboutLinks = $(".about_tag"),
    contactLinks = $(".contact_tag");

  function addActiveClass(links) {
    links.addClass("active");
  }

  function removeActiveClass(links) {
    links.removeClass("active");
  }

  function handleLinkClick(event) {
    if ($("#navigation").hasClass("active")) {
      menuToggle();
    }
    var target = $(event.target);
    if (target.hasClass("home_tag")) {
      removeActiveClass(videoLinks);
      removeActiveClass(blogLinks);
      removeActiveClass(aboutLinks);
      removeActiveClass(contactLinks);
      addActiveClass(homeLinks);
    } else if (target.hasClass("video_tag")) {
      removeActiveClass(homeLinks);
      removeActiveClass(blogLinks);
      removeActiveClass(aboutLinks);
      removeActiveClass(contactLinks);
      addActiveClass(videoLinks);
    } else if (target.hasClass("blog_tag")) {
      removeActiveClass(homeLinks);
      removeActiveClass(videoLinks);
      removeActiveClass(aboutLinks);
      removeActiveClass(contactLinks);
      addActiveClass(blogLinks);
    } else if (target.hasClass("about_tag")) {
      removeActiveClass(homeLinks);
      removeActiveClass(videoLinks);
      removeActiveClass(blogLinks);
      removeActiveClass(contactLinks);
      addActiveClass(aboutLinks);
    } else if (target.hasClass("contact_tag")) {
      removeActiveClass(homeLinks);
      removeActiveClass(videoLinks);
      removeActiveClass(blogLinks);
      removeActiveClass(aboutLinks);
      addActiveClass(contactLinks);
    }
  }

  homeLinks.on("click", handleLinkClick);
  videoLinks.on("click", handleLinkClick);
  blogLinks.on("click", handleLinkClick);
  aboutLinks.on("click", handleLinkClick);
  contactLinks.on("click", handleLinkClick);

  if (window.location.href.indexOf("#home") !== -1) {
    addActiveClass(homeLinks);
  } else if (window.location.href.indexOf("#video") !== -1) {
    addActiveClass(videoLinks);
  } else if (window.location.href.indexOf("#blog") !== -1) {
    addActiveClass(blogLinks);
  } else if (window.location.href.indexOf("#about") !== -1) {
    addActiveClass(aboutLinks);
  } else if (window.location.href.indexOf("#contact") !== -1) {
    addActiveClass(contactLinks);
  }
});
