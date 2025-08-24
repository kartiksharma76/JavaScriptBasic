// destructring 
const course  = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "kartik"
}

// course.courseInstructor
const {courseInstructor : instructor}= course
console.log(instructor);

// console.log(courseInstructor);

// const navbar = ({company}) => {
// }

// navbar (company =" kartik")

// {
//     "name"  : "kartik",
//     "coursename" : "js in Hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]