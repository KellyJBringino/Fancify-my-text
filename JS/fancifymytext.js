function bigger() 
{
    alert("hello world!");
    document.getElementById("myTextarea").style.fontSize = "1.5em";
}
function fan()
{
    document.getElementById("myTextarea").style.fontWeight = "bold";
    document.getElementById("myTextarea").style.color = "blue";
    document.getElementById("myTextarea").style.textDecoration = "underline";
}
function bor()
{
    document.getElementById("myTextarea").style.fontWeight = "normal";
    document.getElementById("myTextarea").style.color = "black";
    document.getElementById("myTextarea").style.textDecoration = "none";
}
function moo()
{
    let calf = document.getElementById("myTextarea");
    let cow = "" + calf.value;
    cow = cow.replace(/\./g,"-Moo.");
    grass = cow.split("/\.");
    cow = grass.join("!");
    document.getElementById("myTextarea").value = cow.toUpperCase();
}