var currentId = 5;
function addItem(){
    const addingItem = document.getElementsByName("adding-item")[0];
    const currentId = document.getElementById("sidebar");
    addingItem.value;
    currentId += 1;

    const newItem = document.createElement("a");
    const newCurrentId = currentId;
    newItem.href = "#";
    newItem.ondblclick = () => deleteItem(newCurrentId);
    newItem.id = newCurrentId;
    newItem.classList = "list-group-item list-group-item-action";
    newItem.innerText = addingItem.value;
    newItem.currentId.appendChild(newItem);
    addingItem.value = "";
}
function deleteItem(id){
    console.log(id);
    const sidebar = document.getElementById("sidebar");
    const currentItem = document.getElementsById(id);
    if(currentId){
        sidebar.removeChild(currentId);
    }
}

function changeColor(color, id){
    $(`#item-${id} .card-body`).removeClass(`black white gold`);
    $(`#item-${id} .card-body`).addClass(`${color}`);
}
