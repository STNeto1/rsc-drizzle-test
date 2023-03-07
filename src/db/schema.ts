import { serial, timestamp } from 'drizzle-orm/mysql-core/columns'
import { mysqlTable } from 'drizzle-orm/mysql-core/table'

export const accesses = mysqlTable('accesses', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at').defaultNow()
})
