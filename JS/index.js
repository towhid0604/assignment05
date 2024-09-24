function showComponent(component) {
  const donationSection = document.getElementById("donation");
  const historySection = document.getElementById("history");
  donationSection.style.display = "none";
  historySection.style.display = "none";
  if (component === "donation") {
    donationSection.style.display = "block";
    document.getElementById("donationButton").classList.add("active");
    document.getElementById("historyButton").classList.remove("active");
  } else if (component === "history") {
    historySection.style.display = "block";
    document.getElementById("historyButton").classList.add("active");
    document.getElementById("donationButton").classList.remove("active");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  showComponent("donation");
});
function showPopup() {
  document.body.classList.add("blur");
  document.getElementById("successPopup").classList.remove("hidden");
}

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("successPopup").classList.add("hidden");
  document.body.classList.remove("blur");
});
const cardTitles = [
  "Donate for Flood at Noakhali, Bangladesh",
  "Donate for Flood Relief in Feni, Bangladesh",
  "Aid for Injured in the Quota Movement",
];
let totalDonationAmount = 5500;
let currentDonationTotals = [0, 0, 0];
function showComponent(component) {
  const donationComponent = document.getElementById("donationComponent");
  const historyComponent = document.getElementById("historyComponent");
  const donationButton = document.getElementById("donationButton");
  const historyButton = document.getElementById("historyButton");

  if (component === "donation") {
    donationComponent.classList.remove("hidden");
    historyComponent.classList.add("hidden");
    donationButton.classList.add("bg-lime-400", "active");
    donationButton.classList.remove("inactive");
    historyButton.classList.add("border", "inactive");
    historyButton.classList.remove("bg-lime-400", "active");
  } else if (component === "history") {
    historyComponent.classList.remove("hidden");
    donationComponent.classList.add("hidden");
    historyButton.classList.add("bg-lime-400", "active");
    historyButton.classList.remove("inactive");
    donationButton.classList.add("border", "inactive");
    donationButton.classList.remove("bg-lime-400", "active");
  }
}

function addDonation(event, cardIndex) {
  event.preventDefault();

  const donationAmountInput = document.getElementById(
    `donationAmount${cardIndex}`
  );
  const donationAmount = parseInt(donationAmountInput.value);

  if (donationAmount <= 0) {
    alert("Please enter a positive donation amount.");
    return false;
  }
  currentDonationTotals[cardIndex - 1] += donationAmount;
  totalDonationAmount -= donationAmount;

  document.getElementById(
    "totalDonation"
  ).innerText = `${totalDonationAmount} BDT`;
  document.getElementById(`currentDonationAmount${cardIndex}`).innerText = ` ${
    currentDonationTotals[cardIndex - 1]
  } BDT`;
  const donationHistory = document.getElementById("donationHistory");
  const donationCard = document.createElement("div");
  donationCard.className =
    "bg-gray-100 border border-gray-300 rounded-md p-4 mb-4";
  const currentDateTime = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDateTime = currentDateTime.toLocaleDateString(
    "en-US",
    options
  );

  donationCard.innerHTML = `
<h3 class="font-semibold">${donationAmount} Taka is donated for "${
    cardTitles[cardIndex - 1]
  }"</h3>
<p>Date: ${formattedDateTime}</p>
`;
  donationHistory.appendChild(donationCard);
  showPopup("Your donation for Humenkind.");
  donationAmountInput.value = "";
}
function showPopup(message) {
  const popup = document.getElementById("successPopup");
  popup.querySelector("p").innerText = message;
  popup.classList.remove("hidden");
}
function closePopup() {
  const popup = document.getElementById("successPopup");
  popup.classList.add("hidden");
}
