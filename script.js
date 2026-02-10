let currentUser = null;
let selectedOccupation = "student";

function checkAuth() {
  const savedUser = localStorage.getItem("quizUser");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    showStartScreen();
  } else {
    showAuthScreen();
  }
}

function showAuthScreen() {
  hideAllScreens();
  document.getElementById("auth-screen").classList.remove("hidden");
}

function showStartScreen() {
  hideAllScreens();
  updateUserUI();
  document.getElementById("start-screen").classList.remove("hidden");
  initCategories();
}

function hideAllScreens() {
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("review-screen").classList.add("hidden");
}

function switchAuthTab(tab) {
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  clearErrors();

  if (tab === "login") {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  } else {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  }
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const button = input.nextElementSibling;
  input.type = input.type === "password" ? "text" : "password";
  if (button && button.classList.contains("password-toggle")) {
    button.setAttribute(
      "aria-label",
      input.type === "password" ? "Show password" : "Hide password"
    );
  }
}

function selectOccupation(occupation) {
  selectedOccupation = occupation;
  document.getElementById("signup-occupation").value = occupation;
  document
    .querySelectorAll(".occupation-option")
    .forEach((btn) => btn.classList.remove("selected"));
  event.currentTarget.classList.add("selected");
}

function clearErrors() {
  document.querySelectorAll(".error-msg").forEach((el) => {
    el.classList.add("hidden");
    el.textContent = "";
  });
}

function showError(elementId, message) {
  const el = document.getElementById(elementId);
  el.textContent = message;
  el.classList.remove("hidden");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleSignup(event) {
  event.preventDefault();
  clearErrors();

  const name = document.getElementById("signup-name").value.trim();
  const email = document
    .getElementById("signup-email")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("signup-password").value;
  const occupation = document.getElementById("signup-occupation").value;

  let hasError = false;

  if (name.length < 2) {
    showError("signup-name-error", "Name must be at least 2 characters");
    hasError = true;
  }

  if (!validateEmail(email)) {
    showError("signup-email-error", "Please enter a valid email");
    hasError = true;
  }

  if (password.length < 6) {
    showError(
      "signup-password-error",
      "Password must be at least 6 characters"
    );
    hasError = true;
  }

  if (hasError) {
    document.getElementById("signup-form").classList.add("shake");
    setTimeout(
      () => document.getElementById("signup-form").classList.remove("shake"),
      300
    );
    return;
  }

  const users = JSON.parse(localStorage.getItem("quizUsers") || "[]");
  if (users.find((u) => u.email === email)) {
    showError("signup-error", "An account with this email already exists");
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password, // In production, this should be hashed
    occupation,
    createdAt: new Date().toISOString(),
    stats: { quizzesTaken: 0, totalScore: 0 },
  };

  users.push(newUser);
  localStorage.setItem("quizUsers", JSON.stringify(users));

  currentUser = newUser;
  localStorage.setItem("quizUser", JSON.stringify(newUser));

  showStartScreen();
}

function handleLogin(event) {
  event.preventDefault();
  clearErrors();

  const email = document
    .getElementById("login-email")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("login-password").value;

  if (!validateEmail(email)) {
    showError("login-email-error", "Please enter a valid email");
    return;
  }

  const users = JSON.parse(localStorage.getItem("quizUsers") || "[]");
  const user = users.find((u) => u.email === email);

  if (!user) {
    showError("login-error", "No account found with this email");
    document.getElementById("login-form").classList.add("shake");
    setTimeout(
      () => document.getElementById("login-form").classList.remove("shake"),
      300
    );
    return;
  }

  if (user.password !== password) {
    showError("login-error", "Incorrect password");
    document.getElementById("login-form").classList.add("shake");
    setTimeout(
      () => document.getElementById("login-form").classList.remove("shake"),
      300
    );
    return;
  }

  currentUser = user;
  localStorage.setItem("quizUser", JSON.stringify(user));

  showStartScreen();
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem("quizUser");
  document.getElementById("user-menu").classList.add("hidden");
  const btn = document.getElementById("user-menu-btn");
  if (btn) btn.setAttribute("aria-expanded", "false");

  document.getElementById("login-form").reset();
  document.getElementById("signup-form").reset();
  clearErrors();

  showAuthScreen();
}

function updateUserUI() {
  if (!currentUser) return;

  const firstName = currentUser.name.split(" ")[0].toLowerCase();
  const initials = currentUser.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  document.getElementById("user-avatar").textContent = initials;
  document.getElementById("user-greeting").textContent = `hey, ${firstName}`;
  document.getElementById("user-occupation").textContent =
    currentUser.occupation;
  document.getElementById("menu-user-name").textContent = currentUser.name;
  document.getElementById("menu-user-email").textContent = currentUser.email;
}

function toggleUserMenu() {
  const menu = document.getElementById("user-menu");
  const btn = document.getElementById("user-menu-btn");
  const isHidden = menu.classList.toggle("hidden");
  if (btn) {
    btn.setAttribute("aria-expanded", !isHidden);
  }
}

document.addEventListener("click", (e) => {
  const menu = document.getElementById("user-menu");
  const menuButton = e.target.closest("button");
  if (
    !menu.contains(e.target) &&
    !menuButton?.onclick?.toString().includes("toggleUserMenu")
  ) {
    menu.classList.add("hidden");
    const btn = document.getElementById("user-menu-btn");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
});

const questionBank = {
  science: {
    name: "Science",
    icon: "🔬",
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2,
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        correct: 2,
      },
      {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        correct: 1,
      },
      {
        question: "What is the speed of light in km/s (approximately)?",
        options: ["150,000", "300,000", "450,000", "600,000"],
        correct: 1,
      },
      {
        question: "What planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
      },
      {
        question: "What is the hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2,
      },
      {
        question: "How many bones are in the adult human body?",
        options: ["186", "206", "226", "246"],
        correct: 1,
      },
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correct: 0,
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: 1,
      },
      {
        question: "What type of animal is a dolphin?",
        options: ["Fish", "Reptile", "Mammal", "Amphibian"],
        correct: 2,
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correct: 1,
      },
      {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correct: 2,
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Cell", "Molecule", "Organ"],
        correct: 1,
      },
    ],
  },
  history: {
    name: "History",
    icon: "📜",
    questions: [
      {
        question: "In what year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2,
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Jefferson", "Washington", "Adams", "Lincoln"],
        correct: 1,
      },
      {
        question: "Which ancient wonder was located in Egypt?",
        options: [
          "Colossus",
          "Pyramids of Giza",
          "Hanging Gardens",
          "Lighthouse",
        ],
        correct: 1,
      },
      {
        question: "What year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        correct: 1,
      },
      {
        question: "Who discovered America in 1492?",
        options: ["Magellan", "Columbus", "Vespucci", "Cabot"],
        correct: 1,
      },
      {
        question: "Which empire built the Colosseum?",
        options: ["Greek", "Roman", "Persian", "Byzantine"],
        correct: 1,
      },
      {
        question: "What year did World War I begin?",
        options: ["1912", "1914", "1916", "1918"],
        correct: 1,
      },
      {
        question: "Who was known as the 'Maid of Orléans'?",
        options: [
          "Marie Antoinette",
          "Joan of Arc",
          "Catherine de Medici",
          "Eleanor of Aquitaine",
        ],
        correct: 1,
      },
      {
        question: "Which country was the first to land on the moon?",
        options: ["Russia", "USA", "China", "UK"],
        correct: 1,
      },
      {
        question: "What wall fell in 1989?",
        options: [
          "Great Wall",
          "Berlin Wall",
          "Hadrian's Wall",
          "Wall of China",
        ],
        correct: 1,
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Da Vinci", "Raphael", "Michelangelo", "Donatello"],
        correct: 2,
      },
      {
        question: "Which revolution began in 1789?",
        options: ["American", "French", "Russian", "Industrial"],
        correct: 1,
      },
      {
        question: "Who was the first Emperor of China?",
        options: ["Qin Shi Huang", "Kublai Khan", "Sun Tzu", "Confucius"],
        correct: 0,
      },
      {
        question: "What ancient city was buried by Mt. Vesuvius?",
        options: ["Rome", "Athens", "Pompeii", "Carthage"],
        correct: 2,
      },
      {
        question: "Who wrote the Declaration of Independence?",
        options: ["Washington", "Franklin", "Jefferson", "Adams"],
        correct: 2,
      },
    ],
  },
  geography: {
    name: "Geography",
    icon: "🌍",
    questions: [
      {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correct: 2,
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3,
      },
      {
        question: "Which country has the largest population?",
        options: ["India", "USA", "China", "Indonesia"],
        correct: 2,
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 1,
      },
      {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correct: 1,
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2,
      },
      {
        question: "Which mountain is the tallest in the world?",
        options: ["K2", "Kilimanjaro", "Everest", "Denali"],
        correct: 2,
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1,
      },
      {
        question: "Which river flows through London?",
        options: ["Seine", "Rhine", "Thames", "Danube"],
        correct: 2,
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correct: 2,
      },
      {
        question: "Which ocean is the smallest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 2,
      },
      {
        question: "What country has the most islands?",
        options: ["Indonesia", "Philippines", "Sweden", "Japan"],
        correct: 2,
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Arabian", "Antarctic", "Gobi"],
        correct: 2,
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: 2,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Korea", "Japan", "Thailand"],
        correct: 2,
      },
    ],
  },
  arts: {
    name: "Arts & Literature",
    icon: "🎨",
    questions: [
      {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
        correct: 2,
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Dickens", "Shakespeare", "Austen", "Hemingway"],
        correct: 1,
      },
      {
        question: "What art movement was Salvador Dalí associated with?",
        options: ["Cubism", "Impressionism", "Surrealism", "Realism"],
        correct: 2,
      },
      {
        question: "Who wrote '1984'?",
        options: ["Huxley", "Orwell", "Bradbury", "Wells"],
        correct: 1,
      },
      {
        question: "Which artist cut off his own ear?",
        options: ["Monet", "Van Gogh", "Picasso", "Rembrandt"],
        correct: 1,
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Brontë", "Austen", "Shelley", "Eliot"],
        correct: 1,
      },
      {
        question:
          "What is the name of the famous ceiling painted by Michelangelo?",
        options: ["Last Supper", "Sistine Chapel", "Creation", "David"],
        correct: 1,
      },
      {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Hemingway", "Fitzgerald", "Steinbeck", "Faulkner"],
        correct: 1,
      },
      {
        question: "Which artist painted 'The Starry Night'?",
        options: ["Monet", "Van Gogh", "Renoir", "Cézanne"],
        correct: 1,
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: [
          "Harper Lee",
          "Mark Twain",
          "John Steinbeck",
          "Ernest Hemingway",
        ],
        correct: 0,
      },
      {
        question: "What movement did Claude Monet help start?",
        options: ["Cubism", "Impressionism", "Surrealism", "Expressionism"],
        correct: 1,
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Virgil", "Homer", "Sophocles", "Plato"],
        correct: 1,
      },
      {
        question: "Which sculptor created 'The Thinker'?",
        options: ["Rodin", "Donatello", "Bernini", "Michelangelo"],
        correct: 0,
      },
      {
        question: "Who wrote 'Moby Dick'?",
        options: ["Twain", "Melville", "Hawthorne", "Poe"],
        correct: 1,
      },
      {
        question: "What art style is Picasso most famous for?",
        options: ["Impressionism", "Cubism", "Surrealism", "Realism"],
        correct: 1,
      },
    ],
  },
  technology: {
    name: "Technology",
    icon: "💻",
    questions: [
      {
        question:
          "What company developed the first commercially successful GUI?",
        options: ["Microsoft", "Apple", "IBM", "Xerox"],
        correct: 1,
      },
      {
        question: "What does 'HTTP' stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Tech Transfer Protocol",
          "Hyperlink Text Protocol",
          "Home Tool Transfer Protocol",
        ],
        correct: 0,
      },
      {
        question: "Who is considered the father of computers?",
        options: ["Bill Gates", "Charles Babbage", "Alan Turing", "Steve Jobs"],
        correct: 1,
      },
      {
        question: "What year was the iPhone first released?",
        options: ["2005", "2006", "2007", "2008"],
        correct: 2,
      },
      {
        question: "What programming language was created by James Gosling?",
        options: ["Python", "C++", "Java", "JavaScript"],
        correct: 2,
      },
      {
        question: "What does 'CPU' stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Program Utility",
          "Core Processing Unit",
        ],
        correct: 0,
      },
      {
        question: "Who founded Microsoft?",
        options: [
          "Steve Jobs",
          "Bill Gates & Paul Allen",
          "Mark Zuckerberg",
          "Larry Page",
        ],
        correct: 1,
      },
      {
        question: "What year was Google founded?",
        options: ["1996", "1998", "2000", "2002"],
        correct: 1,
      },
      {
        question: "What does 'AI' stand for?",
        options: [
          "Automated Intelligence",
          "Artificial Intelligence",
          "Advanced Integration",
          "Augmented Information",
        ],
        correct: 1,
      },
      {
        question: "Which company created the Android operating system?",
        options: ["Apple", "Google", "Microsoft", "Samsung"],
        correct: 1,
      },
      {
        question: "What is the name of Tesla's CEO?",
        options: ["Jeff Bezos", "Tim Cook", "Elon Musk", "Satya Nadella"],
        correct: 2,
      },
      {
        question: "What does 'RAM' stand for?",
        options: [
          "Random Access Memory",
          "Read Access Memory",
          "Run Access Mode",
          "Rapid Action Memory",
        ],
        correct: 0,
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Vint Cerf"],
        correct: 1,
      },
      {
        question: "What company makes the PlayStation?",
        options: ["Microsoft", "Nintendo", "Sony", "Sega"],
        correct: 2,
      },
      {
        question: "What was the first widely-used web browser?",
        options: [
          "Chrome",
          "Firefox",
          "Netscape Navigator",
          "Internet Explorer",
        ],
        correct: 2,
      },
    ],
  },
  entertainment: {
    name: "Entertainment",
    icon: "🎬",
    questions: [
      {
        question: "What movie features the quote 'May the Force be with you'?",
        options: [
          "Star Trek",
          "Star Wars",
          "Guardians of the Galaxy",
          "Interstellar",
        ],
        correct: 1,
      },
      {
        question: "Who played Iron Man in the Marvel movies?",
        options: [
          "Chris Evans",
          "Chris Hemsworth",
          "Robert Downey Jr.",
          "Mark Ruffalo",
        ],
        correct: 2,
      },
      {
        question: "What is the highest-grossing film of all time?",
        options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars"],
        correct: 1,
      },
      {
        question: "Who directed 'Jurassic Park'?",
        options: [
          "James Cameron",
          "Steven Spielberg",
          "George Lucas",
          "Christopher Nolan",
        ],
        correct: 1,
      },
      {
        question: "What band was Freddie Mercury the lead singer of?",
        options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
        correct: 2,
      },
      {
        question: "What streaming service produces 'Stranger Things'?",
        options: ["Amazon Prime", "Hulu", "Netflix", "Disney+"],
        correct: 2,
      },
      {
        question: "Who wrote the Harry Potter book series?",
        options: [
          "Stephen King",
          "J.R.R. Tolkien",
          "J.K. Rowling",
          "George R.R. Martin",
        ],
        correct: 2,
      },
      {
        question: "What is the name of Batman's butler?",
        options: ["Jarvis", "Alfred", "Watson", "Jeeves"],
        correct: 1,
      },
      {
        question: "Which movie won the first Academy Award for Best Picture?",
        options: ["Wings", "The Jazz Singer", "Sunrise", "Ben-Hur"],
        correct: 0,
      },
      {
        question: "What TV show features dragons and the Iron Throne?",
        options: [
          "The Witcher",
          "Game of Thrones",
          "Lord of the Rings",
          "Vikings",
        ],
        correct: 1,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Prince", "Michael Jackson", "Madonna"],
        correct: 2,
      },
      {
        question: "What animated movie features a fish named Nemo?",
        options: ["Shark Tale", "Finding Nemo", "The Little Mermaid", "Moana"],
        correct: 1,
      },
      {
        question: "Which superhero is from Wakanda?",
        options: ["Spider-Man", "Black Panther", "Thor", "Captain America"],
        correct: 1,
      },
      {
        question: "What is the name of the hobbit in Lord of the Rings?",
        options: ["Gandalf", "Aragorn", "Frodo", "Legolas"],
        correct: 2,
      },
      {
        question: "Which movie features the song 'Let It Go'?",
        options: ["Moana", "Tangled", "Frozen", "Brave"],
        correct: 2,
      },
    ],
  },
};

let selectedCategory = "all";
let selectedQuestionCount = 10;
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answered = false;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateQuestions() {
  let pool = [];

  if (selectedCategory === "all") {
    Object.keys(questionBank).forEach((cat) => {
      pool = pool.concat(
        questionBank[cat].questions.map((q) => ({
          ...q,
          category: questionBank[cat].name,
          icon: questionBank[cat].icon,
        }))
      );
    });
  } else {
    pool = questionBank[selectedCategory].questions.map((q) => ({
      ...q,
      category: questionBank[selectedCategory].name,
      icon: questionBank[selectedCategory].icon,
    }));
  }

  const shuffled = shuffleArray(pool);
  currentQuestions = shuffled.slice(
    0,
    Math.min(selectedQuestionCount, shuffled.length)
  );

  currentQuestions = currentQuestions.map((q) => {
    const optionIndices = [0, 1, 2, 3];
    const shuffledIndices = shuffleArray(optionIndices);
    const newCorrect = shuffledIndices.indexOf(q.correct);
    const newOptions = shuffledIndices.map((i) => q.options[i]);
    return {
      ...q,
      options: newOptions,
      correct: newCorrect,
    };
  });
}

function initCategories() {
  const grid = document.getElementById("category-grid");

  let html = `
      <button onclick="setCategory('all')" class="cred-select-option active rounded-xl p-3 text-left">
          <div class="flex items-center gap-2">
              <span class="category-icon" aria-hidden="true">🎯</span>
              <span class="text-white/70 text-xs font-semibold">All</span>
          </div>
      </button>
  `;

  Object.keys(questionBank).forEach((key) => {
    const cat = questionBank[key];
    html += `
          <button onclick="setCategory('${key}')" class="cred-select-option rounded-xl p-3 text-left">
              <div class="flex items-center gap-2">
                  <span class="category-icon" aria-hidden="true">${cat.icon}</span>
                  <span class="text-white/70 text-xs font-semibold">${cat.name}</span>
              </div>
          </button>
      `;
  });

  grid.innerHTML = html;
  updateQuizInfo();
}

function setCategory(category) {
  selectedCategory = category;
  document
    .querySelectorAll("#category-grid .cred-select-option")
    .forEach((btn) => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");
  updateQuizInfo();
}

function setQuestionCount(count) {
  selectedQuestionCount = count;
  document
    .querySelectorAll("#question-count-grid .cred-select-option")
    .forEach((btn) => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");
  document.getElementById("selected-count").textContent = count;
  updateQuizInfo();
}

function updateQuizInfo() {
  let available = 0;
  let icon = "🎯";
  let name = "All Categories";

  if (selectedCategory === "all") {
    Object.keys(questionBank).forEach((cat) => {
      available += questionBank[cat].questions.length;
    });
  } else {
    available = questionBank[selectedCategory].questions.length;
    icon = questionBank[selectedCategory].icon;
    name = questionBank[selectedCategory].name;
  }

  document.getElementById("selected-category-icon").textContent = icon;
  document.getElementById("selected-category-name").textContent = name;
  document.getElementById(
    "available-questions"
  ).textContent = `${available} available`;

  if (selectedQuestionCount > available) {
    selectedQuestionCount = available;
    document.getElementById("selected-count").textContent = available;
  }
}

function startQuiz() {
  generateQuestions();
  currentQuestion = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("start-screen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("fade-out");
    document.getElementById("quiz-screen").classList.remove("hidden");
    document.getElementById("score-display").textContent = "0";
    showQuestion();
  }, 300);
}

function showQuestion() {
  answered = false;
  const question = currentQuestions[currentQuestion];

  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
  document.getElementById("question-counter").textContent = `${
    currentQuestion + 1
  } / ${currentQuestions.length}`;
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${progress}%`;
  progressBar.setAttribute("aria-valuenow", Math.round(progress));
  document.getElementById("question-text").textContent = question.question;
  document.getElementById(
    "category-badge"
  ).textContent = `${question.icon} ${question.category}`;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "cred-option w-full p-4 rounded-2xl text-left";
    button.innerHTML = `
          <span class="flex items-center gap-3">
              <span class="option-letter">${String.fromCharCode(
                65 + index
              )}</span>
              <span class="text-white/70 text-sm font-medium">${option}</span>
          </span>
      `;
    button.onclick = () => selectAnswer(index, button);
    optionsContainer.appendChild(button);
  });

  document.getElementById("next-btn").classList.add("hidden");

  // Focus the first option for keyboard accessibility
  setTimeout(() => {
    const firstOption = optionsContainer.querySelector("button");
    if (firstOption) firstOption.focus();
  }, 350);
}

function selectAnswer(index, button) {
  if (answered) return;
  answered = true;

  const question = currentQuestions[currentQuestion];
  userAnswers[currentQuestion] = index;

  const isCorrect = index === question.correct;
  const announcer = document.getElementById("aria-announcer");
  if (announcer) {
    announcer.textContent = isCorrect
      ? "Correct!"
      : `Incorrect. The correct answer was ${question.options[question.correct]}.`;
  }

  const buttons = document.querySelectorAll(".cred-option");
  buttons.forEach((btn, i) => {
    if (i === question.correct) {
      btn.classList.add("correct");
    } else if (i === index && index !== question.correct) {
      btn.classList.add("wrong");
    }
  });

  if (index === question.correct) {
    score++;
    document.getElementById("score-display").textContent = score;
  }

  document.getElementById("next-btn").classList.remove("hidden");
  document.getElementById("next-btn").textContent =
    currentQuestion === currentQuestions.length - 1 ? "See Results" : "Next";
}

function nextQuestion() {
  if (currentQuestion < currentQuestions.length - 1) {
    currentQuestion++;
    const container = document.getElementById("question-container");
    container.classList.add("fade-out");
    setTimeout(() => {
      container.classList.remove("fade-out");
      container.classList.add("fade-in");
      showQuestion();
    }, 300);
  } else {
    showResults();
  }
}

function showResults() {
  if (currentUser) {
    currentUser.stats.quizzesTaken++;
    currentUser.stats.totalScore += score;
    localStorage.setItem("quizUser", JSON.stringify(currentUser));

    const users = JSON.parse(localStorage.getItem("quizUsers") || "[]");
    const userIndex = users.findIndex((u) => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex] = currentUser;
      localStorage.setItem("quizUsers", JSON.stringify(users));
    }
  }

  document.getElementById("quiz-screen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("fade-out");
    document.getElementById("result-screen").classList.remove("hidden");

    const percentage = (score / currentQuestions.length) * 100;
    document.getElementById("final-score").textContent = score;
    document.getElementById(
      "total-questions"
    ).textContent = `out of ${currentQuestions.length}`;

    setTimeout(() => {
      document
        .getElementById("score-circle")
        .style.setProperty("--score-percent", `${percentage}%`);
    }, 100);

    let message, subtitle;
    if (percentage >= 80) {
      message = "excellent!";
      subtitle = "you're a quiz master";
    } else if (percentage >= 60) {
      message = "great job!";
      subtitle = "well done on the quiz";
    } else if (percentage >= 40) {
      message = "good effort!";
      subtitle = "keep practicing";
    } else {
      message = "keep learning!";
      subtitle = "try again to improve";
    }

    document.getElementById("result-message").textContent = message;
    document.getElementById("result-subtitle").textContent = subtitle;
  }, 300);
}

function restartQuiz() {
  generateQuestions();
  currentQuestion = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("result-screen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("fade-out");
    document.getElementById("score-display").textContent = "0";
    document.getElementById("quiz-screen").classList.remove("hidden");
    document
      .getElementById("score-circle")
      .style.setProperty("--score-percent", "0%");
    showQuestion();
  }, 300);
}

function goHome() {
  document.getElementById("result-screen").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("fade-out");
    document.getElementById("review-screen").classList.add("hidden");
    document
      .getElementById("score-circle")
      .style.setProperty("--score-percent", "0%");
    document.getElementById("start-screen").classList.remove("hidden");
  }, 300);
}

function showAnswers() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("review-screen").classList.remove("hidden");

  const container = document.getElementById("review-container");
  container.innerHTML = "";

  currentQuestions.forEach((q, i) => {
    const isCorrect = userAnswers[i] === q.correct;
    const div = document.createElement("div");
    div.className = `rounded-2xl p-4 border ${
      isCorrect
        ? "bg-green-500/5 border-green-500/20"
        : "bg-red-500/5 border-red-500/20"
    }`;
    div.innerHTML = `
          <div class="flex items-center gap-2 mb-2">
              <span class="cred-label">${q.icon} ${q.category}</span>
          </div>
          <div class="flex items-start gap-3 mb-3">
              <span class="w-5 h-5 rounded-full ${
                isCorrect
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              } flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  ${isCorrect ? "✓" : "✗"}
              </span>
              <p class="text-white/80 text-sm font-medium">${q.question}</p>
          </div>
          <div class="ml-8 space-y-1">
              <p class="text-xs text-white/40">Your answer: <span class="${
                isCorrect ? "text-green-400" : "text-red-400"
              }">${q.options[userAnswers[i]] || "Not answered"}</span></p>
              ${
                !isCorrect
                  ? `<p class="text-xs text-white/40">Correct: <span class="text-green-400">${
                      q.options[q.correct]
                    }</span></p>`
                  : ""
              }
          </div>
      `;
    container.appendChild(div);
  });
}

function backToResults() {
  document.getElementById("review-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
}

document.addEventListener("keydown", (e) => {
  const quizScreen = document.getElementById("quiz-screen");
  if (!quizScreen || quizScreen.classList.contains("hidden")) return;

  if (!answered) {
    const key = e.key.toLowerCase();
    const options = ["a", "b", "c", "d", "1", "2", "3", "4"];
    if (options.includes(key)) {
      e.preventDefault();
      let index;
      if (key >= "1" && key <= "4") {
        index = parseInt(key) - 1;
      } else {
        index = key.charCodeAt(0) - 97;
      }
      const buttons = document.querySelectorAll(".cred-option");
      if (buttons[index]) {
        selectAnswer(index, buttons[index]);
      }
    }
  } else if (e.key === "Enter") {
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn && !nextBtn.classList.contains("hidden")) {
      e.preventDefault();
      nextQuestion();
    }
  }
});

document.addEventListener("DOMContentLoaded", checkAuth);
