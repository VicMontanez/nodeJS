//mongoose

// Using References (Normalization)
let author = {
  name: "Mosh"
};

let course = {
  author: "id"
};

// Using Embedded Documents (denormalizaion)
let course = {
  author: {
    name: "Mosh"
  }
};
