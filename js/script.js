function searchServices() {
    let service =
        document.getElementById("serviceInput").value.trim();
    let location =
        document.getElementById("locationInput").value.trim();
    if (service === "") {
        alert("Please enter the service you need.");
        return;
    }
    if (location === "") {
        alert("Please enter your location.");
        return;
    }
    // Send service and location to services.html
    window.location.href =
        "services.html?service=" +
        encodeURIComponent(service) +
        "&location=" +
        encodeURIComponent(location);
}
function selectService(service) {

    document.getElementById("serviceInput").value = service;

    document.getElementById("serviceInput").focus();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function viewProvider(providerName) {

    window.location.href = "provider.html";

}
function contactProvider(providerName) {
    alert(
        "Contacting:\n" +
        providerName
    );
}
function filterServices() {
    let service =
        document.getElementById("searchService").value.toLowerCase();
    let location =
        document.getElementById("searchLocation").value.toLowerCase();
    let providers =
        document.querySelectorAll(".provider-card");
    providers.forEach(function(card) {
        let cardText =
            card.innerText.toLowerCase();
        if (
            cardText.includes(service) &&
            cardText.includes(location)
        ) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}
function bookService() {
    window.location.href = "booking.html";
}
/* =========================
   LOGIN
========================= */
function loginUser(event) {
    event.preventDefault();
    let email =
        document.getElementById("loginEmail").value;
    let password =
        document.getElementById("loginPassword").value;
    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }
    alert("Login successful! 🎉");
    window.location.href =
        "customer-dashboard.html";
}
/* =========================
   REGISTER
========================= */
function registerUser(event) {
    event.preventDefault();
    let userType =
        document.getElementById("userType").value;
    let name =
        document.getElementById("registerName").value;
    let email =
        document.getElementById("registerEmail").value;
    let phone =
        document.getElementById("registerPhone").value;
    let location =
        document.getElementById("registerLocation").value;
    let password =
        document.getElementById("registerPassword").value;
    let confirmPassword =
        document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    alert(
        "Registration successful!\n\n" +
        "Welcome, " + name + "!"
    );
}
function loadSearchData() {
    let params =
        new URLSearchParams(window.location.search);
    let service =
        params.get("service");
    let location =
        params.get("location");
    if (service) {
        let serviceInput =
            document.getElementById("searchService");
        if (serviceInput) {
            serviceInput.value = service;
        }
    }
    if (location) {
        let locationInput =
            document.getElementById("searchLocation");
        if (locationInput) {
            locationInput.value = location;
        }
    }
    // Automatically filter providers
    if (service || location) {
        filterServices();
    }
}
if (window.location.pathname.endsWith("services.html")) {
    loadSearchData();
}
/* =========================
   BOOKING
========================= */
function confirmBooking(event) {
    event.preventDefault();
    let name =
        document.getElementById("customerName").value;
    let phone =
        document.getElementById("customerPhone").value;
    let service =
        document.getElementById("bookingService").value;
    let date =
        document.getElementById("bookingDate").value;
    let time =
        document.getElementById("bookingTime").value;
    if (
        name === "" ||
        phone === "" ||
        service === "" ||
        date === "" ||
        time === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }
    alert(
        "Booking Request Submitted Successfully! 🎉\n\n" +
        "Customer: " + name + "\n" +
        "Service: " + service + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n\n" +
        "The service provider will contact you soon."
    );
}
/* =========================
   CUSTOMER DASHBOARD
========================= */
function logoutUser() {
    alert("You have been logged out.");
    window.location.href = "index.html";
}
function editProfile() {
    alert(
        "Edit Profile feature will be connected " +
        "to the backend later."
    );
}
function goToService(service) {
    window.location.href =
        "services.html?service=" +
        encodeURIComponent(service) +
        "&location=Pune";
}
/* =========================
   PROVIDER DASHBOARD
========================= */
function acceptRequest(customer) {
    alert(
        "Booking request accepted! ✅\n\n" +
        "Customer: " + customer
    );
}
function rejectRequest(customer) {
    let confirmReject =
        confirm(
            "Are you sure you want to reject the request from " +
            customer + "?"
        );
    if (confirmReject) {
        alert(
            "Booking request rejected."
        );
    }
}
function addService() {
    alert(
        "Add Service feature will be connected " +
        "to the database later."
    );
}
function editService(service) {
    alert(
        "Editing service:\n" +
        service
    );
}
function deleteService(service) {
    let confirmDelete =
        confirm(
            "Are you sure you want to delete " +
            service + "?"
        );
    if (confirmDelete) {
        alert(
            service +
            " has been removed."
        );
    }
}
function editProviderProfile() {
    alert(
        "Provider profile editing will be connected " +
        "to the backend later."
    );
}
function toggleAvailability() {
    alert(
        "Availability status changed."
    );
}
/* =========================
   FORGOT PASSWORD
========================= */

function forgotPassword(event) {

    event.preventDefault();

    let email =
        document.getElementById("forgotEmail").value.trim();


    if (email === "") {

        alert("Please enter your email address.");

        return;

    }


    alert(
        "Password reset link sent successfully! 📧\n\n" +
        "A password reset link has been sent to:\n" +
        email
    );


    window.location.href = "login.html";

}