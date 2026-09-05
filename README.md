# 🏏 React Cricket Counter

A simple and interactive **Cricket Counter App** built with React and Vite.

This project was created to practice important React concepts such as **useState, event handling, and conditional rendering**.

---

## 📸 Project Preview

### 🏏 Counter App

![Cricket Counter App](<img width="732" height="616" alt="image" src="https://github.com/user-attachments/assets/6b9ca647-9688-48a0-83ed-c27b4d622353" />
)

### 🏆 MS Dhoni Milestone

![MS Dhoni](<img width="677" height="607" alt="image" src="https://github.com/user-attachments/assets/36231964-f5a1-4133-94bd-14898b605177" />
)

### 👑 Virat Kohli Milestone

![Virat Kohli](<img width="682" height="627" alt="image" src="https://github.com/user-attachments/assets/9910d1c9-7d11-4fc1-bba0-0148d9f91cc0" />
)

---

## 🚀 Features

- ➕ Increase the counter
- ➖ Decrease the counter
- 🔄 Reset the counter
- 🏏 Cricket-themed counter
- 🏆 Special messages for cricket milestones
- ✨ Button hover effects
- 👆 Button press (`:active`) animation
- 🎨 Clean and simple user interface

---

## 🏏 Cricket Milestones

| Number | Player |
|--------|--------|
| 7 | 🏆 MS Dhoni |
| 18 | 👑 Virat Kohli |
| 45 | 🔥 Rohit Sharma |
| 10 | ⭐ Sachin Tendulkar |

When the counter reaches one of these numbers, a special message is displayed.

For example:

```jsx
{count === 7 && (
  <p>🎉 Congratulations! You reached 7 — MS Dhoni!</p>
)}
