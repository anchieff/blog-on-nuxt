export default function (context) {
  console.log('[Middleware] Just Auth')
  if (!context.store.getters.isAuth) {
    context.redirect('/admin/auth')
  }
}
