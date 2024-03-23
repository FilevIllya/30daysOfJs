//LVL1
//1
console.log("LVL1");
console.log("Task 1");

const str1 =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const pattern1 = /\d+/g;

const numArray = str1.match(pattern1);

let sum = 0;

numArray.forEach((element) => {
  sum += parseFloat(element);
});

console.log(sum);

//2
console.log("Task 2");
const str2 =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";

const pattern2 = /-?\d/g;

const points = str2.match(pattern2);

console.log(points);

const sortedPoints = points.sort((a, b) => a - b);

console.log(sortedPoints);

let distance =
  parseFloat(sortedPoints[sortedPoints.length - 1]) -
  parseFloat(sortedPoints[0]);
console.log(distance);
// points.sort();

//3
console.log("Task 3");

let is_valid_variable = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

let result = is_valid_variable.test();

//LVL2
//1
console.log("LVL2");
console.log("Task 1");

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(text) {
  const words = text.match(/\b\w{1,100}\b/g);
  const wordsCounts = {};
  words.forEach((element) => {
    wordsCounts[element] = (wordsCounts[element] || 0) + 1;
  });
  console.log(wordsCounts);

  const sortedWordsCounts = Object.entries(wordsCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const result = sortedWordsCounts
    .slice(0, 10)
    .map(([word, count]) => ({ word, count }));

  return result;
}

console.log(tenMostFrequentWords(paragraph));

//LVL3
//1
console.log("LVL3");
console.log("Task 1");

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function clearAndCount(text) {
  const clearText = text.replace(/[^A-Za-z0-9,. ]+/g, "");
  const words = clearText.match(/\b\w{1,100}\b/g);

  const wordsCounts = {};
  words.forEach((element) => {
    wordsCounts[element] = (wordsCounts[element] || 0) + 1;
  });

  const sortedWordsCounts = Object.entries(wordsCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const result = sortedWordsCounts
    .slice(0, 3)
    .map(([word, count]) => ({ word, count }));

  return result;
}

console.log(clearAndCount(sentence));
