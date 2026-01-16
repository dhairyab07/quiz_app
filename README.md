# 🧠 Quiz App — CRED Style

A stunning, minimal Quiz web application featuring Apple's liquid glass effects and CRED's luxurious dark UI design. Built with vanilla HTML, CSS, and JavaScript.

![Quiz App Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwind-css&logoColor=white)

---

## 🌐 Live Demo

**Project Page URL:** [https://dhairyab07.github.io/quiz_app](https://dhairyab07.github.io/quiz_app)

---

## 📖 About The Project

This Quiz App provides an engaging trivia experience with a premium, fintech-inspired design. Users can test their knowledge across multiple categories while enjoying smooth animations and a beautiful glassmorphism UI.

### How It Works

1. **Start Screen** — User is presented with a "Start" button along with quiz details including category selection and number of questions
2. **Quiz Cards** — Questions are presented as elegant cards with answer buttons
3. **Instant Feedback** — When an answer is selected:
   - ✅ Correct answers turn **green**
   - ❌ Wrong answers turn **red**
   - The correct answer is always highlighted
4. **Live Scoring** — Score increments with each correct answer
5. **Results Screen** — Final score displayed with animated circular progress and option to review all answers
6. **Timer (Optional)** — 60-second countdown per question; unanswered questions skip automatically with -1 penalty

---

## ✨ Features

### 🎮 Quiz Functionality

- **6 Categories**: Science, History, Geography, Arts & Literature, Technology, Entertainment
- **90+ Unique Questions** with shuffled answers each playthrough
- **Configurable Quiz Length**: 5, 10, 15, or 20 questions
- **Real-time Score Tracking**
- **Answer Review** at the end of each quiz
- **Fisher-Yates Shuffle Algorithm** for true randomization

### 🔐 Authentication System

- **Sign Up** with Name, Email, Password, and Occupation
- **Login** with email and password
- **Logout** functionality
- **Persistent Sessions** using localStorage
- **User Stats Tracking** (quizzes taken, total score)

### 🎨 Design

- **Apple Liquid Glass** — Realistic animated glass orbs with shimmer effects
- **CRED UI Theme** — Dark luxurious aesthetic with gold accents
- **Glassmorphism Cards** — Translucent cards with backdrop blur
- **Smooth Animations** — Fade transitions, hover effects, progress animations
- **Responsive Design** — Works on desktop and mobile devices

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/dhairyab07/quiz_app.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd quiz_app
   ```

3. **Open in browser**

   Simply open the `index.html` file in your web browser:

   ```bash
   # On macOS
   open index.html

   # On Windows
   start index.html

   # On Linux
   xdg-open index.html
   ```

   Or drag and drop the file into your browser window.

### Run with Live Server (Optional)

If you have VS Code with Live Server extension:

1. Open the project folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📁 Project Structure

```
quiz_app/
├── index.html      # Main HTML file
├── script .js      # Main JavaScript file
├── style.css       # Main CSS file
└── README.md       # Project documentation
```

---

## 🎯 Quiz Categories

| Category          | Icon | Questions |
| ----------------- | ---- | --------- |
| Science           | 🔬   | 15        |
| History           | 📜   | 15        |
| Geography         | 🌍   | 15        |
| Arts & Literature | 🎨   | 15        |
| Technology        | 💻   | 15        |
| Entertainment     | 🎬   | 15        |

---

## 🛠️ Built With

- **HTML5** — Structure
- **Tailwind CSS** — Utility-first styling (via CDN)
- **Vanilla JavaScript** — Quiz logic and interactions
- **localStorage** — User authentication persistence
- **Google Fonts** — Inter font family

---

## 🔮 Future Enhancements

- [ ] Add timer functionality (60 seconds per question)
- [ ] Leaderboard system
- [ ] More question categories
- [ ] Difficulty levels (Easy, Medium, Hard)
- [ ] Sound effects and haptic feedback
- [ ] Dark/Light theme toggle
- [ ] Share results on social media

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

Made with ❤️ and ☕

---

## 🙏 Acknowledgments

- Design inspired by [CRED](https://cred.club) — India's premier fintech app
- Liquid glass effect inspired by Apple's iOS design language
- Question content curated for educational purposes

---

**⭐ Star this repo if you found it helpful!**
