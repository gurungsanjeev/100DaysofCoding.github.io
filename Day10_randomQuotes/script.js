const quotesarr=[
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin Roosevelt",
"Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
"The future belongs to those who believe in the beauty of their dreams.— Eleanor Roosevelt",
"Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
"Believe you can and you're halfway there. — Theodore Roosevelt",
"It does not matter how slowly you go as long as you do not stop. — Confucius",
"You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
"The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
"Act as if what you do makes a difference. It does. William James",
"Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau"
];
const quotesData = document.getElementById("quotes");
const newQuotes = document.getElementById("nxtquotes");

function generateNextquotes(){
  const randomIndex = Math.floor(Math.random()*quotesarr.length);
  quotes.innerHTML = quotesarr[randomIndex];
}