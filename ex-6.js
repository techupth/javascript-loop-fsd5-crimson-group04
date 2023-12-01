// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let i = [];
for (let letter of companyName) {
  i.push(letter);
}

for (let j = companyName.length - 1; j >= 0; j--) {
  reversedCompanyName = reversedCompanyName + i[j];
}
console.log(reversedCompanyName);
