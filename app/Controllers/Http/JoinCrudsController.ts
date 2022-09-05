// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class JoinCrudsController {
    public async join(){
        const table = Database
            .from('employees')
            .join('departments','departments.dept','=','employees.dept')
            .select('employees.*')
            .select('employees.name')
        return table

    }
}
