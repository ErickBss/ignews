import * as Prismic from '@prismicio/client'
import fetch from 'node-fetch'

export function getPrismicClient() {
  const prismic = Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    fetch,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })
  return prismic
}
