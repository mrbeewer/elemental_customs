console.log("things have loaded");

window.onload = function() {
  console.log("all files that this page needs have been loaded");

  // collect and assign the various elements
  var statusRGBBody = document.getElementById("RGB-body");
  var statusRGBHeader = document.getElementById("RGB-header");

  var btn = document.getElementById("saveColor");
  var inputText = document.getElementById("colorNameInput");

  var slrRedBody = document.getElementById("barslide-red-body");
  var slrGreenBody = document.getElementById("barslide-green-body");
  var slrBlueBody = document.getElementById("barslide-blue-body");
  var slrRedHeader = document.getElementById("barslide-red-header");
  var slrGreenHeader = document.getElementById("barslide-green-header");
  var slrBlueHeader = document.getElementById("barslide-blue-header");

  // add Click listener to create the constructors
  btn.addEventListener("click", function() {
    colorName = document.getElementById("colorNameInput").value;
    createConstructors(colorName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader);
    backgroundColorScheme.toString();
  })

  // when the input box is clicked, select all text
  inputText.addEventListener("click", function() {
    this.select();
  });

  // set the sliders to the default RGB values
  initializeSliders(slrRedBody,slrGreenBody,slrBlueBody,slrRedHeader,slrGreenHeader,slrBlueHeader);

  // change listeners for the sliders
  // todo: get a loop to work for these assignments
  slrRedBody.addEventListener("change", function() {
    saveAndPostRGBs()
  });
  slrGreenBody.addEventListener("change", function() {
    saveAndPostRGBs()
  });
  slrBlueBody.addEventListener("change", function() {
    saveAndPostRGBs()
  });
  slrRedHeader.addEventListener("change", function() {
    saveAndPostRGBs()
  });
  slrGreenHeader.addEventListener("change", function() {
    saveAndPostRGBs()
  });
  slrBlueHeader.addEventListener("change", function() {
    saveAndPostRGBs()
  });

  // save the slider values into the variables and update the RGB string
  function saveAndPostRGBs() {
    saveSliderValues(slrRedBody,slrGreenBody,slrBlueBody,slrRedHeader,slrGreenHeader,slrBlueHeader);
    postRGB(statusRGBBody,statusRGBHeader);
  }

} // end of window.onload


// Sliderbars for background-color controls
var colorScheme = [];
var index = 0;
var sliderRedBody = 224;
var sliderGreenBody = 239;
var sliderBlueBody = 241;
var sliderRedHeader = 125;
var sliderGreenHeader = 180;
var sliderBlueHeader = 181;
var colorName = null;

// Constructor (blueprint) for the color schemes
//// when called (by createConstructors()) a new Object
//// is created containing the appropriate name and RGB colors
function backgroundColorScheme(name, redBody, greenBody, blueBody, redHeader, greenHeader, blueHeader) {
  this.name = name;
  this.redBody = redBody;
  this.greenBody = greenBody;
  this.blueBody = blueBody;
  this.redHeader = redHeader;
  this.greenHeader = greenHeader;
  this.blueHeader = blueHeader;

  this.toString = function() {
    // console.log(this.name, this.redBody, this.greenBody, this.blueBody, this.redHeader, this.greenHeader, this.blueHeader);

    return "Color scheme: " + this.name + " Body RGB(" + this.redBody +
    "," + this.greenBody + "," + this.blueBody + ")" + " and Header RGB(" +
    this.redHeader + "," + this.greenHeader + "," + this.blueHeader + ")";
  };
}

// Create new ColorSchemes
//// When called, this function creates an array to store all
//// the color schemes that are saved by the user.
function createConstructors(newName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader) {

  console.log(newName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader);

  colorScheme[index] = new backgroundColorScheme(newName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader);

  index += 1;
}

// set the sliders to the correct default values
function initializeSliders(slrRedBody,slrGreenBody,slrBlueBody,slrRedHeader,slrGreenHeader,slrBlueHeader) {
  slrRedBody.value = sliderRedBody;
  slrGreenBody.value = sliderGreenBody;
  slrBlueBody.value = sliderBlueBody;
  slrRedHeader.value = sliderRedHeader;
  slrGreenHeader.value = sliderGreenHeader;
  slrBlueHeader.value = sliderBlueHeader;
}

// save slider values into the variables
function saveSliderValues(slrRedBody,slrGreenBody,slrBlueBody,slrRedHeader,slrGreenHeader,slrBlueHeader) {
  sliderRedBody = slrRedBody.value;
  sliderGreenBody = slrGreenBody.value;
  sliderBlueBody = slrBlueBody.value;
  sliderRedHeader = slrRedHeader.value;
  sliderGreenHeader = slrGreenHeader.value;
  sliderBlueHeader = slrBlueHeader.value;
  console.log("BODY -- Red: " + sliderRedBody + ", Green: " + sliderGreenBody + ", Blue: " + sliderBlueBody);
  console.log("HEADER -- Red: " + sliderRedHeader + ", Green: " + sliderGreenHeader + ", Blue: " + sliderBlueHeader);

  var bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = "rgb(" + sliderRedBody + "," + sliderGreenBody +
"," + sliderBlueBody + ")";

  var navbarElement = document.querySelector("#navbar");
  navbarElement.style.backgroundColor = "rgb(" + sliderRedHeader + "," +
  sliderGreenHeader + "," + sliderBlueHeader + ")";

  var logoElement = document.querySelector("#logo");
  logoElement.style.backgroundColor = "rgb(" + sliderRedHeader + "," +
  sliderGreenHeader + "," + sliderBlueHeader + ")";
}

// update the RGB strings inside HTML
function postRGB(statusRGBBody,statusRGBHeader) {
  statusRGBBody.innerHTML = "RGB(" + sliderRedBody + "," + sliderGreenBody +
  "," + sliderBlueBody + ")";

  statusRGBHeader.innerHTML = "RGB(" + sliderRedHeader + "," + sliderGreenHeader +
  "," + sliderBlueHeader + ")";
}
