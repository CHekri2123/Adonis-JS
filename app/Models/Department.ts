import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Department extends BaseModel {
  @column({ isPrimary: true })
  public dep_id: number

  @column()
  public dep_name:string

  @column()
  public emp_name:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
