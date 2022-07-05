export type Employee = {
  id: number;
  employee_age: number;
  employee_name: string;
  employee_salary: number;
  profile_image: string;
};

export type EmployeesData = Array<Employee>;

export type Employees = {
  data: EmployeesData;
  status: 'PENDING' | 'FULFILLED' | 'REJECTED';
}