// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone"
import Department from "App/Models/Department"

export default class DeptCrudsController {
    public async DeptInsert({request,response}:HttpContext){
        const insert = new Department()
        insert.id = request.input('id')
        insert.dept = request.input('Dept')
        insert.dev = request.input('Dev')
        await insert.save()
        return response.json({insert})
    }
    public async DeptDisplay(){
        return await Department.all()
    }
    public async DeptUpdate({request}){
        const update = await Department.findByOrFail('id',2)
        update.dept = request.input('Dept')
        update.dev = request.input('Dev')
        await update.save()
        return Department.all()
    }
    public async DeptDelete(){
        const delete1 = await Department.findByOrFail('id',3)
        delete1.delete()
        await delete1.save()
        return Department.all()
      }
}
