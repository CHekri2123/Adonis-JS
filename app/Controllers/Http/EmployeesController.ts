import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'
import EmployeeValidator from '../../Validators/EmployeeValidator';
import Database from '@ioc:Adonis/Lucid/Database';
export default class EmployeesController {



    public async insertIntoEmployee({ request, response }: HttpContextContract) {
        const employee = new Employee()
        const payload = await request.validate(EmployeeValidator)
        employee.emp_name = payload['name']
        employee.salary = payload['salary']
        employee.mobile_no = payload['mobile_no']
        await employee.save()
        return response.json({ employee })
    }

    public async readEmployee() {
        return await Employee.all()
    }

    public async readEmployeeById({ request }: HttpContextContract) {
        const readEmp = await Employee.findByOrFail('id', request.params().id)
        return readEmp
    }

    public async update_employee({ request }: HttpContextContract) {
        const payload = await request.validate(EmployeeValidator)
        const emp = await Employee.findByOrFail('id', payload['id'])
        emp.emp_name = payload['empname']
        emp.salary = payload['salary']
        emp.mobile_no = payload['mobile_no']
        await emp.save()
        return Employee.all()
    }

    public async deleteEmployee({ request }: HttpContextContract) {
        const payload = await request.validate(EmployeeValidator)
        const emp1 = await Employee.findByOrFail('id', payload['id'])
        emp1.delete()
        await emp1.save()
        return Employee.all()
    }

    public async orderSalary() {
        const ordertable = await Database.from('employees')
            .select('empname')
            .select('salary')
            .orderBy('salary', 'asc')
        return ordertable
    }
    public async sumSalary() {
        const searchitem = await Database.rawQuery('select sum(salary) as sum from employees')
        return searchitem

    }
}