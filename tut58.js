console.log("This is tutorial 58")

// setTimeOut ---> Allows us to run the function once after the given interval of time
// clearTimeOut ---> Allows us to run the function repeatedly after the given interval of time

function greet(name, byeText){
    console.log('Hello, Good morning ' + name + " " + byeText);
}
// timeOut = setTimeout(greet, 5000, "Yash", "Take care");
// console.log(timeOut)

// clearTimeout(timeOut);
// setTimeout(greet(), 12000);  ---> Wrong as it is calling the function inside setTimeOut

IntervalId = setInterval(greet, 1000, "Yash", "Good Night");
clearInterval(IntervalId)

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);