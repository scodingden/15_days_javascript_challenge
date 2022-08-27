//1//

//2//
const countLanguages = new Map();
countries.forEach(name => {
    name.languages.forEach(lang => {
        if(!countLanguages.has(lang)){
            countLanguages.set(lang, 1);
        }
        else countLanguages.set(lang, countLanguages.get(lang) + 1);
    })
    
})
const sorted = [...countLanguages.entries()].sort();
console.log("Most spoken language:", sorted[0])