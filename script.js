
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
}
let list = document.getElementById('myList');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    return ev.target.classList.toggle('checked');
  }
}, false);