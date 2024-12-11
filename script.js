const input = document.getElementById('inputbox')
const LiCont = document.getElementById('list-cont')
showTask()
function addtask(){
    if(input.value == ''){
        document.querySelector('h5').innerText = 'Please add task first.'
    }
    else{
        let Li = document.createElement('li');
        Li.innerHTML = input.value;
        LiCont.appendChild(Li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        Li.appendChild(span);
        document.querySelector('h5').innerText = ''
    }
    input.value = '' 
    Savedata()
}


LiCont.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        Savedata()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        Savedata()
    }
},false)

function Savedata(){
    localStorage.setItem('data',LiCont.innerHTML)
}

function showTask(){
    LiCont.innerHTML = localStorage.getItem('data')
}

