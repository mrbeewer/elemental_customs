// 1. the ability to initialize themselvesf
// 2. the ability to render data about themselves

var comp = {

  domElement: null,

  initialize: function (domSelector) {
    console.log('initializing component');
    this.domElement = document.createElement('img'); // <img>
    domSelector.appendChild(this.domElement)
  },

  render: function(imageSrc) {
    this.domElement.src = imageSrc; // <img src="imageSrc">
  }

};

var body = document.getElementsByTagName("body")[0];
console.log(body);
body.innerHTML = "";

var ponyImg = "http://www.animalsbase.com/wp-content/uploads/2015/06/Pony.jpg"
comp.initialize(body);
comp.render(ponyImg);

// create a timer, and change the comp.render() value to make a carosel
