// we want to wait for all the things on the page to load before doing anything
// we dont want the javascript to act on things that haven't loaded
window.onload = function(event) {
  //anything called inside or done inside of here will only occur
  //AFTER the page has loaded. every image, file, style, etc.
  console.log("hey friends! we made it!")
};
//end window.onload
