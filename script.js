

let form = document.querySelector(".form-page");
console.log(form)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let height=Number(document.querySelector("#height").value)/100;
    let weight=Number(document.querySelector("#weight").value);

    callBMI(height,weight);

    document.querySelector("#height").value = ""
    document.querySelector("#weight").value = ""
   
})

function callBMI(height,weight){
    let BMI=(weight/(height*height)).toFixed(2);

    let result=document.querySelector(".result")
    if(BMI<18){
        result.innerHTML=`BMI value is: ${BMI},You are UnderWeight.`
        result.style.color="red"
    }
    else if(BMI<24){
        result.innerHTML=`BMI value is: ${BMI},You are Normal Weight.`
        result.style.color="green"
    }
    else if(BMI<30){
        result.innerHTML=`BMI value is: ${BMI},You are Overweight.`
        result.style.color="orange"
    }
    else{
        result.innerHTML=`BMI value is: ${BMI},You are Obey.`
        result.style.color="red"
    }
}