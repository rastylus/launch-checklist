// Write your JavaScript code here!
// window.addEventListener("load", function() {
// }




window.addEventListener("load", function() {
    // console.log(myFetch());
    // console.log(addDestinationInfo()
    // tester(pickPlanet(result));

   


    // console.log(target)

    
    
    // console.log(list);
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
    //    listedPlanets = result;
       listedPlanets = result;
    //    console.log(result)
    //    console.log(listedPlanets);
   }).then(function () {
    //    console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
    //    console.log
    //    console.log(planet + "test");
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       console.log("test")
       // alert("test");
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

// window.addEventListener("load", function() {
// 
//     let form = document.querySelector("form");
//     form.addEventListener("submit", function(event) {
//         // alert("test");
//         event.preventDefault();
//     });
// });