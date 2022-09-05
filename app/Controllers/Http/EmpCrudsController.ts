// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Employee from "App/Models/Employee";

export default class EmpCrudsController {
    public async EmpInsert({request,response}:HttpContext){
        const insert = new Employee()
        insert.name = request.input('Name_Of_Emp')
        insert.dept = request.input('Dept_Of_Emp')
        await insert.save()
        return response.json({insert})
    }
    public async EmpDisplay(){
        return await Employee.all()
    }
    public async EmpUpdate({request}){
        const update = await Employee.findByOrFail('id',5)
        update.name = request.input('Name_Of_Emp')
        update.dept = request.input('Dept_Of_Emp')
        await update.save()
        return Employee.all()
    }
    public async EmpDelete(){
        const delete1 = await Employee.findByOrFail('id',3)
        delete1.delete()
        await delete1.save()
        return Employee.all()
      }
    public async EmpGetById({request}:HttpContext){
        const id = request.input('id')
        const getById = await Employee.find(id)
        return getById
    }
    public async EmpGetByName({request}:HttpContext){
        //const emp = new Employee()
        const empName = request.input('name')
        const get = await Employee.findBy('name',empName)
        return get
    }
}
