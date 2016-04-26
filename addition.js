// Create a new JS file for the solar system application that augments the SolarSystem module you created in the initial JS file. You can make any getters, setters, or other functions you'd like for your public interface. Here are a couple of geeky examples:
// - Getter for an array of closest 5 stars to the solar system.
// - Getter/setter for the estimated age of the solar system in earth years. (Nothing fancy, just a number like var age = 5,000,000,000)
// - Getter/setter for array of known dwarf planets.

var newSolar =(function(solarSystem) {
  var closestStars = ["Proxima Centauri", "Barnard's Star", "Luhman 16A", "Luhman 16B", "Wolf 359"];
  var age = 6000000000;
  var dwarfPlanets = ["Ceres", "Pluto", "Eris", "Makemake", "Haumea"];

  solarSystem.getClosestStars = function() {
    return closestStars;
  };
  solarSystem.getAge = function() {
    return age;
  };
  solarSystem.setAge = function(newAge) {
    age = newAge;
  };
  solarSystem.getDwarfPlanets = function() {
    return dwarfPlanets;
  };
  solarSystem.setDwarfPlanet = function(name) {
    dwarfPlanets.push(name);
  };
  return solarSystem;
}(solarSystem));
