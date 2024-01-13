
//diable right click
window.oncontextmenu=function (){
   
}

document.onkeydown=function(e)
{
    if(event.KeyCode == 123){
return false;
    }
    if(e.ctrlKey && e.shiftKey && e.KeyCode == 'I'.charCodeAt(0)){
        return false;
    
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charAt(0)){
        return false
    }
    if(e.ctrlKey && e.keyCode == 'U'.charAt(0)){
        return false
    }
}