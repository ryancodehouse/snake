"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./snake.module.css";
import { useInterval } from "../Helpers/useInterval";
import { SNAKE_START, APPLE_START, SPEED, DIRECTIONS } from "../constants";

const Snake = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const CANVAS_SIZE = isDesktop ? 500 : 200;
  const SCALE = isDesktop ? 50 : 20;
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 950);
    window?.addEventListener(
      "keydown",
      function (e) {
        if (
          ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
            e.code
          ) > -1
        ) {
          e.preventDefault();
        }
      },
      false
    );
  }, [isDesktop]);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) => {
    if (gameOver) {
      startGame();
    }
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
  };

  const mobileMoveSnake = (e) => {
    if (gameOver) {
      startGame();
    }
    e.target.dataset.id >= 37 &&
      e.target.dataset.id <= 40 &&
      setDir(DIRECTIONS[e.target.dataset.id]);
  };

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "#35b435";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "#C7372F";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  if (snake.length - 2 > highScore) {
    setHighScore(snake.length - 2);
  }

  return (
    <div>
      <h1 className={styles.heading}>Snake</h1>
      <div
        className={styles.snake}
        role="button"
        tabIndex="1"
        onKeyDown={(e) => moveSnake(e)}
      >
        <div className={styles.canvasContainer}>
          <canvas
            style={{ border: "2px solid #3d6a7f" }}
            ref={canvasRef}
            width={`${CANVAS_SIZE}px`}
            height={`${CANVAS_SIZE}px`}
            autoFocus={true}
          />
        </div>
        <div className={styles.upperContent}>
          <h2>Score: {snake.length - 2}</h2>
          <h2>High Score: {highScore}</h2>
          {isDesktop && <div>Use arrow keys to control the snake</div>}
          {gameOver && <div>GAME OVER!</div>}
          {gameOver && isDesktop && <div>Press any key to continue</div>}
          <button onClick={startGame}>Start Game</button>
        </div>
        <div className={styles.controls}>
          <div>
            <button onClick={mobileMoveSnake} data-id={37}>
              Left
            </button>
          </div>
          <div className={styles.verticleControls}>
            <button onClick={mobileMoveSnake} data-id={38}>
              Up
            </button>
            <button onClick={mobileMoveSnake} data-id={40}>
              Down
            </button>
          </div>
          <div>
            <button onClick={mobileMoveSnake} data-id={39}>
              Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snake;
