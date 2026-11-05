
// 1. Camp Progress

let collectedUnits = 32;
let campGoal = 50;

let percentage = (collectedUnits / campGoal) * 100;

document.getElementById("progressText").textContent =
    collectedUnits + " out of " + campGoal + " units collected";

document.getElementById("progressFill").style.width =
    percentage + "%";


// 2. Donor Registration


let donorForm = document.getElementById("donorForm");

donorForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let weight = Number(document.getElementById("weight").value);
    let bloodGroup = document.getElementById("bloodGroup").value;
    let contact = document.getElementById("contact").value;

    let message = document.getElementById("message");

    if (
        name.trim() === "" ||
        age === 0 ||
        weight === 0 ||
        bloodGroup === "" ||
        contact.trim() === ""
    ) {
        message.textContent = "Please fill in all the fields.";
    }
    else if (!/^[0-9]{10}$/.test(contact)) {

    message.textContent =
        "Please enter a valid 10-digit mobile number.";

    message.style.color = "#F45B78";
    
}
    else if (weight < 45 || weight > 300) {

        message.textContent =
            "Please enter a valid weight between 45 kg and 300 kg.";

        message.style.color = "#F45B78";

    }

    else {
        message.textContent =
            "Thank you, " + name + "! Your registration was successful.";

        message.style.color = "#4CAF50";

        donorForm.reset();
    }

});


// 3. Donor Eligibility Checker

let eligibilityForm = document.getElementById("eligibilityForm");

eligibilityForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let age = document.getElementById("donorAge").value;
    let weight = document.getElementById("donorWeight").value;
    let health = document.getElementById("donorHealth").value;
    let tattoo = document.getElementById("donorTattoo").value;

    let result = document.getElementById("eligibilityResult");

    if (age === "yes" && weight === "yes" && health === "yes" && tattoo=== "no") {

        result.textContent =
            "You meet the basic criteria! Please consult medical personnel for final screening.";

        result.style.color = "#4CAF50";

    }

    else {

        result.textContent =
            "You may not meet the basic criteria. Please consult qualified medical personnel.";

        result.style.color = "#F45B78";

    }

});

// 4. Camp and Venue Selection

let venueSelect = document.getElementById("venueSelect");

venueSelect.addEventListener("change", function() {

    let selectedVenue = venueSelect.value;

    let venueMessage = document.getElementById("venueMessage");

    if (selectedVenue === "") {

        venueMessage.textContent = "";

    }

    else {

        venueMessage.textContent =
            "You selected " + selectedVenue + " as your preferred donation venue.";

    }

});

// 5. Appointment Booking

let appointmentForm = document.getElementById("appointmentForm");

// Set the minimum appointment date to today

let appointmentDateInput = document.getElementById("appointmentDate");

let today = new Date();

let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");

let minimumDate = year + "-" + month + "-" + day;

appointmentDateInput.min = minimumDate;
// Set the maximum appointment date to three moonths from today

let maximumDate = new Date();

maximumDate.setMonth(maximumDate.getMonth() + 3);

let maxYear = maximumDate.getFullYear();
let maxMonth = String(maximumDate.getMonth() + 1).padStart(2, "0");
let maxDay = String(maximumDate.getDate()).padStart(2, "0");

let maximumDateValue = maxYear + "-" + maxMonth + "-" + maxDay;

appointmentDateInput.max = maximumDateValue;

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let appointmentDate = document.getElementById("appointmentDate").value;

    let appointmentTime = document.getElementById("appointmentTime").value;

    let selectedVenue = document.getElementById("venueSelect").value;

    let appointmentMessage = document.getElementById("appointmentMessage");

    if (appointmentDate === "" || appointmentTime === "") {

        appointmentMessage.textContent =
            "Please select an appointment date and time.";

    }
else if (selectedVenue === "") {

        appointmentMessage.textContent =
            "Please select a donation venue first.";

    }

    else {

        appointmentMessage.textContent =
            "Appointment request submitted for " +
            appointmentDate + " at " +
            appointmentTime + " at " +
            selectedVenue + ".";

        appointmentMessage.style.color = "#4CAF50";

        appointmentForm.reset();

    }

});
