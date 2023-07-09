//Error case 

const emailInput = document.getElementById("inputGO");
const submitButton = document.getElementById("submit");
const errorText = document.getElementById("errorText");

submitButton.addEventListener("click", function () {
  if (emailInput.value.indexOf("@") === -1) {
    errorText.textContent = 'Email address must contain "@" symbol.';
    errorText.style.display = "block";
  } else if (!isValidEmail(emailInput.value)) {
    errorText.textContent = "Invalid email address.";
    errorText.style.display = "block";
  } else {
    errorText.style.display = "block";
    errorText.textContent="Thanks, We collect your DATA :)"
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//Slider
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

function changeCard(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// function toggleMenu() {
//   const content = document.querySelector('.contentmain');
//   content.classList.toggle('blur-effect');
// }

const toggleButton = document.getElementsByClassName('toggle-btn')[0]
const navbarItems = document.getElementsByClassName('navitems')[0]

toggleButton.addEventListener('click',()=>{navbarItems.classList.toggle('active')})