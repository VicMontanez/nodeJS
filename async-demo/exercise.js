getCustomer(1, customer => {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    getTopMovies(movies => {
      console.log("Top movies: ", movies);
      sendEmail(customer.email, movies, () => {
        console.log("Email sent...");
      });
    });
  }
});

// Change functions to have promise
function getCustomer(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Mosh Hamedani",
      isGold: true,
      email: "email"
    });
  }, 4000);
}

function getTopMovies(callback) {
  setTimeout(() => {
    resolve(["movie1", "movie2"]);
  }, 4000);
}

function sendEmail(callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}
