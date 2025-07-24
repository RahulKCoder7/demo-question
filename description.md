> **Note:**  
> - The description should be clear and easy to understand.  
> - If any `test-id` or class names are used in the test cases, make sure to mention them in the description.

You have to build a simple **Dark Mode Toggle** component in React. The goal is to allow users to switch between **light mode** and **dark mode** by toggling a checkbox. The theme should visually update the **background color and text color** of the entire page.


### Things To Do

1. **State Management**
   - Add a `useState` hook to keep track of whether the app is in dark mode or light mode.

2. **Toggle Function**
   - Implement the `toggleTheme` function to update the state when the checkbox is toggled.

3. **Dynamic Class Application**
   - Apply the class `dark-mode` or `light-mode` to the **parent `<div>`** based on the value of state variable.

5. **Text Label**
   - Update the `<span className="mode-text">` to show `"Dark Mode"` or `"Light Mode"` depending on the current theme.


###  Important Note

- Apply the class **`dark-mode`** to the parent `<div>` when dark mode is active.  
- Apply the class **`light-mode`** when light mode is active.  


