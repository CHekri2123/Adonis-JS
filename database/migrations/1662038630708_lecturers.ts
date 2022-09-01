import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'lecturers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('lecturer_id',10)
      table.string('lecturer_name',20)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
