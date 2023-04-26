function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var ms = dateTime.getMilliseconds();
    var session = document.getElementById('session')


if(hrs>=12){
    session.innerHTML=('PM');
}
else{
    session.innerHTML= ('AM');
}

if(hrs>12){
    hrs = hrs - 12
}





    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('milliseconds').innerHTML = ms;
}
setInterval(displayTime,10)
// setInterval(Ms,10000)




// const d = new Date();
// let ms = d.getMilliseconds();
// document.getElementById("demo").innerHTML = ms;

// function displayTime(){
//     var dateTime = new Date();
//     var hrs = dateTime.getHours();
//     var min = dateTime.getMinutes();
//     var sec = dateTime.getSeconds();
//     var ms = dateTime.getMilliseconds();
//     var session = document.getElementById('session')

//     if(hrs>=12){
//         session.innerHTML=('PM');
//     } else{
//         session.innerHTML= ('AM');
//     }

//     if(hrs>12){
//         hrs = hrs - 12
//     }

//     document.getElementById('hours').innerHTML = hrs;
//     document.getElementById('minutes').innerHTML = min;
//     document.getElementById('seconds').innerHTML = sec;
//     document.getElementById('milliseconds').innerHTML = ms;
// }

// setInterval(displayTime, 10);
