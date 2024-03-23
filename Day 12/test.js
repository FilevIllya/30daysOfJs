//FLAGS on RexExp
// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

//Creating a pattern with RegExp Constructor
// without flag
let pattern1 = "love";
let regEx1 = new RegExp(pattern1);

//with flag
let pattern2 = "love";
let flag2 = "gi";
let regEx2 = new RegExp(pattern2, flag2);

//inside function

let regEx3 = new RegExp("love", "gi");

//Creating a pattern without RegExp Constructor

let regEx = /love/gi; //same as let regEx= new RegExp('love','gi')

////////////////////////////////////////////////////
//RegExpp Object Methods
const str4 = "I love JavaScript";
const pattern4 = /love/;
const result4 = pattern4.test(str4); //tests match
console.log(result4);

//Array containing all of the match
//match():Returns an array containing all of the matches, including capturing groups, or null if no match is found.
//If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
const str5 = "I love JavaScript";
const pattern5 = /love/;
const result5 = str5.match(pattern5);
console.log(result5);

//
const str6 = "I love JavaScript";
const pattern6 = /love/g;
const result6 = str6.match(pattern6);
console.log(result6);

//search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const str7 = "I love JavaScript";
const pattern7 = /love/g;
const result7 = str7.search(pattern7);
console.log(result7);

//replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

let matchReplaced = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced);

//
const txt2 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

let matchReplaced2 = txt2.replace(/Python/gi, "JavaScript");
console.log(matchReplaced2);

//

const txt3 =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

let matches = txt3.replace(/%/g, "");
console.log(matches);

// []: A set of characters
// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
// \: uses to escape special characters
// \d mean: match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits
// . : any character except new line character(\n)
// ^: starts with
// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.
// $: ends with
// r'substring$' eg r'love$', sentence ends with a word love
// *: zero or more times
// r'[a]*' means a optional or it can occur many times.
// +: one or more times
// r'[a]+' means at least once or more times
// ?: zero or one times
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending of a word
// {3}: Exactly 3 characters
// {3,}: At least 3 characters
// {3,8}: 3 to 8 characters
// |: Either or
// r'apple|banana' mean either of an apple or a banana
// (): Capture and group

//Square Bracket
const pattern8 = "[Aa]pple"; // this square bracket means either A or a
const txt8 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches8 = txt8.match(pattern8);

console.log(matches8);

const pattern9 = /[Aa]pple/g; // this square bracket means either A or a
const txt9 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches9 = txt9.match(pattern9);

console.log(matches9);

const pattern10 = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
const txt10 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
const matches10 = txt10.match(pattern10);

console.log(matches10);

//Get numbers

const pattern11 = /\d/g; // d is a special character which means digits
const txt11 = "This regular expression example was made in January 12,  2020.";
const matches11 = txt11.match(pattern11);

console.log(matches11); // ["1", "2", "2", "0", "2", "0"], this is not what we want

const pattern12 = /\d+/g; // d is a special character which means digits
const txt12 = "This regular expression example was made in January 12,  2020.";
const matches12 = txt12.match(pattern12);

console.log(matches12); // ["12", "2020"], this is not what we want

//Period .
const pattern13 = /[a]./g; // this square bracket means a and . means any 1 character except new line
const txt13 = "Apple and banana are fruits";
const matches13 = txt13.match(pattern13);

console.log(matches13); // ["an", "an", "an", "a ", "ar"]

const pattern14 = /[a].+/g; // . any character, + any character one or more times
const txt14 = "Apple and banana are fruits";
const matches14 = txt14.match(pattern14);

console.log(matches14); // ['and banana are fruits']

//Zero or more times(*)

const pattern15 = /[a].*/g; //. any character, + any character one or more times
const txt15 = "Apple and banana are fruits";
const matches15 = txt15.match(pattern15);

console.log(matches15); // ['and banana are fruits']

//Zero or one times(?)
//Zero or one times. The pattern may not occur or it may occur once.

const txt16 =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const pattern16 = /[Ee]-?mail/g; // ? means optional
const matches16 = txt16.match(pattern16);

console.log(matches16); // ["e-mail", "email", "Email", "E-mail"]

//////////////////////////////////
//substring that their length are 4 characters
const txt17 = "This regular expression example was made in December 6,  2019.";
const pattern17 = /\b\w{4}\b/g; //  exactly four character words
const matches17 = txt17.match(pattern17);
console.log(matches17); //['This', 'made', '2019']

//
const txt18 = "This regular expression example was made in December 6,  2019.";
const pattern18 = /\b[a-zA-Z]{4}\b/g; //  exactly four character  words without numbers
const matches18 = txt18.match(pattern18);
console.log(matches18); //['This', 'made']

//
const txt19 = "This regular expression example was made in December 6,  2019.";
const pattern19 = /\d{4}/g; // a number and exactly four digits
const matches19 = txt19.match(pattern19);
console.log(matches19); // ['2019']

//
const txt20 = "This regular expression example was made in December 6,  2019.";
const pattern20 = /\d{1,4}/g; // 1 to 4
const matches20 = txt20.match(pattern20);
console.log(matches20); // ['6', '2019']

//Starts with

const txt21 = "This regular expression example was made in December 6,  2019.";
const pattern21 = /^This/; // ^ means starts with
const matches21 = txt21.match(pattern21);
console.log(matches21); // ['This']

//Negation

const txt22 = "This regular expression example was made in December 6,  2019.";
const pattern22 = /[^A-Za-z,. ]+/g; // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches22 = txt22.match(pattern22);
console.log(matches22); // ["6", "2019"]

//
let pattern = /^[A-Z][a-z]{3,12}$/;
let name = "Asabeneh";
let result = pattern.test(name);

console.log(result); // true
