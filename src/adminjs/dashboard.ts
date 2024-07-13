import AdminJS, { PageHandler } from "adminjs"
import { Category, Course, Episode, User } from "../models"

export const dashboardOptions: {
  handler?: PageHandler
  component?: string
} = {
  component: AdminJS.bundle('../adminjs/components/Dashboard'),
  handler: async (req, res, ctx) => {
    const [courses, episodes, category, standardUsers] = await Promise.all([
      Course.count(),
      Episode.count(),
      Category.count(),
      User.count({ where: { role: 'user' } })
    ])

    res.json({
      'Cursos': courses,
      'Episódios': episodes,
      'Categorias': category,
      'Usuários': standardUsers
    })
  }
}