const course = {
    name:"JS",
    price:20000,
    instructor:"Aditya"
}

//console.log(course.instructor);

const {instructor:teacher} = course;

console.log(teacher)