import { complaintRoutes } from "./complaints.js"
import { loginRoutes } from "./login.js"
import { registerRoutes } from "./register.js"

const configRoutes = (app) => {
    app.use('/login', loginRoutes)
    app.use('/register', registerRoutes)
    app.use('/', complaintRoutes)
}

export {
    configRoutes
}