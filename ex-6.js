// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length - 1; i >= 0; i = i - 1) {
  reversedCompanyName += companyName[i];
}

console.log(reversedCompanyName);
