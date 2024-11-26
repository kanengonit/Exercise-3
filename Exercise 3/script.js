$(document).ready(function () {
  console.log("JavasaScript is running");
  const states = {
    neutral: "images/neutral.png",
    happy: "images/happy.png",
    sad: "images/sad.png",
    angry: "images/angry.png",
    excited: "images/excited.png",
  };

  const $character = $("#character");

  // Neutral state (default)
  $character.on("mouseleave", function () {
    console.log("Mouse left!"); // Debugging
    $character.attr("src", states.neutral);
  });

  // Happy state
  $character.on("click", function () {
    console.log("Clicked!"); // Debugging
    $character.attr("src", states.happy);
  });

  // Sad state
  $character.on("dblclick", function () {
    console.log("Double-clicked!"); // Debugging
    $character.attr("src", states.sad);
  });

  // Angry state
  $character.on("contextmenu", function (event) {
    event.preventDefault();
    console.log("Right-clicked!"); // Debugging
    $character.attr("src", states.angry);
  });

  // Excited state
  $character.on("mousemove", function () {
    console.log("Mouse moved!"); // Debugging
    $character.attr("src", states.excited);
  });
});