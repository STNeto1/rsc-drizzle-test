import { db } from '~/db/db'
import { accesses } from '~/db/schema'

export default async function Home() {
  console.log('=== RUNNING ON SERVER ===')

  const result = await db.insert(accesses).values({
    created_at: new Date()
  })

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>{result.insertId} accesses</h1>
    </main>
  )
}
