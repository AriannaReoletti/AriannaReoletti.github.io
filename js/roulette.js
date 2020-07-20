const cheat_meals = [
  {
    Name: "Volemose Bene",
    Url: "https://www.volemosebenemilano.it/chi_siamo/",
  },
  {
    Name: "Peperino Milano",
    Url: "http://www.peperinomilano.it/menu-category/menu/",
  },
  {
    Name: "Le Combattenti",
    Url: "https://www.trattoria-milano.it//",
  },
  {
    Name: "Le Biciclette",
    Url: "http://www.lebiciclette.com/prenotazioni.asp?useLng=",
  },
  {
    Name: "Mani in Pasta",
    Url: "https://www.maniinpastagroup.com/mani-in-pasta-via-padova",
  },
  { Name: "Stelvio Milano", Url: "https://www.stelviomilano.it/#ristorante" },
  { Name: "Metropolis", Url: "http://www.cafemetropolis.it/" },
  { Name: "Mi Scusi", Url: "https://www.miscusi.com/it/" },
  {
    Name: "Pizzeria Pt Garibaldi",
    Url: "http://www.pizzeriaportagaribaldi.com/",
  },
  { Name: "All'Isola", Url: "https://www.all-isola.com/" },
  { Name: "Karbon y Limon", Url: "http://www.dkarbonylimon.com/" },
  { Name: "Beirut", Url: "http://www.ristorantebeirut.it/" },
  { Name: "California Bakery", Url: "http://www.californiabakery.it/" },
  { Name: "Acai Sister", Url: "https://www.acaisisters.com/" },
  { Name: "Hygge", Url: "http://www.hyggecorner.com/" },
  { Name: "Le Biciclette", Url: "http://www.lebiciclette.com/" },
  { Name: "Fuorimano", Url: "http://fuorima.no/otbp.html" },
  {
    Name: "Golfo di Mondello",
    Url: "https://m.facebook.com/GolfoDiMondelloMilano",
  },
  { Name: "Flower Burger", Url: "https://www.flowerburger.it/" },
  { Name: "Hamerica's", Url: "https://www.hamericas.com/" },
  { Name: "100 Montaditos", Url: "https://italy.100montaditos.com/it/menu/" },
  { Name: "Macha Cafe", Url: "https://www.machacafe.it/" },
  { Name: "Avobrothers", Url: "https://www.avobrothers.com/food" },
  { Name: "Grezzo", Url: "https://grezzorawchocolate.com/" },
  {
    Name: "La Romana",
    Url: "https://www.gelateriaromana.com/53-gelateria-milano.php",
  },
  { Name: "Kanji", Url: "http://www.kanjimilano.com/" },
];

const rouletteContainer = document.querySelector(".roulette-container");
const roulette = document.querySelector(".roulette");
const linkTo = document.querySelector(".link-to");
const spin = document.querySelector(".spin");

spin.addEventListener("click", () => {
  rouletteContainer.classList.remove("tada");

  const total = cheat_meals.length;
  const selected = Math.floor(Math.random() * total);

  for (let i = 0; i <= total; i++) {
    setTimeout(
      ((i) => {
        return () => {
          roulette.innerText = cheat_meals[i % total].Name;
          linkTo.href = cheat_meals[i % total].Url;
          if (i === selected) {
            roulette.classList.add("tada");
          }
        };
      })(i),
      i * 100
    );

    if (i === selected) {
      break;
    }
  }
});
