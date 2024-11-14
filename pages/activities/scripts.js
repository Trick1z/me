AOS.init({
  offset: 200,
  duration: 200,
  once: true,
});

function PageNavigator() {
  this.resume = function () {
    return (window.location.href = "../../index.html");
  };
  this.certifications = function () {
    return (window.location.href = "../certifications/index.html");
  };
  this.portFolio = function () {
    return (window.location.href = "index.html");
  };
  this.top = function () {
    return document.getElementById("top").scrollIntoView({
      behavior: "smooth",
    });
  };
}

let navigator = new PageNavigator();
