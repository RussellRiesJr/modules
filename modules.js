// Have students create a new directory named modules where they will create an HTML and a JS file.
// The JS file should create an IIFE module named SolarSystem. Have the student create properties
// and methods for the following:

   // Getter for an array of planets that cannot be modified.
   // Getter/setter for number of planets that humans have landed people or robots on.
   // Public property for holding a last modified date.
   // Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
   // Any other fun/related data that the student wants to add.


var solarSystem = (function () {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Saturn", "Jupiter", "Uranus", "Neptune"];
  var currentSpacecraft = [];
  var planetsLanded = 2;
  var otherObjects = ["Kuiper Belt", "Oort Cloud", "Russell's Teapot"];

  return {
    getPlanet: function() {
      return planets;
    },
    setPlanetLanding: function(num) {
      planets.push(num);
    },
    getPlanetsLanded: function() {
      return planetsLanded;
    },
    last_modified: new Date(),
    setCurrentSpacecraft: function(name) {
      currentSpacecraft.push(name);
    },
    getCurrentSpacecraft: function() {
      return currentSpacecraft;
    },
    setOtherObjects: function(name) {
      otherObjects.push(name);
    },
    getOtherObjects: function() {
      return otherObjects;
    },
  }
}());
console.log(solarSystem);
