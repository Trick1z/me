AOS.init({
  offset: 200,
  duration: 200,
  once: true,
});

function PageNavigator() {
  this.resume = function () {
    return (window.location.href = "index.html");
  };
  this.certifications = function () {
    return (window.location.href = "./pages/certifications/index.html");
  };
  this.portFolio = function () {
    return (window.location.href = "./pages/portFolio/index.html");
  };
  this.gitUrl = function (){
    // return ( window.location.href = 'https://github.com/Trick1z');
    return ( window.open('https://github.com/Trick1z', '_blank'));
  }
}
const navigator = new PageNavigator();

function downloadButton() {
  var link = document.createElement("a");
  link.href = "./assets/downloads/Portfolio.pdf";
  link.download = "filename.pdf";
  link.dispatchEvent(new MouseEvent("click"));
}
