var link = document.getElementById("suv-enquiry");

if (link) {
    link.onclick = function() {
        window.location.href = "enquiry.html";
    };
}
// Enquiry form submission

var form = document.getElementById("enquiry-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (form.checkValidity()) {
             var successMessage = document.getElementById("success-message");
             var formIntro = document.getElementById("form-intro");
             var requiredNote = document.getElementById("required-note");

            form.style.display = "none";
            formIntro.style.display = "none";
            requiredNote.style.display = "none";

            successMessage.hidden = false;
            successMessage.scrollIntoView({ behavior: "smooth" });
        }
        else {
            form.reportValidity();
        }
    });
}
// Automatically select the vehicle from the homepage link
var vehicleSelect = document.getElementById("car");

if (vehicleSelect) {
    var parameters = new URLSearchParams(window.location.search);
    var selectedCar = parameters.get("car");

    if (selectedCar) {
        vehicleSelect.value = selectedCar;
    }
}
// Vehicle search
var searchInput = document.getElementById("vehicle-search");
var vehicleCards = document.querySelectorAll(".vehicle-card");
var noResults = document.getElementById("no-results");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        var searchTerm = searchInput.value.toLowerCase();
        var matchingCars = 0;

        vehicleCards.forEach(function (card) {
            var carName = card.textContent.toLowerCase();

            if (carName.includes(searchTerm)) {
                card.style.display = "";
                matchingCars++;
            } else {
                card.style.display = "none";
            }
        });

        if (noResults) {
            noResults.hidden = matchingCars !== 0;
        }
    });
}
// Clear vehicle search
var clearSearch = document.getElementById("clear-search");

if (clearSearch && searchInput) {
    clearSearch.addEventListener("click", function () {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
    });
}