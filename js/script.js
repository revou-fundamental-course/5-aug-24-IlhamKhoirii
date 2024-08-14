// Retrieve elements by ID
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
var bmiResultDiv = document.getElementById("bmi-result");
var bmiValueSpan = document.getElementById("bmi-value");
var bmiCommentP = document.getElementById("bmi-comment");

// Modal elements
var modal = document.getElementById("myModal");
var modalText = document.querySelector("#modalText");
var span = document.getElementsByClassName("close")[0];

// Calculate BMI function
function calculate() {
    if(age.value === '' || height.value === '' || weight.value === '' || (!male.checked && !female.checked)) {
        modal.style.display = "block";
        modalText.innerHTML = `Anda harus mengisi form!`;
    } else {
        countBmi();
    }
}

// Function to calculate BMI
function countBmi() {
    var p = [age.value, height.value, weight.value];
    if(male.checked) {
        p.push("male");
    } else if(female.checked) {
        p.push("female");
    }

    var bmi = Number(p[2]) / (Number(p[1])/100 * Number(p[1])/100);
    var result = '';

    // Determine BMI category
    if(bmi < 18.5) {
        result = 'Kekurangan Berat Badan';
    } else if(18.5 <= bmi && bmi <= 24.9) {
        result = 'Ideal';
    } else if(25 <= bmi && bmi <= 29.9) {
        result = 'Kelebihan Berat Badan';
    } else if(30 <= bmi && bmi <= 34.9) {
        result = 'Obesitas';
    } else if(bmi >= 35) {
        result = 'Obesitas Ekstrem';
    }

    // Display results in the dedicated div
    bmiResultDiv.classList.remove("hidden");
    bmiValueSpan.innerHTML = bmi.toFixed(2);
    bmiCommentP.innerHTML = `Anda <strong>${result}</strong>.`;
}

// Function to reset the form and clear the BMI results
function resetForm() {
    // Reset all form input fields
    document.getElementById("form").reset();

    // Hide the result div
    document.getElementById("bmi-result").classList.add("hidden");

    // Clear the result values
    document.getElementById("bmi-value").innerHTML = "00.00";
    document.getElementById("bmi-comment").innerHTML = "";
}


// Close modal when clicking on the (x) button
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the modal
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
