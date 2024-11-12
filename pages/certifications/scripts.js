function PageNavigator() {

    this.resume = function() {
        return  window.location.href = "../../index.html"; 
    }
    this.certifications = function () {
        return  window.location.href = "index.html"; 
    }
}
const navigator = new PageNavigator();