import { registerValidator } from '#validators/register'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  public async store({ request, response }: HttpContext) {
    await request.validateUsing(registerValidator)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return response.redirect('register')
  }
}
