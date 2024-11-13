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
  this.gitUrl = function () {
    return window.open("https://github.com/Trick1z", "_blank");
  };
}

function downloadPDF() {
  //  "./assets/downloads/PortFolio.pdf"
  this.resume = function () {
    const pdfUrl = "./assets/downloads/Portfolio.pdf"; // Path to your PDF file

    // Fetch the PDF file
    fetch(pdfUrl)
      .then((response) => response.blob()) // Convert the response to a Blob
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob); // Create a URL for the Blob
        link.download = "Portfolio.pdf"; // Name the downloaded file
        link.click(); // Trigger the download
      })
      .catch((error) => console.error("Error downloading the PDF:", error));
  };
  // this.resume = function (){
  //   var data = 'This is a dynamically generated text file.';
  //   var blob = new Blob([data], { type: 'text/plain' });
  //   var link = document.createElement('a');
  //   link.href = URL.createObjectURL(blob);
  //   link.download = 'Portfolio.pdf';
  //   link.click();
  // }
}

let download = new downloadPDF();
const navigator = new PageNavigator();
