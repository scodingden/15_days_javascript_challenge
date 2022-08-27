const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//1//

const companies = new Set()
console.log(companies)

//2//

const numbers = new Set()
for(let i=0; i<=10; i++){
numbers.add(i)
}

//3//

const setOfNum = new Set()
for (const aArr of a ){
    setOfNum.add(aArr)
    console.log(setOfNum.delete(5))
}

//4//

const setOfNumC = new Set()
for (const aArr of a ){
    setOfNumC.clear()
    console.log(setOfNumC)
}

//5//

const countriesSet = new Set ()
for (const countriesSetArr of countries ){
countriesSet.add(countriesSetArr)
countriesSet.add('india')
countriesSet.add('germany')
}
//6//
countriess = [
    ['Finland', '6'],
    ['Sweden', '5'],
    ['Norway', '5'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)