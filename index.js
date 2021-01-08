var name = ""
function showname()
{
    if(document.form.name.value == "")
    {
        alert("U heeft geen naam ingevoerd. Vul alstublieft uw naam in of klik op geen interesse.");
    }
    else        
    {
        var name = " " + document.form.name.value;
        alert("U heeft de naam" + name + " ingevult.");
        document.getElementById("viewname").innerHTML = name;
    }
}
function geeninteresse()
{
    alert("U heeft geen naam ingevoerd. Druk op N om uw naam te wijzigen")
    var name=""
} 