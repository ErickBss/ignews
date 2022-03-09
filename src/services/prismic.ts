import * as Prismic from '@prismicio/client'
import fetch from 'node-fetch'

export function getPrismicClient(req?: any) {
  const prismic = Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    fetch: req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  return prismic
}
