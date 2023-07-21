// Write your helper functions here!
require('isomorphic-fetch');

function tester(test) {
   return console.log(test);
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // let target = document.getElementById("missionTarget");
    target.innerHTML = 
   // Here is the HTML formatting for our mission target div.
   /*
   */
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    let numInput = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numInput)) {
        return "Not a Number";
    } else if (numInput) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let items = document.getElementById("faultyItems");
    // console.log(document.getElementById("faultyItems"))
    // console.dir(list.style.visibilty);
    // console.log(list.style.visibilty);
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required.");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter valid information.")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Pilot ${copilot} is ready`;
        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Not enough fuel for journey";
            cargoStatus.innerHTML = "Cargo Mass is too high for journey";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = "Not enough fuel for journey";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
            cargoStatus.innerHTML = "Cargo Mass is too high for journey";
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
        }
    }
    
    
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {
        //    console.log(json[0]);
        //    console.log(json);
        });
    });
    return planetsReturned;
}

function pickPlanet(planets) {

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
