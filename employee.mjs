let Employee = {
    salary: 100000,
    payGrades: {
      entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
      midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
      seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
    },
    getCadre() {
      if (this.salary >= this.payGrades.entryLevel.minSalary && this.salary <= this.payGrades.entryLevel.maxSalary) {
        return 'entryLevel';
      } else if (this.salary >= this.payGrades.midLevel.minSalary && this.salary <= this.payGrades.midLevel.maxSalary) {
        return 'midLevel';
      } else {
        return 'seniorLevel';
      }
    },
    calculateTax() {
      return this.payGrades[this.getCadre()].taxMultiplier * this.salary;
    },
    getBenefits() {
      return this.payGrades[this.getCadre()].benefits.join(', ');
    },
    calculateBonus() {
      return .02 * this.salary;
    },
    reimbursementEligibility() {
      let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
      let totalBenefitsValue = 0;
      let employeeBenefits = this.payGrades[this.getCadre()].benefits;
      for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
      }
      return totalBenefitsValue;
    }
  };
  
  export const { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } = Employee;
  export default Employee;
  