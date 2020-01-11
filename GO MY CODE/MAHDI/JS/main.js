// function makebold(){
//     var getText=document.getElementsByName("textarea").innerHTML;
//     if(getText.style.fontStyle=="normal"){getText.style.fontStyle="bold"}
//     else{getText.style.fontStyle="normal"}
// }
function makebold(){
    if(document.getElementById('mytext').style.fontWeight=='normal')
    {document.getElementById('mytext').style.fontWeight='bold'}
    else(document.getElementById('mytext').style.fontWeight='normal')
}


function makeitalic(){
    if(document.getElementById('mytext').style.fontStyle=='normal')
    {document.getElementById('mytext').style.fontStyle='italic'}
    else(document.getElementById('mytext').style.fontStyle='normal')
}

function makeline(){
    if(document.getElementById('mytext').style.textDecorationLine=='none')
    {document.getElementById('mytext').style.textDecorationLine='underline'}
    else(document.getElementById('mytext').style.textDecorationLine='none')
}

/* function changesize(){
    var mytext=document.getElementById("size").innerHTML;
    if(mytext=="20px"){document.getElementById('mytext').style.fontSize='20px'}
    if(mytext=="30px"){document.getElementById('mytext').style.fontSize='30px'}
    else(document.getElementById('mytext').style.fontSize='40px')
} */

function test(){
    document.getElementById('mytext').style.fontSize=document.getElementById('size').value
}

function changefont(){
    document.getElementById('mytext').style.fontFamily=document.getElementById('font').value
}