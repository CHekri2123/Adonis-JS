// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class con {

    public async Calculator({request} ) {
        const x = request.input('a')
        const y = request.input('b')
        const symbol = request.input('Symbol')
        let rosh: number = Action(x,y,symbol);
        var ans: number;
        function Action(x: number,y: number,symbol: string){
            
            switch (symbol) {
                case '+':
                    ans =  x + y
                    break;
                case '-':
                    ans =  x - y
                    break;
                case '*':
                    ans =  x * y
                    break;
                case '/':
                    ans =  x / y
                    break;
                default:
                    break;
            }
            return ans
        }
        return rosh
    }
}
