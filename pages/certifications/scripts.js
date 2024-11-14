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
  this.Activities = function () {
    return (window.location.href = "../activities/index.html");
  };

}

const navigator = new PageNavigator();
