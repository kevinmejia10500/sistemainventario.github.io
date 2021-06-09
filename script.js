function nuevopro() {
    princi.innerHTML = formulario;
}

function verproductos() {
    princi.innerHTML = tablaproductos;
    mostrarTabla();
}

function eliminarprimer() {
    console.log(productos.shift());
    verproductos();
}

function eliminarultimo() {
    console.log(productos.pop());
    verproductos()
}

function borrar() {
    productos = [];
    verproductos();
}


function nuevoproducto() {
    var lid = document.getElementById("id").value;
    var lmarca = document.getElementById("marca").value;
    var ltipo = document.getElementById("tipo").value;
    var lmodelo = document.getElementById("modelo").value;
    var lprecio = document.getElementById("precio").value;

    productos.push({
        id: lid,
        marca: lmarca,
        tipo: ltipo,
        modelo: lmodelo,
        precio: lprecio
    });

    console.log(productos);


}

function mostrarTabla() {
    var tproductos = document.getElementById("tproductos");

    for (i in productos) {
        tproductos.innerHTML += `<tr>
                                        <td>${parseInt(i) + parseInt(1)}</td>
                                        <td>${productos[i].id}</td>
                                        <td>${productos[i].marca}</td>
                                        <td>${productos[i].tipo}</td>
                                        <td>${productos[i].modelo}</td>
                                        <td>$${productos[i].precio}</td>
                                        </tr>`;
    }
}

function doSearch() {
    const tableReg = document.getElementById('tproductos');
    const searchText = document.getElementById('searchTerm').value.toLowerCase();
    let total = 0;

    // Recorremos todas las filas con contenido de la tabla
    for (let i = 1; i < tableReg.rows.length; i++) {

        let found = false;
        const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        // Recorremos todas las celdas
        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            tableReg.rows[i].style.display = 'none';
        }
    }

    // mostramos las coincidencias
    const lastTR = tableReg.rows[tableReg.rows.length - 1];
    const td = lastTR.querySelector("td");
    lastTR.classList.remove("hide", "red");
}