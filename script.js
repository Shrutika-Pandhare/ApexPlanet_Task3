function openModal() {
  document.getElementById("travelModal").style.display = "block";
}

function closeModal() {
  document.getElementById("travelModal").style.display = "none";
}

// Optional: Close modal if clicked outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById("travelModal");
  if (event.target === modal) {
    closeModal();
  }
}


// ---------------------------------------------
const quizData = [
    {
      question: "Choose a morning drink?",
      options: [
        { text: "Cha Yen", image: "images/cha_yen_tea.jpg", destination: "Bangkok" },
        { text: "Fresh Orange Juice", image: "images/orange_jui.jpg", destination: "Florida" },
        { text: "Tea", image: "images/tea.jpg", destination: "Delhi" },
        { text: "Fruit Smoothie", image: "images/fruit_smo.jpg", destination: "Bali" },
        { text: "Latte", image: "images/latte.jpg", destination: "Paris" },
        { text: "Matcha", image: "images/matcha.jpg", destination: "Kyoto" }
      ]
    },
    {
      question: "Pick a comfort food:",
      options: [
        { text: "Pizza", image: "images/pizza.jpg", destination: "Florida" },
        { text: "Ramen", image: "images/ramen.jpg", destination: "Kyoto" },
        { text: "Nasi Goreng", image: "images/nasi.jpg", destination: "Bali" },
        { text: "Butter Chicken", image: "images/butter.jpg", destination: "Delhi" },
        { text: "Onion Soup", image: "images/onion.jpg", destination: "Paris" },
        { text: "Tom Yom", image: "images/tom_yom.jpg", destination: "Bangkok" }
      ]
    },
    {
      question: "Choose a dessert:",
      options: [
        { text: "Chocolate Cake", image: "images/choco_cake.jpg", destination: "Florida" },
        { text: "Gelato", image: "images/gelato.jpg", destination: "Bangkok" },
        { text: "Mochi", image: "images/mochi.jpg", destination: "Kyoto" },
        { text: "pancake", image: "images/pancakes.jpg", destination: "Bali" },
        { text: "Churros", image: "images/churros.jpg", destination: "Paris" },
        { text: "Rasgulla", image: "images/ras.jpg", destination: "Delhi" }
      ]
    },
    {
      question: "What would you eat at a fair?",
      options: [
        { text: "Corn Dog", image: "images/dog.jpg", destination: "Florida" },
        { text: "Cotton Candy", image: "images/cotton.jpg", destination: "Bali" },
        { text: "Fried Ice Cream", image: "images/fryice.jpg", destination: "Bangkok" },
        { text: "Dabeli", image: "images/dabeli.jpg", destination: "Delhi" },
        { text: "Dango", image: "images/dango.jpg", destination: "Kyoto" },
        { text: "Crepes", image: "images/crepes.jpg", destination: "Paris" }
      ]
    },
    {
      question: "Your go-to late night snack:",
      options: [
        { text: "Fries", image: "images/fries.jpg", destination: "Florida" },
        { text: "Instant Noodles", image: "images/noodles.jpg", destination: "Bali" },
        { text: "Cookies", image: "images/cookies.jpg", destination: "Paris" },
        { text: "Samosa", image: "images/samosa.jpg", destination: "Delhi" },
        { text: "Dim sums", image: "images/sums.jpg", destination: "Bangkok" },
        { text: "Onigiri", image: "images/oni.jpg", destination: "Kyoto" }
      ]
    },
    {
      question: "Pick a tropical treat:",
      options: [
        { text: "Coconut Water", image: "images/water.jpg", destination: "Bali" },
        { text: "Kokam Sorbet", image: "images/koKAM.jpg", destination: "Delhi" },
        { text: "Dorayaki", image: "images/dora.jpg", destination: "Kyoto" },
        { text: "Mango Sticky Rice", image: "images/mango.jpg", destination: "Bangkok" },
        { text: "Lychee Drink", image: "images/lichi.jpg", destination: "Paris" },
        { text: "Coconut Cake", image: "images/cake.jpg", destination: "Florida" }
      ]
    },
    {
      question: "Finish strong: What's your perfect dinner?",
      options: [
        { text: "Sushi Platter", image: "images/sushi.jpg", destination: "Kyoto" },
        { text: "Steak", image: "images/steak.jpg", destination: "Florida" },
        { text: "Smoked Salmon", image: "images/salmon.jpg", destination: "Paris" },
        { text: "Paneer Butter Masala", image: "images/panner.jpg", destination: "Delhi" },
        { text: "Falafel Wrap", image: "images/wrap.jpg", destination: "Bali" },
        { text: "Pho", image: "images/pho.jpg", destination: "Bangkok" }
      ]
    }
  ];

  let currentQuestion = 0;
  const votes = {};

  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");
  const resultText = document.getElementById("result-text");
  const resultImage = document.getElementById("result-image");
  const startAgainBtn = document.getElementById("start-again");

  function showQuestion(index) {
    const q = quizData[index];
    quizDiv.innerHTML = `<div class="question">${q.question}</div>`;
    const optionsHTML = q.options.map((opt, i) => `
      <div class="option" onclick="selectOption('${opt.destination}')">
        <img src="${opt.image}" alt="${opt.text}">
        <div class="caption">${opt.text}</div>
      </div>
    `).join("");
    quizDiv.innerHTML += `<div class="options">${optionsHTML}</div>`;
  }

  function selectOption(destination) {
    votes[destination] = (votes[destination] || 0) + 1;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  }

function showResult() {
  quizDiv.style.display = "none";
  resultDiv.style.display = "block";

  const topDestination = Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];

  const images = {
  "Florida": "videos/florida_vi.gif",
  "Bali": "videos/bali_vi.gif",
  "Paris": "videos/paris_vi.gif",
  "Kyoto": "videos/kyoto_vi.gif",
  "Delhi": "videos/india_vi.gif",
  "Bangkok": "videos/bangkok_vi.gif",
};

resultText.innerText = `Your dream vacation is ${topDestination}!`;
resultImage.src = images[topDestination] || "images/default.jpg";

  // Weather fetch
  const weatherDiv = document.getElementById("weather");
 const apiKey = WEATHER_API_KEY;


  const cityLookup = {
    "Delhi": "New Delhi",
    "Florida": "Orlando",
    "Paris": "Paris",
    "Bali": "Denpasar",
    "Bangkok": "Bangkok",
    "Kyoto": "Kyoto"
  };

  const cityName = cityLookup[topDestination] || topDestination;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      if (data.main && data.weather) {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        weatherDiv.innerText = `Current weather in ${cityName}: ${temp}°C, ${desc}`;
      } else {
        weatherDiv.innerText = "Weather info currently unavailable.";
      }
    })
    .catch(error => {
      console.error(error);
      weatherDiv.innerText = "Weather info currently unavailable.";
    });

  // Joke fetch
  const jokeDiv = document.getElementById("fun");
  const jokeURL = "https://v2.jokeapi.dev/joke/Any?type=single";

  fetch(jokeURL)
    .then(response => response.json())
    .then(data => {
      if (data && data.joke) {
        jokeDiv.innerText = `Here's a joke for your trip to ${topDestination}: ${data.joke}`;
      } else {
        jokeDiv.innerText = "Couldn't fetch a joke right now.";
      }
    })
    .catch(error => {
      console.error(error);
      jokeDiv.innerText = "Joke currently unavailable.";
    });
}


  startAgainBtn.onclick = () => {
    currentQuestion = 0;
    for (let key in votes) delete votes[key];
    quizDiv.style.display = "block";
    resultDiv.style.display = "none";
    showQuestion(currentQuestion);
  };

  showQuestion(currentQuestion);

