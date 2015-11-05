console.log("things have loaded");

window.onload = function() {
  console.log("all files that this page needs have been loaded");

  // // basic selectors
  // var container = document.getElementById("status-message");
  //
  // var monsters = ["Wreck-it Ralph", "The giraffe from Lion King SNES", "Ganon"];
  //
  // for (var baddie in monsters) {
  //   var li = document.createElement('li'); // create <li>
  //   li.innerHTML = monsters[baddie]; // add to li
  //   container.appendChild(li); // append to the child
  // }

  // // now we need to create an immage
  // var kittenImage = document.createElement('img'); // creates <img>
  // // alt text (alt) - ADA compliancy text for the blind
  // kittenImage.alt = "A cute random kitten";
  // kittenImage.id = "kitten";
  // kittenImage.className = "cat";
  // // src = image source
  // kittenImage.src = "http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg";
  // container.appendChild(kittenImage);

  // modify the cuteness level of my kitten
  // create a new selector by querying the document
  // notice the use of CSS style selectors
  // makes things easy to remember
  // var kitten = document.querySelector("#kitten");
  // kitten.src = "http://cdn.playbuzz.com/cdn/8841f68c-493a-4a2a-8830-524e75cf9cbe/e2a9f148-1b3c-41d1-9149-3487ac3c057b.jpg";

  // var listItemsArray = document.getElementsByTagName("li");
  // console.log(listItemsArray);
  //
  // for (var li in listItemsArray) {
  //   listItemsArray[li].innerHTML = "We are the champions (my friend)";
  // }
  // var status = document.getElementById("status-message");
  var statusRGBBody = document.getElementById("RGB-body");
  var statusRGBHeader = document.getElementById("RGB-header");

  //var btn = document.getElementById("addPoint");
  var btn = document.getElementById("saveColor");
  var inputText = document.getElementById("colorNameInput");

  var slrRedBody = document.getElementById("barslide-red-body");
  var slrGreenBody = document.getElementById("barslide-green-body");
  var slrBlueBody = document.getElementById("barslide-blue-body");
  var slrRedHeader = document.getElementById("barslide-red-header");
  var slrGreenHeader = document.getElementById("barslide-green-header");
  var slrBlueHeader = document.getElementById("barslide-blue-header");
  // var btn = document.querySelector(#addPoint);

  // initialize our user component
  // user.initialize(status);
  // selector.addEventListener(eventType, function());
  // btn.addEventListener("click", function() {
  //   user.updateScoreByOnePoint();
  // });
  btn.addEventListener("click", function() {
    colorName = document.getElementById("colorNameInput").value;
    createConstructors(colorName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader);
    backgroundColorScheme.toString();
  })

  inputText.addEventListener("click", function() {
    this.select();
  });


  initializeSliders(slrRedBody,slrGreenBody,slrBlueBody,slrRedHeader,slrGreenHeader,slrBlueHeader);

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


  function saveAndPostRGBs() {
    saveSliderValues(slrRedBody,slrGreenBody,slrBlueBody,slrRedHeader,slrGreenHeader,slrBlueHeader);
    postRGB(statusRGBBody,statusRGBHeader);
  }

  // // bind event to a DOM Elemental
  // var body = document.getElementsByTagName("body")[0]; //call the first index of that array
  // // add EventListener to the element
  // body.addEventListener("click",function(event) {
  //   console.log(event);
  //   console.log("ow, why you click me bro?");
  //   kittenImage.id = "kitten-hidden";
  // });
  //
  // body.addEventListener("touchstart", function(event) {
  //   // console.log(event);
  //   // touchstart
  //   // touchmove
  //   // touchend
  //   console.log("yo, yo dude why you poking me?");
  // });
  //
  // body.addEventListener("keyup", function(event) {
  //   // look for specific keys to be pressed
  //   if (event.keyCode == 13) {
  //     console.log("why you press enter so much yo");
  //     kittenImage.id = "kitten";
  //   }
  //   console.log(event.keyCode);
  // });

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

function backgroundColorScheme(name, redBody, greenBody, blueBody, redHeader, greenHeader, blueHeader) {
  this.name = name;
  this.redBody = redBody;
  this.greenBody = greenBody;
  this.blueBody = blueBody;
  this.redHeader = redHeader;
  this.greenHeader = greenHeader;
  this.blueHeader = blueHeader;

  this.toString = function() {
  return "Color scheme: " + this.name + " Body RGB(" + this.redBody +
  "," + this.greenBody + "," + this.blueBody + ")" + " and Header RGB(" +
  this.redHeader + "," + this.greenHeader + "," + this.blueHeader + ")";

  console.log(this.name, this.redBody, this.greenBody, this.blueBody, this.redHeader, this.greenHeader, this.blueHeader);
  }
}

function createConstructors(newName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader) {
  console.log(newName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader);
  colorScheme[index] = new backgroundColorScheme(newName, sliderRedBody, sliderGreenBody, sliderBlueBody, sliderRedHeader, sliderGreenHeader, sliderBlueHeader);
  index += 1;
}

function initializeSliders(slrRedBody,slrGreenBody,slrBlueBody,slrRedHeader,slrGreenHeader,slrBlueHeader) {
  slrRedBody.value = sliderRedBody;
  slrGreenBody.value = sliderGreenBody;
  slrBlueBody.value = sliderBlueBody;
  slrRedHeader.value = sliderRedHeader;
  slrGreenHeader.value = sliderGreenHeader;
  slrBlueHeader.value = sliderBlueHeader;
  //document.getElementById("barslidesize").value;
}

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

function postRGB(statusRGBBody,statusRGBHeader) {
  statusRGBBody.innerHTML = "RGB(" + sliderRedBody + "," + sliderGreenBody +
"," + sliderBlueBody + ")";
statusRGBHeader.innerHTML = "RGB(" + sliderRedHeader + "," + sliderGreenHeader +
"," + sliderBlueHeader + ")";
}

// create a user interface component
// the goal here is to create an Object
// that can update itself
// and visually show that if needed

// ex #1: user component
var user = {
  name: null,
  score: 0,
  domElement: null,
  // elementToAppendTo: document.selector for an individual element
  initialize: function (elementToAppendTo) {
    if (this.name == null) {
      this.name = prompt("What is your name?");
    }
    this.domElement = document.createElement("div");
    elementToAppendTo.appendChild(this.domElement);
    console.log("Initialize: complete")
  },
  // innerHTML: valid html to place in our domElement
  render: function(innerHTML) {
    if (typeof(innerHTML) == "string") {
      this.domElement.innerHTML = innerHTML;
    }
  },
  buildPlayerStatusString: function() {
    return this.name + ": " + this.score;
  },
  getName: function() {
    return this.name;
  },
  saveName: function(newName) {
    if (typeof(newName) == "string" && newName.length > 0) {
      this.name = newName;
    } else {
      alert("You entered an incorrect or empty name");
    }
  },
  getScore: function() {
    return this.score;
  },
  updateScoreByOnePoint: function () {
    this.score += 1;
    var status = this.buildPlayerStatusString();
    this.render(status);
    return this.score;
  }
};


var component = {
  domElement: null,
  initialize: function(selector) {
    // create a domElement
    this.domElement = document.createElement('div');
    // attach it
    selector.appendChild(this.domElement);
  },
  render: function(statusText) {
    // update the domElement
    this.domElement.innerHTML = statusText;
  }
};
