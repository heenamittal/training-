/**
 * Created with JetBrains WebStorm.
 * User: nehal
 * Date: 5/16/13
 * Time: 1:07 PM
 * To change this template use File | Settings | File Templates.
 */
console.log("in here");
function clock() {
    console.log("enter here");
    var currentTime = new Date();
    var d = currentTime.getDate();
    var m = currentTime.getMonth();
    var y = currentTime.getYear();
    var currentHour = currentTime.getHours();
    var currentMin = currentTime.getMinutes();
    var currentSec = currentTime.getSeconds();
    currentMin = checkTime(currentMin);
    currentSec = checkTime(currentSec);
    currentHour = checkHour(currentHour);
    var dis = "date:" + d + "-" + m + "-" + y + "</br>" + "time:" + currentHour + ":" + currentMin + ":" + currentSec;
    document.getElementById("p1").innerHTML = dis;
};
//clock();
setInterval(clock, 1000);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function checkHour(h) {
    if (h > 12) {
        h = h - "12";
    }
    return h;
}






