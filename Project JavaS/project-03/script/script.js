function loadItems() {
    let savedItems = JSON.parse(localStorage.getItem("saveItems"));
    let productsTable = document.getElementById("products");

    productsTable.innerHTML = "";

    savedItems.forEach(function(item, index) {
        productsTable.innerHTML += `
            <tr>
                <td>${item.categorie}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.description}</td>
                <td>${item.stock ? '<i class="fa-solid fa-check text-success"></i>' : '<i class="fa-solid fa-x text-danger"></i>'}</td>
                <td>${item.rating}</td>
                <td><button type="button" class="btn-close" aria-label="Close" onclick="deleteItem(${index})"></button></td>
            </tr>`;
    });
}

function addItem() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let categorie = document.getElementById("categorie").value;
    let description = document.getElementById("description").value;
    let stock = document.querySelector('input[type=checkbox]').checked;
    let rating = document.getElementById("rating").value;

    let saveItem = {
        name: name,
        price: price,
        categorie: categorie,
        description: description,
        stock: stock,
        rating: rating
    };

    let savedItems = JSON.parse(localStorage.getItem("saveItems"));
    savedItems.push(saveItem);

    localStorage.setItem("saveItems", JSON.stringify(savedItems));
    loadItems();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("categorie").value = "";
    document.getElementById("description").value = "";
}

function deleteItem(index) {
    let savedItems = JSON.parse(localStorage.getItem("saveItems"));
    savedItems.splice(index, 1);
    localStorage.setItem("saveItems", JSON.stringify(savedItems));
    loadItems();
}

window.onload = loadItems;