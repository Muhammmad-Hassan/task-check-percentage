

let percentage = +prompt("Enter Your Percentage")

if (percentage > 100) {
    console.log("Please Enter 1 to 100 Number")
}
else if (percentage >= 90) {
    console.log("A+")
}
else if (percentage >= 85) {
    console.log("A")
}
else if (percentage >= 80) {
    console.log("A-")
}
else if (percentage >= 75) {
    console.log("B+")
}
else if (percentage >= 71) {
    console.log("B")
}
else if (percentage >= 68) {
    console.log("B-")
}
else if (percentage >= 64) {
    console.log("C+")
}
else if (percentage >= 61) {
    console.log("C")
}
else if (percentage >= 57) {
    console.log("C-")
}
else if (percentage >= 53) {
    console.log("D+")
}
else if (percentage >= 50) {
    console.log("D")
}
else if (percentage == "") {
    console.log("Enter Percentage Please")
}
else {
    console.log("You are fail")
}

