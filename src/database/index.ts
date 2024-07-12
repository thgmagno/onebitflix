import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_development',
  username: 'postgres',
  password: 'postgres',
  define: {
    // para converter variaveis snake_case para camelCase automaticamente
    underscored: true
  }
})