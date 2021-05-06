function getdata()
{
   
    alert($('#name').val());
}

function mydata(tagid)
{
    return document.getElementById(tagid).value;
}
function addData()
{

    named=mydata("name");
    stdd=document.getElementById("std").value;
    rolld=document.getElementById("roll").value;

    var table=document.getElementById("sturecord");
    var row = table.insertRow(0);

    var sno=row.insertCell(0);
    var name = row.insertCell(1);
    var roll = row.insertCell(2);
    var std = row.insertCell(3);
  

  sno.innerHTML = "6";
  name.innerHTML = named;
  std.innerHTML = stdd;
  roll.innerHTML = rolld;

}