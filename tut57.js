let para = document.getElementById('para');
para.addEventListener('mouseover', function run(){
    // alert("mouse inside")
    console.log("mouse inside")
})

para.addEventListener('mouseout', function run(){
    // alert("mouse outside")
    console.log("mouse outside")
})

function togglehide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');

    if(para.style.display != 'none'){
        para.style.display = 'none';
    }
    else{
        para.style.display = 'block';
    }
}