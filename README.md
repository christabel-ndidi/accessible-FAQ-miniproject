# Accessible FAQ Component

A simple, accessible FAQ (accordion) component built with HTML, CSS, and JavaScript.  
This project focuses on practical web accessibility principles and interactive UI behavior.


## Project Overview

This project demonstrates how to build an interactive FAQ section while maintaining accessibility for all users, including keyboard users and screen reader users.

Each question can be expanded or collapsed, and the state is properly communicated using ARIA attributes.


## Features

- Semantic HTML structure
- Keyboard-friendly interaction (button-based controls)
- Accessible state management using ARIA
  - `aria-expanded`
  - `aria-controls`
- Dynamic content toggling using JavaScript
- Clean and responsive UI design
- Lightweight and framework-free implementation

## Accessibility Focus

This project was built with accessibility in mind:

- Buttons are used instead of clickable divs for better semantics
- `aria-expanded` communicates whether content is open or closed
- `aria-controls` links each button to its corresponding content
- Content visibility is managed using the `hidden` attribute
- Interaction is fully keyboard accessible via tab and enter/space keys

## How It Works

1. Each FAQ item consists of a button and a hidden answer section.
2. Clicking a button triggers a JavaScript event listener.
3. The script toggles:
   - The visibility of the answer (`hidden` attribute)
   - The accessibility state (`aria-expanded`)
4. Screen readers can detect and announce state changes.


## Technologies Used

- HTML5 (Semantic Structure)
- CSS3 (Basic Styling & Layout)
- JavaScript (DOM Manipulation & Event Handling)

## Purpose

This project was built as part of my self-learning journey in:
- Frontend development
- UI interaction design
- Web accessibility fundamentals (WCAG awareness)

It demonstrates an understanding of how dynamic UI components should behave for both visual users and assistive technology users.



