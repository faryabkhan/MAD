// 1 charAt()
const str1 = "JAVA";
const char = str1.charAt(2);
console.log(char); 

// 2 charCodeAt()
const str2 = "java";
const unicode = str2.charCodeAt(2);
console.log(unicode); 

// 3 concat()
const str3 = "Faryab";
const str4 = "Arslan";
const concatenated = str3.concat(", ", str4);
console.log(concatenated); 

// 4 constructor
const str5 = "Programming";
const constructor = str5.constructor;
console.log(constructor);

// 5 endsWith()
const str6 = "Hello, World!";
const endsWithWorld = str6.endsWith("World!");
console.log(endsWithWorld);

// 6 fromCharCode()
const unicodeValues = [72, 101, 108, 108, 111];
const str7 = String.fromCharCode(...unicodeValues);
console.log(str7);

// 7 includes()
const str8 = "Faryab Arslan";
const containsShahukh = str8.includes("Shahukh");
console.log(containsShahukh);

// 8 indexOf()
const str9 = "Faryab is My Name";
const index = str9.indexOf("is");
console.log(index);

// 9 lastIndexOf()
const str10 = "My hometown is bahter";
const lastIndex = str10.lastIndexOf("hometown");
console.log(lastIndex);

// 10 length
const str11 = "We Are Studying MAD";
const length = str11.length;
console.log(length);

// 11 localeCompare()
const str12 = "Javascript";
const str13 = "Programming";
const comparison = str12.localeCompare(str13);
console.log(comparison); 

const str14 = "Faryab is my name";
const matches = str14.match(/F/);
console.log(matches); // Output: [ 'F', index: 0, input: 'Faryab is my name', groups: undefined ]


// 13 repeat()
const str15 = "Comsats";
const repeated = str15.repeat(4);
console.log(repeated); 

// 14 replace()
const str16 = "Java language";
const replaced = str16.replace("language", "React");
console.log(replaced);

// 15 replaceAll()
const str17 = "Java programming React.js";
const replacedAll = str17.replaceAll("programming", "React Native");
console.log(replacedAll);

// 16 search()
const str18 = "My Name is faryav";
const searchResult = str18.search("faryab");
console.log(searchResult);

// 17 slice()
const str19 = "Java Coding";
const sliced = str19.slice(4, 11);
console.log(sliced);

// 18 split()
const str20 = "Hello, Faryab!";
const parts = str20.split(" ");
console.log(parts); 

// 19 startsWith()
const str21 = "Attock is my city";
const startsWithHello = str21.startsWith("Attock");
console.log(startsWithHello);

// 20 substr()
const str22 = "Faryab Khan";
const subString = str22.substr(0, 5);
console.log(subString); 

// 21 substring()
const str23 = "Hello, World!";
const subString2 = str23.substring(7, 12);
console.log(subString2); 

// 22 toLocaleLowerCase()
const str24 = "Faryab Khan";
const lowerCase = str24.toLocaleLowerCase();
console.log(lowerCase); 

// 23 toLocaleUpperCase()
const str25 = "faryab khan";
const upperCase = str25.toLocaleUpperCase();
console.log(upperCase); 

// 24 toLowerCase()
const str26 = "Back End Developer";
const lowerCase2 = str26.toLowerCase();
console.log(lowerCase2); 

// 25 toString()
const str27 = "javascript";
const strToString = str27.toString();
console.log(strToString); 

// 26 toUpperCase()
const str28 = "Hello, World";
const upperCase2 = str28.toUpperCase();
console.log(upperCase2); 

// 27 trim()
const str29 = "   Faryab Is Rockstar   ";
const trimmed = str29.trim();
console.log(trimmed);

// 28 trimEnd()
const str30 = "   Hello, World!   ";
const trimmedEnd = str30.trimEnd();
console.log(trimmedEnd); 

// 29 trimStart()
const str31 = "   Coding , Programming   ";
const trimmedStart = str31.trimStart();
console.log(trimmedStart); 

// 30 valueOf()
const str32 = new String("My goal is Full Stack ");
const primitiveValue = str32.valueOf();
console.log(primitiveValue); 