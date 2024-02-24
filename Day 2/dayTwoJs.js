//LVL1
//1
let challenge = "30 Days Of JavaScript";

//2
console.log(challenge);

//3
console.log(challenge.length);

//4
challenge = challenge.toUpperCase();
console.log(challenge);

//5
challenge = challenge.toLowerCase();
console.log(challenge);

//6
let substr = challenge.substring(0, 2);
console.log(substr);

//7
substr = challenge.substring(3, 21);
console.log(substr);

//8
let check = challenge.includes("script");
console.log(check);

//9
let array = challenge.split();
console.log(array);

//10
array = challenge.split(" ");
console.log(array);

//11
let corporations = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
corSplitArray = corporations.split(", ");
console.log(corSplitArray);

//12
challenge = "30 Days Of JavaScript";
console.log(challenge.replace("JavaScript", "Python"));

//13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt("J"));

//15
console.log(challenge.indexOf("a"));

//16
console.log(challenge.lastIndexOf("a"));

//17
let becauseString =
  "You cannot end a sentence with because because because is a conjunction";
console.log(becauseString.indexOf("because"));

//18
console.log(becauseString.lastIndexOf("because"));

//19
console.log(becauseString.search("because"));

//20
challenge = " 30 Days Of JavaScript ";
console.log(challenge);
console.log(challenge.trim());

//21
challenge = "30 Days Of JavaScript";
console.log(challenge.startsWith("30"));

//22
console.log(challenge.endsWith("ript"));

//23
let pattern = /a/gi;
console.log(challenge.match(pattern));

//24
let substr1 = "30 Days of";
let substr2 = " JavaScript";
substr = substr1.concat(substr2);
console.log(substr);

//25
console.log(challenge.repeat(2));

//LVL2
//1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\
   by John Holmes teaches us to help one another."
);

//2
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love.\
   Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

//3
let tenVar = "10";
console.log("10" == 10);
console.log(typeof tenVar);
tenVar = parseInt(tenVar);
console.log(typeof tenVar);

//4
console.log(parseFloat("9.8"));
console.log(Math.ceil("9.8"));

//5
let pyString = "Python";
let jaString = "jargon";
console.log(pyString.search("on"));
console.log(jaString.search("on"));

//6
jaString = "I hope this course is not full of jargon";
console.log(jaString.search("jargon"));

//7
console.log(Math.floor(Math.random() * 101));

//8
console.log(Math.floor(Math.random() * 51 + 50));

//9
console.log(Math.floor(Math.random() * 256));

//10
let jsString = "JavaScript";
console.log(jsString[Math.floor(Math.random() * jsString.length)]);

//11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//12
let threeBec =
  "You cannot end a sentence with because because because is a conjunction";

let sStr = threeBec.substring(31, 54);
console.log(sStr);

//3LVL
//1
let loveStr =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
pattern = /love/gi;
console.log(loveStr.match(pattern).length);

//2
pattern = /because/gi;
console.log(threeBec.match(pattern).length);

//3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding\
  as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.\
  %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let cleanStr = sentence.replace(/[^a-zA-Z\s]/g, "");
console.log(cleanStr);

//4
let moneyStr =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

pattern = /\d+/g;
let moneyArray = moneyStr.match(/\d+/g);

let m1 = parseInt(moneyArray[0]);
let m2 = parseInt(moneyArray[1]);
let m3 = parseInt(moneyArray[2]);

let yearMoney = m1 * 12 + m2 + m3 * 12;
console.log(yearMoney);

//TEST
let number = prompt("Enter number", "number goes here");
console.log(number);
