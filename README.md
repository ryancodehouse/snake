# Snake Game

#### Video Demo: https://youtu.be/GyL_7dMIgbQ

#### Description:

This project is a web-based version of the classic Snake game, built using JavaScript, React, Next.js, and CSS. The game allows players to control a snake that grows in length as it eats food items. The game ends when the snake runs into the walls or its own body.

## Project Overview

The Snake game provides a nostalgic experience with a modern implementation. It features:

- **Responsive Controls**: The game can be controlled using arrow keys on desktops and on-screen buttons for mobile users. The controls are designed to be intuitive and responsive, ensuring that players can easily maneuver the snake regardless of the device they are using.
- **Score Tracking**: The game tracks the player's current score and the highest score achieved during the session. This feature adds a competitive element, encouraging players to beat their own records and strive for higher scores.
- **Responsive Design**: The layout and canvas size adjust dynamically based on the device's screen width. This ensures that the game provides a seamless experience on both desktop and mobile devices, maintaining usability and aesthetics across different screen sizes.
- **Smooth Animations**: The game features smooth animations and precise collision detection, providing an engaging and enjoyable user experience. The animations are designed to be fluid and responsive, enhancing the overall gameplay.

## Files

- `src/Snake/index.js`: Contains the main logic and components for the Snake game. It manages the state of the snake, apple, direction, speed, and game status. It also includes the game loop, collision detection, and event handlers for user input. The use of React hooks like `useState` and `useEffect` allows for efficient state management and reactivity.
- `src/app/page.js`: Serves as the main entry point for the application, importing and rendering the Snake game component from `src/Snake/index.js`.
- `src/Snake/snake.module.css`: Provides the styling for the game, ensuring a visually appealing and responsive layout. It includes styles for the snake, canvas, controls, and overall game layout. The CSS is modular, meaning that styles are scoped locally to prevent conflicts with other styles in the application.
- `src/constants.js`: Defines constants for the initial game state, speed, and direction mappings for the snake's movement. This helps in maintaining consistency and readability in the code. Using constants allows for easy adjustments to the game's parameters.
- `src/Helpers/useInterval.js`: A custom hook to handle the game loop intervals. This hook allows the game to update the snake's position and check for collisions at a consistent rate, ensuring smooth gameplay. The hook abstracts the interval logic, making the game loop implementation cleaner and more modular.

## Design Decisions

- **Technology Stack**: React was chosen for its component-based architecture and state management capabilities. Next.js was used for its server-side rendering and routing features, enhancing the performance and scalability of the application. CSS modules were utilized to scope styles locally and avoid conflicts. This combination of technologies allows for a modern, efficient, and maintainable codebase.
- **Responsive Design**: The decision to make the game responsive was driven by the need to provide a good user experience across different devices. The game adjusts its canvas size and control options based on the screen width, ensuring that the gameplay is optimized for both large desktop monitors and small mobile screens.
- **User Controls**: To accommodate both desktop and mobile users, the game includes keyboard controls for desktops and on-screen buttons for mobile devices. The `moveSnake` and `mobileMoveSnake` functions handle input from different devices, ensuring smooth gameplay. This design choice makes the game accessible to a wider audience.
- **Game Loop and State Management**: The game loop is managed using the custom `useInterval` hook, which updates the snake's position and checks for collisions at regular intervals. State management is handled using React's `useState` and `useEffect` hooks, ensuring a reactive and efficient update cycle. The modular approach to state management and game logic improves code maintainability and readability.

## Getting Started

To run the game locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/ryancodehouse/snake.git

   ```

2. cd snake

3. npm install

4. npm run dev

5. Open your browser and go to http://localhost:3000 to play the game.
