# 🖥️ Ibrahim MEJJADI: Portfolio

A dark, terminal-themed personal portfolio built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, just raw code and a gold-on-black aesthetic that matches the "student turning into engineer" story.

---

## 👀 How to Open It

**Option 1: Just visit it (fastest):**
```
https://ibrahimmejjadi.github.io/
```
No download, no setup — it's live.

**Option 2: Run it locally:**
```bash
git clone https://github.com/ibrahimmejjadi/ibrahimmejjadi.github.io.git
cd ibrahimmejjadi.github.io
open index.html
```
No build step, no `npm install`. Just open the file directly — double-click it, or use the VS Code "Live Server" extension for auto-reload while editing.

---

## 🧭 Sections

```
Home        → intro, tagline, live blinking cursor animation
Projects    → 4 cards: Danger Maze, Food Collector, File Organizer, Julia Chatbot
Skills      → grid of core competencies
Contact     → GitHub, LinkedIn, Email — one click away
```

Navigation is sticky at the top and smooth-scrolls to each section — click `PROJECTS` in the nav bar and watch the page glide down instead of jump.

---

## 🎨 Design System

| Element | Value | Why |
|---|---|---|
| Background | `#080810` | Near-black, easier on the eyes than pure black, keeps the gold accent readable |
| Accent | `#c9a84c` | Gold — used sparingly (tag lines, borders, hover states) so it stays an *accent*, not a dominant color |
| Font | `Courier New` (monospace) | Reinforces the "terminal / infrastructure student" identity |
| Animations | `fadeUp`, `blink`, `slideIn` | Subtle entrance motion — sections fade up on load, the cursor blinks like a real terminal, the divider line draws itself in |

---

## 🛠️ Built With

- HTML5: semantic structure
- CSS3: Grid layout for project/skill cards, custom `@keyframes` animations, no framework
- Vanilla JavaScript: nav-to-section smooth scrolling via `scrollIntoView()`
- Font Awesome: icon set for GitHub / LinkedIn / Email contact links

---

## 👤 Author

**Ibrahim Mejjadi**: Digital Infrastructure Student, CMC Tangier
🔗 LinkedIn: [linkedin.com/in/ibrahimmejjadi](https://linkedin.com/in/ibrahimmejjadi)
📧 Email: ibrahim.mejjadi@gmail.com
