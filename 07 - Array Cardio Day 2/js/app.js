document.addEventListener("DOMContentLoaded", () => {
  console.error("07 - array Cardio Day 2");

  const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
  ];

  const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 }
  ];

  console.table(people);
  console.table(comments);

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isOlderThan19 = people.some(
    p => p.year >= new Date().getFullYear() - 19
  );
  console.log(
    `Array.prototype.some()
    // is at least one person 19 or older?
    :`,
    isOlderThan19
  );

  // Array.prototype.every() // is everyone 19 or older?
  const isEveryOlderThan19 = people.every(
    p => p.year >= new Date().getFullYear() - 19
  );
  console.log(
    `Array.prototype.every()
    // is everyone 19 or older?
    :`,
    isEveryOlderThan19
  );

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const findId = comments.find(e => e.id === 823423);
  console.warn(` // find the comment with the ID of 823423 : ${findId.text}`);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  // ! const findIndex = comments[comments.findIndex(e => e.id === 823423)];
  // ! console.warn(findIndex);
  // ! const result = new Set(comments);
  // ! console.error(result)
  // ! ok just simple

  let index = comments.findIndex(el => el.id === 823423);
  console.log(index);

  let newArrayComment = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
  ];
  console.table(newArrayComment);
});
