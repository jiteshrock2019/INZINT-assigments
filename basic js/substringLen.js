let string = "i am learning english in english with subtitles in english";
let substring = "english";

let index = 2;

console.log("The length of the string after occurence of english word 2nd time is: "+
                string.slice(string.split(substring,index).join('').length + index*substring.length, string.length).length);
