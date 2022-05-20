window.onscroll=function(){scrollfunction()}

function scrollfunction(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        document.getElementById('navbar').style.backgroundColor="#fff";
    }
    else{
        document.getElementById('navbar').style.backgroundColor="none";
    }
}

document.getElementById('hamburger').onclick=function(){clickfunction()}
function clickfunction(){
    document.getElementsByClassName('middle-section').style.display="block"
}