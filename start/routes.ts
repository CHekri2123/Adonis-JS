

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/employeeInsert','EmpCrudsController.EmpInsert')

Route.get('/empDisplay','EmpCrudsController.EmpDisplay')

Route.put('/empUpdate','EmpCrudsController.EmpUpdate')

Route.patch('/empDelete','EmpCrudsController.EmpDelete')

Route.post('/empSearchByName','EmpCrudsController.EmpGetByName')

Route.post('/empSearchById','EmpCrudsController.EmpGetById')



Route.post('/deeptInsert','DeptCrudsController.DeptInsert')

Route.get('/DeptDisplay','DeptCrudsController.DeptDisplay')

Route.put('/DeptUpdate','DeptCrudsController.DeptUpdate')

Route.patch('/DeptDelete','DeptCrudsController.DeptDelete')

Route.post('/DeptSearchByName','DeptCrudsController.DeptGetByName')

Route.post('/DeptSearchById','DeptCrudsController.DeptGetById')


Route.get('/joinsEmployee','JoinCrudsController.join')

Route.get('/joinsDept','JoinCrudsController.join')


