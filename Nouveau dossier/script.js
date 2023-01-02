////////////////////////////////////// Display data from JSON using Jquery//////////////////////////////////
$.getJSON('./movies.json', function(data) {
    $.each(data, function(index, item) {
      $('#table tbody').append(
        '<tr class="item">' +
        '<td>' + item.Titre + '</td>' +
        '<td>' + item.Réalisateur + '</td>' +
        '<td>' + item.Durée + '</td>' +
        '<td>' + item.Date + '</td>' +
        '<td>' + '<img src="'+ item.Poster +'">' + '</td>' +
        '<td>' +item.Féstivals[0] +'<br>' +item.Féstivals[1] + '</td>' +
        '<td><ul><li>' + item.Acteurs[0].firstname+' '+item.Acteurs[0].lastName+' /'  +item.Acteurs[0].nationality + 
        '</li><li>' + item.Acteurs[1].firstname + ' '+item.Acteurs[1].lastName+' /' +item.Acteurs[1].nationality + 
        '</li><li>'+ item.Acteurs[2].firstname+' ' +item.Acteurs[2].lastName+'  /' +item.Acteurs[2].nationality + '</li></ul></td>' +
        '</tr>'
      );
    });
  });

                     ///////////////////////search in Table///////////////////////////

 ///////////////// defines variables

 function searchTable() {
  ///////////////// defines variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  /////////// on all rows of the table
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
            //////////////// SORT (Date/ Réalisateur/ Titre / Durée) //////////////
            $('th.sorted').click(function(){
              var table = $(this).parents('table').eq(0)
            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            this.asc = !this.asc
            for (var i = 0; i < rows.length; i++){
              table.append(rows[i])
            }
          })
          function comparer(index) {
           return function(a, b) {
                var valA = getCellValue(a, index), valB = getCellValue(b, index)
                return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
            }
          }
          function getCellValue(row, index){ return $(row).children('td').eq(index).text() }
