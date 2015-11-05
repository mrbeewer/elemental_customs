
# Conceptual Layout: Elemental Customs

#### *Creating custom pieces from wood and metal.*

<br />

##### Change Log
* 11/3/2015: Paper wireframe to HTML & CSS Concept
* 11/4/2015: Added sliderbars that allow the user to change the background-color of the body and the header (live). User is also able to create color scheme constructors based on the current sliderbar values. The constructor code is as follows:

```javascript
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
```

##### Current Page Appearance
![Elemental Customs Website](https://github.com/mrbeewer/elemental_customs/blob/master/Elemental_Customs.png?raw=true)
