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
    return (window.location.href = "index.html");
  };
  this.portFolio = function () {
    return (window.location.href = "../portFolio/index.html");
  };
}

const navigator = new PageNavigator();
