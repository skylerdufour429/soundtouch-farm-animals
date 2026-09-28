# 🐄 SoundTouch Farm Animals Web App

A simple interactive farm animal sound app built with HTML, CSS, and JavaScript.  
Designed to run in **GitHub Codespaces** and deploy with **GitHub Pages**.

## 🐾 Animals Included

- 🐑 Sheep
- 🦆 Duck
- 🐴 Horse
- 🐸 Frog
- 🐶 Dog
- 🐷 Pig
- 🐮 Cow
- 🐔 Chicken
- 🐐 Goat
- 🐦 Bird
- 🫏 Donkey
- 🐱 Cat

## 🚀 Run in GitHub Codespaces

1. Open the repository on GitHub.
2. Click **Code → Codespaces → Create codespace**.
3. Open the terminal.
4. Start a local server:

```bash
python3 -m http.server 8000
```

5. Open the forwarded port in your browser.

## 📁 Project Structure

```
soundtouch-farm-animals/
│
├── index.html
├── style.css
├── script.js
│
└── sounds/
    ├── sheep.mp3
    ├── duck.mp3
    ├── horse.mp3
    ├── frog.mp3
    ├── dog.mp3
    ├── pig.mp3
    ├── cow.mp3
    ├── chicken.mp3
    ├── goat.mp3
    ├── bird.mp3
    ├── donkey.mp3
    └── cat.mp3
```

## 🌐 Deploy with GitHub Pages

1. Go to:

```
Repository → Settings → Pages
```

2. Select:

```
Deploy from branch
```

3. Choose:

```
main branch / root folder
```

4. Save.

Your app will be available at:

```
https://YOUR-USERNAME.github.io/soundtouch-farm-animals/
```

## 🖥️ Example Interface

```html
<button onclick="playSound('sheep')">🐑 Sheep</button>
<button onclick="playSound('duck')">🦆 Duck</button>
<button onclick="playSound('horse')">🐴 Horse</button>
<button onclick="playSound('frog')">🐸 Frog</button>
<button onclick="playSound('dog')">🐶 Dog</button>
<button onclick="playSound('pig')">🐷 Pig</button>
<button onclick="playSound('cow')">🐮 Cow</button>
<button onclick="playSound('chicken')">🐔 Chicken</button>
<button onclick="playSound('goat')">🐐 Goat</button>
<button onclick="playSound('bird')">🐦 Bird</button>
<button onclick="playSound('donkey')">🫏 Donkey</button>
<button onclick="playSound('cat')">🐱 Cat</button>
```

## 🔊 JavaScript Sound Player

```javascript
function playSound(animal) {
    const audio = new Audio(`sounds/${animal}.mp3`);
    audio.play();
}
```

## 🎵 Features

✅ Touch-friendly animal buttons  
✅ Farm animal sounds  
✅ Works on phones and tablets  
✅ GitHub Codespaces compatible  
✅ GitHub Pages hosting  
