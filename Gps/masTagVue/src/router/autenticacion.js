const isAuthenticatedGuard = async (to, from, next) => {

    return new Promise(() => {

        const random = Math.random() * 100

        if (random > 50) {
            console.log('está autenticado')
            next()
        } else {
            console.log('bloqueado por el isAuthenticatedGuard', random)
            next({ name: 'login' })
        }

    })

}

export default isAuthenticatedGuard
