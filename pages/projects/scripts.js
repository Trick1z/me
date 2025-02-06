function PageNavigator() {
  this.resume = function () {
    return (window.location.href = "../../index.html");
  };
  this.certifications = function () {
    return (window.location.href = "../certifications/index.html");
  };
  this.Activities = function () {
    return (window.location.href = "../activities/index.html");
  };
}
AOS.init({
  offset: 200,
  duration: 200,
  once: true,
});

const navigator = new PageNavigator();
