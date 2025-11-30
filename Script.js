function getDetails() {
    let Temp=Number(document.getElementById("tempNumber").value) ;
    let scale=document.getElementById("dropDown").value;
    let result;
    if(scale=="Celsius"){
        result=(Temp *9/5)+32;
    }    
    else if (scale=="Fahrenheit"){
        result=(Temp-32) *5/9;
    }    
    
    document.getElementById("convertText").innerText="Converted: "+result.toFixed(2);  //Round two decimal places
}