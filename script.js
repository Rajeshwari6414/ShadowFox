function vote(player) {
  document.getElementById("voteResult").innerText =
    "You voted for " + player + " 💛";
}

function addMessage() {
  let name = document.getElementById("username").value;
  let msg = document.getElementById("message").value;

  if (name === "" || msg === "") {
    alert("Please enter name and message");
    return;
  }

  let li = document.createElement("li");
  li.innerText = name + ": " + msg;
  document.getElementById("messages").appendChild(li);

  document.getElementById("username").value = "";
  document.getElementById("message").value = "";
}

