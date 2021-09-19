setInterval(() => {
    // creates a new date object with the current date and time:
    d = new Date();
    // method returns the hour (from 0 to 23) of the specified date and time.
    htime = d.getHours();
    // method returns the minutes (from 1 to 60) of the specified date and time.
    mtime = d.getMinutes();
    // method returns the second (from 1to 60) of the specified date and time.
    stime = d.getSeconds();
    // Rotation of Hour hand
    hrotation = 30*htime + mtime/2;
    // Rotation of Minute Hand
    mrotation = 6*mtime;
    // Rotation of Second Hand
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);