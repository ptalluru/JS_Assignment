function myFunction(){
    var x = document.getElementById("txt1").value;
    if(x.length<1)
    {
        window.alert("Input Required");
        return false;
    }
    if(isNaN(x))
    {
        window.alert("ENTER ONLY NUMERIC VALUE");
        return false;
    }
    var y= (x-32)*(5/9);
    document.getElementById("txt2").value=y;
}