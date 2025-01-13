var time=new Date().getHours();
var time1=prompt("Enter your name")
    console.log(time)
    if (time<12){
        console.log("good morning "+ time1)
    }
    else if(time<14){
        console.log("good Afternoon "+time1)
}
    else{
        console.log("good evening "+time1)
    }