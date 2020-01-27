//Notes on expressions

//Starts with Mosh
.find({ author: /^Mosh/ })

    //Ends with
    .find({ author: /Hamedani$/i })

    //Contains
    .find({ author: /.*Mosh.*/ })

    // .find()
    // .or([{ author: "Mosh" }, { isPublished: true }]) //logical operators
    // .find({ price: { $gte: 10, $lte: 20} }) //greater than or equal to 10; less than or equal to 20
    // .find({ price: { $in: [10, 15, 20] } }) //multiple values
    // .limit(10)

// findByIdandUpdate //
const result = await Course.findByIdAndUpdate(
id,
{
\$set: {
author: "Jason",
isPublished: false
}
},
{ new: true }
);

//Second method//
// course.set({
// isPublished: true,
// author: 'Author Author'
// })
console.log(course);
