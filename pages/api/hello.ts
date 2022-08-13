import { connectToDatabase } from 'utils/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | string>) {
  if (req.body.email && req.body.password) {
    const { email, password } = req.body

    const { db } = await connectToDatabase()
    const userExist = await db.collection('users').findOne({ email })

    console.log(userExist)

    if (userExist) {
      if (userExist) return res.status(409).send(`User with email ${email} already exist`)
    }
  }

  const session = await getSession({ req })

  if (!session) return res.status(403).send('Forbidden')

  res.status(200).json({ name: 'John Doe' })
}
