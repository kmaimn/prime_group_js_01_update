//created an empty array to hold employee information
var employees = [];
//created and object constructor to collect employee information
function Person(name, number, salary, rating){
	this.name = name;
	this.number = number;
	this.salary = Math.round(parseFloat(salary));
	this.rating = rating;
}
//created object variables of employees, using new Person
var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);
//push objects to employees array
employees.push(atticus, jem, boo, scout);
console.log(employees);
//function that will determine bonus amount
function calculateSTI(empInfo){

    var bonusPercent = 0;
    var bonusMoney = 0;
    var totalSalary = 0;
//array will hold new employee information
		var processedEmployee = [];
//switch will be used to determine the bonus percent amount, based on rating
    switch(empInfo.rating){
        case 0:
        case 1:
        case 2:
            bonusPercent = 0;
            break;
        case 3:
            bonusPercent = .04;
            break;
        case 4:
            bonusPercent = .06;
            break;
        case 5:
            bonusPercent = .10;
            break;
        default:
            bonusPercent = 0;

    }
//pull number, salary from the employee array; bonus percent from swtich
    bonusPercent = adjustBonusPercent(empInfo.number, bonusPercent, empInfo.salary);
//put info in the new array
    processedEmployee[0] = empInfo.name;
    processedEmployee[1] = bonusPercent;

    bonusMoney = Math.round(bonusPercent * empInfo.salary);
    totalSalary = bonusMoney + empInfo.salary;

    processedEmployee[2] = totalSalary;
    processedEmployee[3] = bonusMoney;

    return processedEmployee;

}
//used to adjust bp if necessary
function adjustBonusPercent(number, bonusPercent, salary){
    console.log("first parameter check ", bonusPercent)
    if(number.length == 4){
        bonusPercent += .05;
    }

    if(salary > 65000){
        bonusPercent -= .01;
    }

    if(bonusPercent > .13){
        bonusPercent = .13;
    }
    return bonusPercent;
}
//loop through employees array and console log new array-processed employee
for(var i = 0; i < employees.length ; i++){
    console.log(calculateSTI(employees[i]));
}
