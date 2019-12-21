document.addEventListener("DOMContentLoaded", () => {
  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.classList.add("section-14");

  section.innerHTML = `<div class="section">console.log master</div>`;
  fragment.appendChild(section);
  document.body.appendChild(fragment);

  // ! start with strings, numbers and booleans
  let age = 88;
  let age2 = age;
  console.log(age, age2);
  age = 220;
  console.log(age, age2);

  let name = "Dominik";
  let name2 = name;
  console.log(name, name2);
  name = "Grzegorz";
  console.log(name, name2);

  // ! Let's say we have an array
  const players = ["Mietek", "Heniek", "Janusz", "Gienio"];

  // ! and we want to make a copy of it.
  const team = players;

  console.log(players, team);
  // ! You might think we can just do something like this:
  team[2] = "Zmiennik";

  // ! however what happens when we update that array?
  // ! now here is the problem!
  // ! oh no - we have edited the original array too!
  // ! Why? It's because that is an array reference, not an array copy. They both point to the same array!
  // ! So, how do we fix this? We take a copy instead!
  const team2 = players.slice();
  console.log("team2 :", team2);

  // ! one way
  // ! or create a new array and concat the old one in
  const team3 = [].concat(players);

  // ! or use the new ES6 Spread
  const team4 = [...players];
  team4[3] = "Tadam Magic";
  console.log(team4);

  const team5 = Array.from(players);
  console.log("team5 :", team5);

  // ! now when we update it, the original one isn't changed
  // ! The same thing goes for objects, let's say we have a person object
  // ! with Objects
  const person = {
    name: "Dominik Palacz",
    age: 18
  };

  // ! and think we make a copy:
  const captain = person;
  captain.number = 19;

  // ! how do we take a copy instead?
  const cap2 = Object.assign({}, person, { number: 98, age: 42 });
  console.log(cap2);

  // ! We will hopefully soon see the object ...spread
  const objectWorks = { ...person };
  console.log("objectWorks :", objectWorks);

  // ! Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

  const dominik = {
    name: "Dominik",
    age: 10,
    social: {
      twitter: "@dominik",
      facebook: "dominik.js"
    }
  };

  console.log(dominik);

  const dev = Object.assign({}, dominik);
  console.log("dev s:", dev);
  dev.social.twitter = "change";
  console.log("dev e:", dev);

  const dev2 = JSON.parse(JSON.stringify(dominik));
  console.log("dev2 a:", dev2);
  dev2.social.twitter = "change2";
  console.log("dev2 z:", dev2);

  const dev3 = { ...dev };
  console.log("dev3 { ...dev }:", dev3);
  dev3.social.twitter = "change3"; // !!!!!!! no ;(
  console.log("dev3 { ...dev }:", dev3);
});
