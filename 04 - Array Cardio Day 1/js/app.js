document.addEventListener("DOMContentLoaded", () => {
  const p = document.createElement("section");
  p.classList.add("section-4");
  p.innerHTML = `<p><em>Psst: 👀 have a look at the JavaScript Console</em> ⌨ F12 <p>`;

  // Get your shorts on - this is an array workout!
  // ## Array Cardio Day 1

  // Some data we can work with

  const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
  ];

  const people = [
    "Beck, Glenn",
    "Becker, Carl",
    "Beckett, Samuel",
    "Beddoes, Mick",
    "Beecher, Henry",
    "Beethoven, Ludwig",
    "Begin, Menachem",
    "Belloc, Hilaire",
    "Bellow, Saul",
    "Benchley, Robert",
    "Benenson, Peter",
    "Ben-Gurion, David",
    "Benjamin, Walter",
    "Benn, Tony",
    "Bennington, Chester",
    "Benson, Leana",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black, Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William"
  ];

  // [✅]
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const inventorsBorn1500 = inventors.filter(
    inventor => inventor.year >= 1500 && inventor.year < 1600
  );

  const pre = document.createElement("pre");
  pre.innerHTML = JSON.stringify(inventorsBorn1500, null, 2);
  p.appendChild(pre);
  console.table(inventorsBorn1500);

  // [✅]
  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names

  const arrayFullNames = inventors.map(
    inventor => `${inventor.first} ${inventor.last}`
  );
  console.table(arrayFullNames);

  // [✅]
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  const arrayBirthday = inventors.sort(
    ({ year: firstInventorBirthday }, { year: secondInventorBirthday }) =>
      firstInventorBirthday - secondInventorBirthday
  );
  console.table(arrayBirthday);

  // [✅]
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?

  const InventorsTotalYears = inventors.reduce((accumulator, inventor) => {
    return accumulator + (inventor.passed - inventor.year);
  }, 0);
  console.log(
    `%c "4.
    How
    many
    years
    did
    all
    the
    inventors
    live?"`,
    `background: #000;`,
    InventorsTotalYears
  );

  // [✅]
  // 5. Sort the inventors by years lived

  const InventorsByYearsLived = inventors.sort((a, b) => {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
  });
  console.table(InventorsByYearsLived);

  // [✅]
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // ! const category = document.querySelector(".mw-category");
  // ! const links = [...category.querySelectorAll("a")];
  // ! const deBoulevards = links
  // !   .map(link => link.textContent)
  // !   .filter(streetName => streetName.includes("de"));

  // ! console.table(deBoulevards);

  // [✅]
  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const peopleSorted = people.sort((personA, personB) => {
    const [...namesAF] = personA.split(", ");
    const [...namesBF] = personB.split(", ");

    return namesAF > namesBF;
  });
  console.table(peopleSorted);

  // [✅]
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck"
  ];

  const setSum = data.reduce((accumulator, element) => {
    accumulator[element] || (accumulator[element] = 0);
    accumulator[element]++;
    return accumulator;
  }, {});
  console.log(
    `%c "Sum up the instances of each of these:"`,
    `background: #000;`,
    setSum
  );

  document.body.appendChild(p);
  console.log(
    "%c ",
    "font-size: 1000px; background: url(https://i.cloudup.com/Zqeq2GhGjt-3000x3000.jpeg) no-repeat;"
  );
});
