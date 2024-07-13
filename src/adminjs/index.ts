import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"
import AdminJSSrquelize from '@adminjs/sequelize'
import { sequelize } from "../database"
import { adminJsResources } from "./resources"
import { locale } from "./locale"
import { brandingOtions } from "./branding"
import { dashboardOptions } from "./dashboard"
import { authenticationOptions } from "./authentication"

AdminJS.registerAdapter(AdminJSSrquelize)

export const adminJS = new AdminJS({
	rootPath: '/admin',
	databases: [sequelize],
	resources: adminJsResources,
	locale: locale,
	branding: brandingOtions,
	dashboard: dashboardOptions
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
	adminJS,
	authenticationOptions,
	null,
	{ resave: false, saveUninitialized: false }
)