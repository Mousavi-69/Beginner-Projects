
var id = setInterval(myTimer,1000);

function myTimer(){

    var minute=document.getElementById("min").innerText
    var second=document.getElementById("sec").innerText

    if(parseInt(second)===59){
        var newmin = (parseInt(minute)+1).toString()
        if (newmin < 10){
            newmin="0"+newmin
        }
    document.getElementById("min").innerHTML = newmin
    document.getElementById("sec").innerHTML = "00"
    }else {
        var newSec = (parseInt(second) + 1).toString()
        if(newSec <10){
            newSec = "0"+newSec
        }
    document.getElementById("sec").innerHTML=newSec

    }
}
