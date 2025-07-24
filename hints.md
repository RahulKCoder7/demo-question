**1. Understand State Management**

You’ll need to manage the theme state (light/dark) using React's `useState` hook.

```js
const [isDarkMode, setIsDarkMode] = useState(false);
```

**2. Toggle Theme on User Interaction**

When the toggle (checkbox) is clicked, the theme should switch. Use a function to flip the `isDarkMode` boolean.

```js
const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
};
```

**3. Apply Dynamic CSS Classes**

Use the value of `isDarkMode` to apply a CSS class to the root element. This lets you style the UI differently for dark and light modes.

```js
<div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
```

**4. Create the Toggle Switch**

Use an HTML checkbox styled with CSS to act as a toggle switch. The `checked` prop should be bound to `isDarkMode`.

```jsx
<input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
```

**5. Update Mode Label Dynamically**

Display text that updates based on the current mode (e.g., "Dark Mode" or "Light Mode").

```js
<span className="mode-text">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
```

**6. Style It with CSS**

Create `.dark-mode` and `.light-mode` classes in your CSS file (`styles.css`) to visually distinguish the themes.

```css
/* Example */
.dark-mode {
  background-color: #121212;
  color: white;
}

.light-mode {
  background-color: #ffffff;
  color: black;
}
```

