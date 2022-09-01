// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone"
import Database from "@ioc:Adonis/Lucid/Database"

//import { HttpContext } from "@adonisjs/core/build/standalone";


export default class JoinsController {
    public async join({response}:HttpContext){
        const value = await Database.from('students')
        .join('courses', 'students.course_id', '=','courses.course_id')
        .select('students.*')
        .select('courses.*')

        return response.json({value})
    }
}
