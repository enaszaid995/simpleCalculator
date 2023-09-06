//var result = document.getElementById('result').value;
function mathOperator(a){
     try{
        let result=document.getElementById('result').value;
        if(a == '='){
            document.getElementById('result').value = eval(result);
        }else if(result.toString().includes('+') || result.toString().includes('-') || result.toString().includes('*') || result.toString().includes('/') || result.toString().includes('%')){
            document.getElementById('result').value = eval(result);
            document.getElementById('result').value += a;
        }else{
            document.getElementById('result').value += a;
        } 

     }catch(e){
        alert(e.message)
     }
     
}

function minusFunc(){
    let minusStatus = false;
    let result = document.getElementById('result').value ;
    if(minusStatus){
        document.getElementById('result').value = result;
        minusStatus = false;
    }else{
        document.getElementById('result').value = -(result);
        minusStatus = true;
    }
}
function AC(){
    document.getElementById('result').value = 0;
}

function addNum(a){
    let result=document.getElementById('result').value;
    if(a == '.'){
        if(result.toString().includes('.')){
            return;
        }
    }
    if(result == 0){
        document.getElementById('result').value = a;
    }else{
        document.getElementById('result').value += a;
    }
}