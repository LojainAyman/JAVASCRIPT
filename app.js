
let myname = "lojain \\\" "
let myage = 25.3
let myhighest = 165.9
let myNumber = 2

// console.log(myname)
// console.log(myname.length)
// console.log(Math.round(myage))
// console.log(Math.floor(myhighest))
// console.log(Math.ceil(myhighest))
// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10))
// console.log(Math.pow(myNumber,2))
// console.log(Math.sqrt(9))

 let myStudents = ["ahmad","omar","enas","ghadeer","farah"]
 console.log(myStudents)
// console.log(myStudents[0][0])
// console.log(myStudents.length)


// console.log(myStudents.pop())
// console.log(myStudents)

// console.log(myStudents.push("hashem"))
// console.log(myStudents)

// console.log(myStudents.indexOf('omar'))

for (let i = 0 ; i < myStudents.length ; i++) {
// console.log(i)    

// console.log(myStudents)

// console.log(myStudents[i])
//console.log(myStudents[i][0])


if (myStudents[i][0]=='a') {
    console.log(myStudents[i])
}else{
    console.log("sorry this name is not starting with your letter")
}
}