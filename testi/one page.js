const cars = [
  {
    make: "Ford",
    model: "Mustang",
    year: 1984,
    color: "Blue",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "Toyota",
    model: "Camry",
    year: 2009,
    color: "Silver",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2004,
    color: "White",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "Chevrolet",
    model: "Silverado",
    year: 2001,
    color: "Black",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },

  {
    make: "bmw ",
    model: "M4",
    year: 2014,
    color: "yellow",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "mersedes",
    model: "benz",
    year: 2015,
    color: "Silver",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "toyota",
    model: "supra mk4",
    year: 2019,
    color: "red",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "nissan",
    model: "gtr r34",
    year: 2013,
    color: "blue",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "subaru",
    model: "forester",
    year: 2020,
    color: "blue",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "nissan",
    model: "370z",
    year: 2021,
    color: "blue",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
  {
    make: "porsche",
    model: "911",
    year: 2019,
    color: "blue",
    banner: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`,
  },
];

const container = document.getElementById("container");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const carAlreadyExists = cars.find((car) => car.make === form.make.value);

  if (carAlreadyExists) {
    console.log("A car with the same make already exists!");
    return;
  }

  const newCar = {
    make: form.make.value,
    model: form.model.value,
    year: Number(form.year.value),
    color: form.color.value,
    banner: form.banner.value,
  };

  cars.push(newCar);

  createCarsCard(newCar);
});

function createCarsCard(cars) {}

cars.forEach((car) => {
  createCarsCard(car);
});

function createCarsCard(car) {
  const card = document.createElement("div");
  card.className = "card";

  container.appendChild(card);

  const banner = document.createElement("img");
  banner.src = car.banner;
  banner.className = "banner";
  card.appendChild(banner);

  const make = document.createElement("p");
  make.textContent = "make: " + car.make;
  card.appendChild(make);

  const year = document.createElement("p");
  year.textContent = "release year: " + car.year;
  card.appendChild(year);

  const model = document.createElement("p");
  model.textContent = "cars model: " + car.model;
  card.appendChild(model);

  const deleteCard = document.createElement("img");
  deleteCard.src = "remove.png";
  deleteCard.className = "delete";
  card.appendChild(deleteCard);

  deleteCard.addEventListener("click", () => {
    const index = cars.findIndex((item) => item.make === car.make);
    if (index !== -1) {
      cars.splice(index, 1);
    }
    card.remove();
  });

  const editCard = document.createElement("img");
  editCard.src = "285638_pencil_icon.png";
  editCard.className = "editCard";
  card.appendChild(editCard);
}
