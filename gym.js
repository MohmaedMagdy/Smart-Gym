let myname = "Ready to be a hero";
let index = 1;

function writetext(){
    document.querySelector('h1').textContent = myname.slice(0,index)
    index++
    if(index > myname.length){
        index = 1;
    }
}
setInterval(function(){
    writetext();
},100)