$(document).ready(function(){

    var myDate = new Date().toString().slice(0, 21);
    document.getElementById("date").innerHTML = myDate;

    $("#submit-requisition-form").click(function(){
        var requsitionFormTable = document.getElementById('dataTable');

        //gets rows of table
        var rowLength = requsitionFormTable.rows.length;

        //loops through rows
        for (i = 2; i < rowLength; i++){

            //gets cells of current row
            var oCells = requsitionFormTable.rows.item(i).cells;

            //gets amount of cells of current row
            var cellLength = oCells.length;

            //loops through each cell in current row
            for(var j = 2; j < cellLength; j++){

                // get your cell info here
                var cellVal = requsitionFormTable.rows[i].cells[j].innerHTML;   //oCells.item(j).childNodes[0].innerHTML;
                alert(j + " --> " + cellVal);
            }
        }
    });
});




//requsition form related functions
function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.style.height="100px";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.style.textAlign="center";
    cell2.innerHTML = rowCount-1;
    cell2.style.height="100px";

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("textarea");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.style.textAlign="left";
    element2.style.width="100%";
    element2.style.height="100%";
    element2.style.border="none";

    cell3.style.height="100px";
    cell3.contentEditable=true;
    //cell3.appendChild(element2);

    var cell4 = row.insertCell(3);
    var element3 = document.createElement("textarea");
    element3.type = "text";
    element3.name = "txtbox[]";
    element3.style.textAlign="center";
    element3.style.width="100%";
    element3.style.height="100%";
    element3.style.border="none";

    cell4.style.height="100px";
    cell4.contentEditable=true;
    //cell4.appendChild(element3);

    var cell5 = row.insertCell(4);
    var element4 = document.createElement("textarea");
    element4.type = "text";
    element4.name = "txtbox[]";
    element4.style.textAlign="center";
    element4.style.width="100%";
    element4.style.height="100%";
    element4.style.border="none";

    cell5.style.height="100px";
    cell5.contentEditable=true;
    //cell5.appendChild(element4);

    var cell6 = row.insertCell(5);
    var element5 = document.createElement("textarea");
    element5.type = "text";
    element5.name = "txtbox[]";
    element5.style.textAlign="center";
    element5.style.width="100%";
    element5.style.height="100%";
    element5.style.border="none";

    cell6.style.height="100px";
    cell6.contentEditable=true;
    //cell6.appendChild(element5);

    var cell7 = row.insertCell(6);
    var element6 = document.createElement("textarea");
    element6.type = "text";
    element6.name = "txtbox[]";
    element6.style.textAlign="center";
    element6.style.width="100%";
    element6.style.height="100%";
    element6.style.border="none";

    cell7.style.height="100px";
    cell7.contentEditable=true;
    //cell7.appendChild(element6);

    var cell8 = row.insertCell(7);
    var element7 = document.createElement("textarea");
    element7.type = "text";
    element7.name = "txtbox[]";
    element7.style.textAlign="center";
    element7.style.width="100%";
    element7.style.height="100%";
    element7.style.border="none";

    cell8.style.height="100px";
    cell8.contentEditable=true;
    //cell8.appendChild(element7);

    var cell9 = row.insertCell(8);
    var element8 = document.createElement("textarea");
    element8.type = "text";
    element8.name = "txtbox[]";
    element8.style.textAlign="center";
    element8.style.width="100%";
    element8.style.height="100%";
    element8.style.border="none";

    cell9.style.height="100px";
    cell9.contentEditable=true;
    //cell9.appendChild(element8);


  }

  function deleteRow(tableID) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
      var row = table.rows[i];
      var chkbox = row.cells[0].childNodes[0];
      if(null != chkbox && true == chkbox.checked) {
        table.deleteRow(i);
        rowCount--;
        i--;
      }


    }

    for(var i=2; i<rowCount; i++) {
      table.rows[i].cells[1].innerHTML = i-1;

    }

    }catch(e) {
      alert(e);
    }
  }
