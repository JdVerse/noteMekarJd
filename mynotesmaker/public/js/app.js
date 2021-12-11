console.log("We are on NoteMaker");
showNotes();
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
if (addTxt.value == "" || addTitle.value=="") {
  alert("It seems like you haven't added something in title or notesArea");
}
else
{
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let thisObj=
  {
    title:addTitle.value,
    txt:addTxt.value
  }
  notesObj.push(thisObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
}
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index     ) {
    html += `<div  class="card noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.txt}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn-primary btn my-3">Delete Note</button>
        </div>
      </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "Sorry nothing to show you";
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let searchBox=document.getElementById("searchBox");
searchBox.addEventListener("input",function(){
    let inputVal=searchBox.value.toLowerCase(); 
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerHTML;
        if(cardTxt.includes(inputVal))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    })
})
