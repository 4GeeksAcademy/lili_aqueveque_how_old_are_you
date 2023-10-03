function calculateAge() {
    const birthdateInput = document.getElementById("birthdateInput").value;
    const birthDate = new Date(birthdateInput);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const ageOutputElement = document.getElementById("ageOutput");
    ageOutputElement.innerHTML = `You are ${age} years old <br> ...and yet the universe is so vast that our mere existence is just 1 grain of sand in the hour glass of the universe... so make it count :)`;
}