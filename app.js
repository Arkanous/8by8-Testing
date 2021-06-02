"use strict";

(function() {

  /**
   * A function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);

  /**
   * The function adds an event listener that will be called when the user
   * submits the pokemon of their choice.
   */
  function init() {
    let challengeButton = id("challenege");
    challengeButton.addEventListener("click", changeScreen);
  }

  fucntion changeScreen() {

    let changeScreen = id("page1");
    changeScreen.display = true;
  }

})();