
import Server from '@ioc:Adonis/Core/Server'

Server.middleware.registerNamed({
  Appkey:()=>import('App/Middleware/AppKey')
})