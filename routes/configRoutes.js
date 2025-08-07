import { complaintRoutes } from "./complaints.js"
import { loginRoutes } from "./login.js"

const configRoutes = (app) => {
    app.use('/login', loginRoutes)
    app.use('/', complaintRoutes)
}

export {
    configRoutes
}