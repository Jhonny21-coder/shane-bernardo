const messages = [
  "I know you're tired, but keep pushing forward.",
  "Remember, every setback is a setup for a comeback.",
  "Embrace the challenges, they will make you stronger.",
  "Stay focused on your goals, even when it's tough.",
  "You have the power to create the life you desire.",
  "Believe in yourself, even when others don't.",
  "Small progress is still progress, celebrate every step.",
  "Your determination will lead you to success.",
  "Stay positive, even when things seem impossible.",
  "Keep going, you're closer than you think to achieving your dreams."
];

const startButton = document.getElementById('startButton');
const messageDisplay = document.getElementById('messageDisplay');
const messageText = document.getElementById('messageText');
const okButton = document.getElementById('okButton');

startButton.addEventListener('click', displayMessages);

let currentIndex = 0;

function displayMessages() {
  messageDisplay.classList.remove('hidden');
  showCurrentMessage();
}

function showCurrentMessage() {
  if (currentIndex < messages.length) {
    messageText.textContent = messages[currentIndex];
    okButton.classList.remove('hidden');
  } else {
    messageDisplay.classList.add('hidden');
    currentIndex = 0; // Reset index for future clicks
    return;
  }
}

okButton.addEventListener('click', () => {
  currentIndex++;
  showCurrentMessage();
});
