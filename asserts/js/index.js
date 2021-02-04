let subEle = document.getElementById("submit-button");
subEle.addEventListener('click',addingVeg);

function addingVeg () {
    let getId = document.getElementById("add-veg");
    let vegEle = document.getElementById("veg-name").value;
    let divElm = document.createElement("div");
    divElm.innerHTML = `<p class="list-group-item mb-0 rounded-0">${vegEle} </p>`;
    divElm.className = "list-group";
    getId.appendChild(divElm);  
    document.getElementById("veg-name").value = "";
}
