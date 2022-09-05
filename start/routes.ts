

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})


Route.group(() => {
  Route.post('/empInsert', 'EmployeesController.insertIntoEmployee')
  Route.get('/empRead', 'EmployeesController.readEmployee')
  Route.get('/empReadbyid/:id', 'EmployeesController.readEmployeeById')
  Route.patch('/empUpdate', 'EmployeesController.update_employee')
  Route.delete('/empDelete', 'EmployeesController.deleteEmployee')
}).middleware('Appkey').prefix('/employee')


Route.group(() => {
  Route.post('/depInsert', 'DepartmentsController.insert_department')
  Route.get('/depRead', 'DepartmentsController.read_department')
  Route.get('/depReadbyid/:id', 'DepartmentsController.read_department_by_id')
  Route.patch('/depUpdate', 'DepartmentsController.update_department')
  Route.delete('/depDelete', 'DepartmentsController.delete_department')
}).middleware('Appkey').prefix('/department')

Route.group(() => {
  Route.get('/jointable', 'DepartmentsController.jointable')
  Route.get('/order_salary', 'EmployeesController.orderSalary')
  Route.get('/sum_salary', 'EmployeesController.sumSalary')

}).middleware('Appkey')