function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);

  window.location = "quiz_game_page.html";
}

function backhome() {
  window.location = "index.html";
}
function submit() {
  console.log("Hi");
  const input = document.getElementById("player1_name_input").value;
  const input2 = document.getElementById("player2_name_input").value;
  const button = document.getElementById("myButton");
  if (input != "" && input2 != "") {
    console.log("Hi");
    button.disabled = false;
  }
  console.log(input);
  console.log(button.disabled);
}
