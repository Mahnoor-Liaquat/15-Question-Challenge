// Question no 11: Iterate through the properties of an object using a for-in loop.

const student={
    name : "Muzammil Ali",
    age : 18,
    city: "Karachi",
    studyAt : "Bano Qabil 2.0",
    course: "Website development 1 - HTML , CSS, JavaScript"
}

for(let key in student){
    console.log(key +" : "+ student[key]);
}

