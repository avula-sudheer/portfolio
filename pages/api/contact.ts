import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const { name, email, message } = req.body

  // For now just echo back. In production wire this to an email service or serverless function.
  return res.status(200).json({ ok: true, name, email, message })
}
