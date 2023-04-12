// Date and time


const presentDate = new Date(); // new k bd class ka istimal huta hy or class ko hamesha capital letter istimal krty hain

console.log(presentDate.getDate()); // is the method 
 let month = ["January", "Feb", "March", "Apr"]
console.log(month[presentDate.getMonth()]);

console.log(presentDate.getFullYear());

console.log(presentDate.getHours());

console.log(presentDate.getDay());

presentDate.setDate(15); // setDate mein yh apk computer sy date leta hy ,,, beshaq apk computer mein date glt hi q na hu yh apko apk computer ki hi date btay ga
console.log(presentDate);

const doomDay = new Date();
doomDay.setDate(15);
doomDay.setFullYear(2099);
doomDay.setHours(0);
doomDay.setMonth(10);
doomDay.setMinutes(0);

console.log(doomDay);

const diff = doomDay - presentDate ;
console.log(diff);
const  diffInYear = diff / (1000 * 60 * 60 * 24 * 365.25);
console.log(Math.round(diffInYear));

