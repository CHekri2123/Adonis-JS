import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Department from '../../Models/Department';
import DepartmentValidator from '../../Validators/DepartmentValidator';
import Database from '@ioc:Adonis/Lucid/Database';



export default class DepartmentsController {
    
    public async insert_department({ request, response }: HttpContextContract) {
        const departments = new Department()
        const payload = await request.validate(DepartmentValidator)
        departments.dep_name = payload['depname']
        departments.emp_name = payload['empname']
        departments.save()
        return response.json({ departments })
    }
    
    public async read_department() {
        return await Department.all()
    }
    
    public async read_department_by_id({ request }: HttpContextContract) {
        const readid = await Department.findByOrFail('depid', request.params().id)
        return readid

    }
    
    public async update_department({ request }: HttpContextContract) {
        const payload = await request.validate(DepartmentValidator)
        const dep = await Department.findByOrFail('depid', payload['id'])
        dep.dep_name = payload['depname']
        dep.emp_name = payload['empname']
        await dep.save()
        return Department.all()
    }
   
    public async delete_department() {
        const dep1 = await Department.findByOrFail('depid', 3)
        dep1.delete()
        await dep1.save()
        return Department.all()
    }
    public async jointable() {
        const tablejoin = await Database.from('employees')
            .join('departments', 'employees.empname', '=', 'departments.empname')
            .select('departments.depname')
            .select('employees.empname')
            .select('employees.mobile_no')
            .select('employees.salary')
            .where('id', 1)
        return tablejoin
    }
}