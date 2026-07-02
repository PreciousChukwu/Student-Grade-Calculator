const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
const unit = document.getElementById("unit").value;
const classwork = Number(document.getElementById("classwork").value);
const attendance = Number(document.getElementById("attendance").value);
const assignment = Number(document.getElementById("assignment").value);
const midSemester = Number(document.getElementById("mid-semester").value);
const exam = Number(document.getElementById("exam").value);

const totalScore = classwork + attendance + assignment + midSemester + exam;
let grade;
if(totalScore >= 80){
    grade = "A";
}
else if(totalScore >=70){
    grade = "B";
}
else if(totalScore >=60){
    grade = "C";
}
else if(totalScore >=50){
    grade = "D";
}
else if(totalScore >=45){
    grade = "E";
}
else{
    grade = "F";
}

document.getElementById("result").style.display = "block";
document.getElementById("displayName").textContent = "Name: " + name;
document.getElementById("displayUnit").textContent = "Course Unit: " + unit;
document.getElementById("displayScore").textContent = "Score: " + totalScore + "/100";
document.getElementById("displayGrade").textContent = "Grade: " + grade;
});
