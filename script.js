
window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
       event.preventDefault();
       formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
   });

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let pilot = document.querySelector("input[name=pilotName");
   let copilot = document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoLevel = document.querySelector("input[name=cargoMass");
});
