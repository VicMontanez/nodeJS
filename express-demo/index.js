const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const auth = require('./middleware/auth')
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true })); 
app.use(express.static('public'));
app.use(helmet());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...')
}

app.use(logger);

app.use(auth);

app.use
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) 
=> {
  const { error } = validateCourse(req.body)
    if (error) return
      res.status(400).send(error.details[0].message);
      
    
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(course);
  res.send(course);
});

//PUT Request

app.put('/api/courses/:id', (req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return 
    res.status(404).send("The course with the given ID was not found");

    const { error } = validateCourse(req.body)
    if (error) return
      res.status(400).send(error.details[0].message);
      
    

  //Update course
  course.name = req.body.name;
  //Return the updated course
  res.send(course)
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, schema);
}

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return 
    res.status(404).send("The course with the given ID was not found");
  res.send(course);
});

//Delete Post
app.delete('/api/courses/:id', (req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found");

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    
    res.send(course);
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
