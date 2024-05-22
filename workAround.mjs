import Employee, { getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement } from './employee.mjs';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre.call(Employee));
  console.log('Tax: ' + tax.call(Employee));
  console.log('Benefits: ' + benefits.call(Employee));
  console.log('Bonus: ' + bonus.call(Employee));
  console.log('Reimbursement Eligibility: ' + reimbursement.call(Employee) + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
