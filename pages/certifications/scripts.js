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
  // this.Projects = function () {
  //   return (window.location.href = "../projects/index.html");
  // };

}

const navigator = new PageNavigator();
