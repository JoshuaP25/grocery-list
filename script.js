
function addItem() {
    let input = document.getElementById("input").value;
    let myList = document.getElementById("myList");

    let item = document.createElement("li");
    let myInput = document.createTextNode(input);
    item.appendChild(myInput);

    if(input === '') {
        alert("Enter item!");
    }
    else {
        myList.appendChild(item);
        document.getElementById("input").value = "";
    }
    
    let span = document.createElement("span");
    let i = document.createElement("i");
    span.className = "close";
    i.className = "fas fa-minus-circle";
    span.appendChild(i);
    item.appendChild(span);

    let close = document.getElementsByClassName("close");
    for(let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let li = this.parentElement;
        myList.removeChild(li);
      }
    }

}
let list = document.getElementById('myList');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    return ev.target.classList.toggle('checked');
  }
}, false);