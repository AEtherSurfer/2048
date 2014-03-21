// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(1, 16, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
