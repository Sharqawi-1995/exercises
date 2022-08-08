const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
var people =[]
for(i in names){
people.push({"name": names[i], "age":ages[i] })

}
console.log(people)