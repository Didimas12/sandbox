$(document).ready(function() {
    getBooks();
});
$(document).ready(function() {
    getTipe();
});

const getBooks = () => {
    $.ajax({
        type: "GET",
        url: "https://mybook-order.herokuapp.com/books",
        // data: "data",
        // dataType: "dataType",
        success: function(response) {
            if (response.success) {
                response.data.forEach((book, i) => {
                    const dataBook = `<tr>
                    <th>${i + 1}</th>
                    <td>${book.name}</td>
                    <td></td>
                    <td> <button class="btn btn-outline-danger" type="button" onclick="hapusBuku(${book.id})")">Delete</button></td>
                    </tr>`;
                    $("#dataBook").append(dataBook);
                });

            }

        }
    });
}

const getTipe = () => {
    $.ajax({
        type: "GET",
        url: "https://mybook-order.herokuapp.com/books/type",
        // data: "data",
        // dataType: "dataType",
        success: function(response) {
            if (response.success) {
                response.data.forEach((category, i) => {
                    const tipe = `<tr>
                    <th></th>
                    <td></td>
                    <td>${category.name}</td>
                   
                    </tr>`;
                    $("#dataBook").append(tipe);
                });
            }
        }
    });
}

const hapusBuku = (id) => {
    const playload = { id: id };
    $.ajax({
        type: "DELETE",
        url: "https://mybook-order.herokuapp.com/books",
        data: JSON.stringify(playload),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            if (response.success) {
                $("#dataBook").html("");
                getBooks();


            }
        }
    });
}
const hapusKategori = (id) => {
    const playload = { id: id };
    $.ajax({
        type: "DELETE",
        url: "https://mybook-order.herokuapp.com/books/type",
        data: JSON.stringify(playload),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            if (response.success) {
                $("#dataBook").html("");
                getTipe();

            }
        }
    });
}

const tambahBuku = () => {
    $.ajax({
        type: "POST",
        url: "https://mybook-order.herokuapp.com/books",
        data: "data",
        dataType: "dataType",
        success: function(response) {
            if (response.success) {
                const tambahBuku = document.getElementById("tambahBuku")
                const
            }
        }
    });
}