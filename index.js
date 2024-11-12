function PageNavigator() {

    this.resume = function() {
        return  window.location.href = "index.html"; 
    }
    this.certifications = function () {
        return  window.location.href = "./pages/certifications/index.html"; 
    }
    this.portFolio = function () {
        return  window.location.href = "./pages/portFolio/index.html"; 
    }
}
const navigator = new PageNavigator();

function downloadButton() {

  var link = document.createElement("a");
  link.href = "./assets/downloads/Portfolio.pdf";
  link.download = "filename.pdf";
  link.dispatchEvent(new MouseEvent("click"));
}
