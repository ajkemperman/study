"use strict";

const mockData = [
  {
    first_name: "Tally",
    last_name: "Lillyman",
    age: 22,
    gender: "F",
    gender_interest: "X",
    location: "city",
    min_age_interest: 30,
    max_age_interest: 66
  },
  {
    first_name: "Ryun",
    last_name: "Cobb",
    age: 22,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 32,
    max_age_interest: 82
  },
  {
    first_name: "Sheffie",
    last_name: "Elecum",
    age: 45,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 29,
    max_age_interest: 61
  },
  {
    first_name: "Putnam",
    last_name: "Haigh",
    age: 25,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 94
  },
  {
    first_name: "Caldwell",
    last_name: "Semarke",
    age: 55,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 36,
    max_age_interest: 79
  },
  {
    first_name: "Linn",
    last_name: "Cashin",
    age: 51,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 34,
    max_age_interest: 100
  },
  {
    first_name: "Zebulon",
    last_name: "Bucksey",
    age: 45,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 22,
    max_age_interest: 97
  },
  {
    first_name: "Lyndy",
    last_name: "Medler",
    age: 31,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 24,
    max_age_interest: 88
  },
  {
    first_name: "Debora",
    last_name: "Braghini",
    age: 19,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 44
  },
  {
    first_name: "Giacopo",
    last_name: "Spinke",
    age: 70,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 46,
    max_age_interest: 93
  },
  {
    first_name: "Klarrisa",
    last_name: "Dust",
    age: 20,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 53
  },
  {
    first_name: "Menard",
    last_name: "Raye",
    age: 32,
    gender: "X",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 23,
    max_age_interest: 66
  },
  {
    first_name: "Martguerita",
    last_name: "Remington",
    age: 22,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 37
  },
  {
    first_name: "Thomasin",
    last_name: "Torrans",
    age: 71,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 48,
    max_age_interest: 88
  },
  {
    first_name: "Red",
    last_name: "Killgus",
    age: 30,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 21,
    max_age_interest: 54
  },
  {
    first_name: "Hillyer",
    last_name: "Willshere",
    age: 45,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 24,
    max_age_interest: 64
  },
  {
    first_name: "Fionna",
    last_name: "Sposito",
    age: 50,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 26,
    max_age_interest: 67
  },
  {
    first_name: "Joni",
    last_name: "Vise",
    age: 34,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 23,
    max_age_interest: 58
  },
  {
    first_name: "Allayne",
    last_name: "Mcmanaman",
    age: 44,
    gender: "X",
    gender_interest: "B",
    location: "city",
    min_age_interest: 26,
    max_age_interest: 73
  },
  {
    first_name: "Glenn",
    last_name: "Lucius",
    age: 54,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 36,
    max_age_interest: 72
  },
  {
    first_name: "Breanne",
    last_name: "Pochet",
    age: 48,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 73
  },
  {
    first_name: "Garnette",
    last_name: "Lamputt",
    age: 34,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 26,
    max_age_interest: 55
  },
  {
    first_name: "Joey",
    last_name: "Tretter",
    age: 55,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 92
  },
  {
    first_name: "Gerrie",
    last_name: "Cadore",
    age: 32,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 22,
    max_age_interest: 55
  },
  {
    first_name: "Koren",
    last_name: "Oaks",
    age: 34,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 23,
    max_age_interest: 53
  },
  {
    first_name: "Bax",
    last_name: "Lorryman",
    age: 48,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 33,
    max_age_interest: 64
  },
  {
    first_name: "Dannie",
    last_name: "Hexter",
    age: 56,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 34,
    max_age_interest: 81
  },
  {
    first_name: "Marta",
    last_name: "Richel",
    age: 21,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 35
  },
  {
    first_name: "Deloria",
    last_name: "Berni",
    age: 40,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 26,
    max_age_interest: 83
  },
  {
    first_name: "Rowland",
    last_name: "Bestar",
    age: 42,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 26,
    max_age_interest: 56
  },
  {
    first_name: "Howie",
    last_name: "Vicarey",
    age: 57,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 39,
    max_age_interest: 95
  },
  {
    first_name: "Kellina",
    last_name: "Fitchew",
    age: 22,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 56
  },
  {
    first_name: "Papagena",
    last_name: "Stains",
    age: 62,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 30,
    max_age_interest: 81
  },
  {
    first_name: "Lesly",
    last_name: "Aherne",
    age: 37,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 62
  },
  {
    first_name: "Willow",
    last_name: "Whitrod",
    age: 39,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 96
  },
  {
    first_name: "Rachael",
    last_name: "Worton",
    age: 48,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 33,
    max_age_interest: 66
  },
  {
    first_name: "Danya",
    last_name: "Rozec",
    age: 29,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 53
  },
  {
    first_name: "Valentino",
    last_name: "Eisak",
    age: 35,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 61
  },
  {
    first_name: "Mina",
    last_name: "Deer",
    age: 41,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 64
  },
  {
    first_name: "Clo",
    last_name: "Dubois",
    age: 42,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 30,
    max_age_interest: 82
  },
  {
    first_name: "Cory",
    last_name: "Itchingham",
    age: 46,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 60
  },
  {
    first_name: "Janeta",
    last_name: "Heintzsch",
    age: 19,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 35
  },
  {
    first_name: "Shaine",
    last_name: "Towse",
    age: 25,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 39
  },
  {
    first_name: "Goddart",
    last_name: "Binstead",
    age: 41,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 26,
    max_age_interest: 55
  },
  {
    first_name: "Lelia",
    last_name: "Tremathick",
    age: 52,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 73
  },
  {
    first_name: "Roderigo",
    last_name: "Brailsford",
    age: 61,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 46,
    max_age_interest: 86
  },
  {
    first_name: "Lynnelle",
    last_name: "Ramme",
    age: 26,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 46
  },
  {
    first_name: "Sibby",
    last_name: "Kembry",
    age: 65,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 47,
    max_age_interest: 98
  },
  {
    first_name: "Mildrid",
    last_name: "Maddams",
    age: 39,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 25,
    max_age_interest: 80
  },
  {
    first_name: "Burke",
    last_name: "Deverose",
    age: 20,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 49
  },
  {
    first_name: "Perry",
    last_name: "Blastock",
    age: 19,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 40
  },
  {
    first_name: "Hermina",
    last_name: "Fardy",
    age: 43,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 22,
    max_age_interest: 73
  },
  {
    first_name: "Mariel",
    last_name: "Fearick",
    age: 27,
    gender: "F",
    gender_interest: "X",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 40
  },
  {
    first_name: "Orton",
    last_name: "Norssister",
    age: 58,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 44,
    max_age_interest: 99
  },
  {
    first_name: "Mayne",
    last_name: "Ottewell",
    age: 48,
    gender: "F",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 30,
    max_age_interest: 62
  },
  {
    first_name: "Innis",
    last_name: "Golightly",
    age: 65,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 40,
    max_age_interest: 78
  },
  {
    first_name: "Andy",
    last_name: "Parfrey",
    age: 19,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 35
  },
  {
    first_name: "Phebe",
    last_name: "Reven",
    age: 41,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 68
  },
  {
    first_name: "Marcello",
    last_name: "Spreckley",
    age: 40,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 21,
    max_age_interest: 65
  },
  {
    first_name: "Goober",
    last_name: "Andreichik",
    age: 30,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 59
  },
  {
    first_name: "Dulcie",
    last_name: "Sedgman",
    age: 27,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 40
  },
  {
    first_name: "Barbey",
    last_name: "Castri",
    age: 30,
    gender: "X",
    gender_interest: "B",
    location: "city",
    min_age_interest: 19,
    max_age_interest: 47
  },
  {
    first_name: "Shaina",
    last_name: "Sterrie",
    age: 44,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 35,
    max_age_interest: 71
  },
  {
    first_name: "Hoebart",
    last_name: "Lutwidge",
    age: 27,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 19,
    max_age_interest: 38
  },
  {
    first_name: "Ashlie",
    last_name: "Conradie",
    age: 24,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 44
  },
  {
    first_name: "Jolie",
    last_name: "Dyment",
    age: 44,
    gender: "F",
    gender_interest: "X",
    location: "city",
    min_age_interest: 28,
    max_age_interest: 67
  },
  {
    first_name: "Anett",
    last_name: "Byway",
    age: 50,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 80
  },
  {
    first_name: "Althea",
    last_name: "Cescoti",
    age: 29,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 55
  },
  {
    first_name: "Barbara-anne",
    last_name: "Manser",
    age: 37,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 49
  },
  {
    first_name: "Jammal",
    last_name: "Gaenor",
    age: 26,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 38
  },
  {
    first_name: "Agustin",
    last_name: "Sennett",
    age: 22,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 40
  },
  {
    first_name: "Caprice",
    last_name: "Juszkiewicz",
    age: 25,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 69
  },
  {
    first_name: "Nap",
    last_name: "Stilgoe",
    age: 34,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 49
  },
  {
    first_name: "Farlee",
    last_name: "Stainton",
    age: 45,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 77
  },
  {
    first_name: "Harper",
    last_name: "Dignan",
    age: 24,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 50
  },
  {
    first_name: "Rozalin",
    last_name: "Ruckman",
    age: 34,
    gender: "F",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 48
  },
  {
    first_name: "Melodie",
    last_name: "Birney",
    age: 48,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 25,
    max_age_interest: 95
  },
  {
    first_name: "Graham",
    last_name: "Reyner",
    age: 26,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 45
  },
  {
    first_name: "Marijn",
    last_name: "Isham",
    age: 31,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 97
  },
  {
    first_name: "Elia",
    last_name: "Gioan",
    age: 56,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 94
  },
  {
    first_name: "Erma",
    last_name: "Derrett",
    age: 42,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 100
  },
  {
    first_name: "Ingrid",
    last_name: "Mizen",
    age: 23,
    gender: "M",
    gender_interest: "B",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 48
  },
  {
    first_name: "Murray",
    last_name: "Plom",
    age: 33,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 50
  },
  {
    first_name: "Bruno",
    last_name: "Sidary",
    age: 50,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 72
  },
  {
    first_name: "Inglis",
    last_name: "Bolden",
    age: 63,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 30,
    max_age_interest: 75
  },
  {
    first_name: "Marion",
    last_name: "Dessant",
    age: 37,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 22,
    max_age_interest: 53
  },
  {
    first_name: "Akim",
    last_name: "Lade",
    age: 51,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 30,
    max_age_interest: 94
  },
  {
    first_name: "Kory",
    last_name: "Rebert",
    age: 46,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 79
  },
  {
    first_name: "Agatha",
    last_name: "Dun",
    age: 29,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 19,
    max_age_interest: 49
  },
  {
    first_name: "Aretha",
    last_name: "Baumber",
    age: 24,
    gender: "F",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 48
  },
  {
    first_name: "Barret",
    last_name: "Diggles",
    age: 54,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 23,
    max_age_interest: 89
  },
  {
    first_name: "Natale",
    last_name: "Adess",
    age: 32,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 25,
    max_age_interest: 49
  },
  {
    first_name: "Judye",
    last_name: "Jacklings",
    age: 28,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 48
  },
  {
    first_name: "Modestine",
    last_name: "Standish",
    age: 57,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 34,
    max_age_interest: 97
  },
  {
    first_name: "Harwell",
    last_name: "Sexty",
    age: 36,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 60
  },
  {
    first_name: "Harriot",
    last_name: "Leedal",
    age: 27,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 44
  },
  {
    first_name: "Matelda",
    last_name: "Ellam",
    age: 38,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 67
  },
  {
    first_name: "Marleah",
    last_name: "Leggan",
    age: 62,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 39,
    max_age_interest: 97
  },
  {
    first_name: "Gaultiero",
    last_name: "Lawey",
    age: 47,
    gender: "X",
    gender_interest: "B",
    location: "rural",
    min_age_interest: 29,
    max_age_interest: 97
  },
  {
    first_name: "Payton",
    last_name: "Lonsbrough",
    age: 49,
    gender: "F",
    gender_interest: "B",
    location: "city",
    min_age_interest: 24,
    max_age_interest: 70
  }
];

// Your code here

let userProfile = {};
let matchProfile = [];

//While loop for obtaining first name.

while (true) {
  let first_name = prompt("What is your first name?");
  if (first_name.trim() === "") {
    console.log("Please give me your first name.");
    continue;
  } else {
    userProfile.first_name = first_name.trim();
    break;
  }
}

//While loop for obtaining last name.

while (true) {
  let last_name = prompt("What is your last name?");
  if (last_name.trim() === "") {
    console.log("Please give me your last name.");
    continue;
  } else {
    userProfile.last_name = last_name.trim();
    break;
  }
}

//While loop for obtaining age.

while (true) {
  let age = prompt("What is your age?");
  age = Number(age.trim());
  if (isNaN(age)) {
    console.log("Input must be a number.");
    continue;
  } else if (age < 18) {
    console.log("You are too young to participate. Must be 18 years or older.");
    continue;
  } else {
    userProfile.age = age;
    break;
  }
}

//While loop for obtaining gender.

while (true) {
  let gender = prompt("What is your gender? Type M, F or X.");
  gender = gender.toUpperCase();
  if (
    gender.trim() === "M" || 
    gender.trim() === "F" || 
    gender.trim() === "X"
  ) {
    userProfile.gender = gender.trim();
    break;
  } else {
    console.log(
      "Please answer M (Male), F (Female), or X (All not male & female)."
    );
    continue;
  }
}

//While loop for obtaining gender interested in.

while (true) {
  let gender_interest = prompt(
    "What is the gender you are interested in? Type M, F or X."
  );
  gender_interest = gender_interest.toUpperCase();
  if (
    gender_interest.trim() === "M" ||
    gender_interest.trim() === "F" ||
    gender_interest.trim() === "X"
  ) {
    userProfile.gender_interest = gender_interest.trim();
    break;
  } else {
    console.log(
      "Please answer M (Male), F (Female), or X (All not male & female)."
    );
    continue;
  }
}

//While loop for obtaining location.

while (true) {
  let location = prompt("Where are you looking (city/rural)?");
  location = location.toLowerCase();
  if (location.trim() === "city" || location.trim() === "rural") {
    userProfile.location = location.trim();
    break;
  } else {
    console.log("Please answer with city or rural.");
    continue;
  }
}

//While loop for obtaining minimal age of interest.

while (true) {
  let min_age_interest = prompt(
    "What is the minimal age you are interested in?"
  );
  min_age_interest = Number(min_age_interest.trim());
  if (isNaN(min_age_interest)) {
    console.log("Input must be a number.");
    continue;
  } else if (min_age_interest < 18) {
    console.log("Minimal age must be 18 years or higher.");
    continue;
  } else {
    userProfile.min_age_interest = min_age_interest;
    break;
  }
}

//While loop for obtaining maximum age of interest.

while (true) {
  let max_age_interest = prompt(
    "What is the maximum age you are interested in?"
  );
  max_age_interest = Number(max_age_interest.trim());
  if (isNaN(max_age_interest)) {
    console.log("Input must be a number.");
    continue;
  } else if (max_age_interest < 18) {
    console.log("Maximum age must be 18 years or higher.");
    continue;
  } else if (max_age_interest <= userProfile.min_age_interest) {
    console.log("Maximum age must be higher than minimal age.");
    continue;
  } else {
    userProfile.max_age_interest = max_age_interest;
    break;
  }
}

// for...of loop for obtaining matches and put them in a array as objects.

for (let person of mockData) {
  if (
    person.age >= userProfile.min_age_interest &&
    person.age <= userProfile.max_age_interest
  ) {
    if (
      userProfile.age >= person.min_age_interest &&
      userProfile.age <= person.max_age_interest
    ) {
      if (
        person.gender_interest === userProfile.gender &&
        userProfile.gender_interest === person.gender
      ) {
        if (person.location === userProfile.location) {
          matchProfile.push({
            first_name: person.first_name,
            last_name: person.last_name,
            age: person.age,
            location: person.location
          });
        }
      }
    }
  }
}

// Number of matches found.

console.log(`There are ${matchProfile.length} matches found.`);

// for...of loop for printing the matches.

for (let person of matchProfile) {
  console.log(`
    First Name: ${person.first_name}
    Last Name: ${person.last_name}
    Age: ${person.age}
    Location: ${person.location}
`);
}
