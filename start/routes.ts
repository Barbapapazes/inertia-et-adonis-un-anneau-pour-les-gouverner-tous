/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () => import('#controllers/register_controller')
import router from '@adonisjs/core/services/router'

router.get('/', ({ view }) => {
  return view.render('home', {
    event: 'Node.js Paris',
    time: new Date().toLocaleString(),
  })
})

// ---

router.post('register', [RegisterController, 'store'])
