// var movies = [
//   {
//     titles: "In Burges",
//     rating: 5,
//     hasWatched: true
//   },
//   {
//     titles: "Frozen",
//     rating: 4.5,
//     hasWatched: false
//   },
//   {
//     titles: "Mad Max Fury Road",
//     rating: 5,
//     hasWatched: true
//   },
//   {
//     titles: "Les Misserables",
//     rating: 3.5,
//     hasWatched: false
//   }
// ];
//
// movies.forEach(function (movie) {
//   var result = "You have ";
//   if (movie.hasWatched) {
//     result += "watched ";
//   }
//   else {
//     result += "not seen ";
//   }
//   result += movie.titles + " - ";
//   result += movie.rating + " stars";
//   console.log(result);
// });


var capitals = [
  {
    country: "Ukraine",
    city: "Kiev",
    haveBeen: true,
    rating: 5
  },
  {
    country: "United States",
    city: "Washington D.C.",
    haveBeen: false,
    rating: 3.5
  },
  {
    country: "Serbia",
    city: "Belgrade",
    haveBeen: true,
    rating: 5
  },
  {
    country: "The Netherlands",
    city: "Amsterdam",
    haveBeen: true,
    rating: 5
  },
  {
    country: "Germany",
    city: "Berlin (I think)",
    haveBeen: false,
    rating: -10 + " because I hate my ex and she is from there!"
  },
  {
    country: "Italy",
    city: "Rome",
    haveBeen: true,
    rating: 2 + " because my rental car got stolen there!"
  },
  {
    country: "Croatia",
    city: "Zagreb",
    haveBeen: true,
    rating: 5
  }
];

capitals.forEach(function (capital) {
  var result = "The capitol of ";
  result += capital.country + " is ";
  result += capital.city + ".";
  if (capital.haveBeen ) {
    result += "I have been there and I give it a" + capital.rating + ".";
  }
  else {
    result += "I have NOT been there and I give it a " + capital.rating + ".";
  }
  console.log(result);

});
