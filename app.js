const inputText = document.querySelector(".inputText");
const inputAdd = document.querySelector(".inputAdd");
const newToDoArea = document.querySelector(".newToDoArea");



function addEl() {
  let newToDo = inputText.value;
  newToDoArea.innerHTML += `<li class="newEl">
  <span class="newElCheck" onclick=doneEl(this.closest(".newEl"))>&#128077;</span>
  <span class="newElText ">${newToDo}</span>
  <span class="newElClose" onclick=remove(this.closest(".newEl"))>&#x274C; </span>
</li>`;
  inputText.value = "";
  if (newToDoArea.innerHTML) {
    let noElText = document.getElementById("noElText");
    noElText.style.visibility = "hidden";
  }
}

function doneEl(el) {
    let element = el;
    if (!element.classList.contains("light")) {
        element.classList.add("light");
    } else {
        element.classList.remove("light");
    }
}


function remove(el) {
  let element = el;
  element.remove();
  if (!newToDoArea.innerHTML) {
    let noElText = document.getElementById("noElText")
    noElText.style.visibility = "visible"
}
}

inputAdd.addEventListener("click", addEl);
inputText.addEventListener("keyup", function(e){
    if (e.key === 'Enter' || e.keyCode === 13) {
        addEl()
     }
});


//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// const quoteArea = document.getElementById("quoteArea")
// const quoteText = document.getElementById("quoteText")
// const quoteAuthor = document.getElementById("quoteAuthor")

// async function getQuote() {
//   const response = await fetch(
//     `https://zenquotes.io/api/random`
//   );
//   console.log(response);
//   if (!response.ok) throw new Error("something went wrong!");
//   const quote = await response.json();
//   console.log(quote);
// }

// window.onload = getQuote();