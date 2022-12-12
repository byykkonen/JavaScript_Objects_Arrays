console.log("Hello World!\n==========\n");
3
// Exercise 1 Section
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

    arr.forEach((numbers) => {
        sum += numbers;
    });

    return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

// Exercise 2 Section
let favBook = {};

favBook.title = "A Court of Thorns and Roses";
favBook.author = "Sarah J. Maas";
favBook.pageCount = 650;
favBook.readCount = 3;

console.log(favBook);

function info() {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s)`;
};

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
    title: "Harry Potter", 
    author: "J.K. Rolling",
    pageCount: 400,
    info, 
};

console.log(favBook2.info());

// Exercise 3 Section
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let result = [];

    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord);
    }

    return result.join(" ");
}
    
console.log(reverseWords(sentence));
console.log(reverseWords("I am woman"));

// Exercise 4 Section
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    let header = data.slice(0, data.indexOf("\n")).split(",");
    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

    const customArr = valuesList.map((row) => {
        let values = row.split(",");
        let obj = {};

        values.forEach((col, idx) => {
            if (idx < header.length) {
                obj[header[idx]] = col;
            } else {
                obj['misc${idx}'] = col;
            }
        });

        return obj;
    });
    return customArr;
}

console.log(csvConverter(csvData));