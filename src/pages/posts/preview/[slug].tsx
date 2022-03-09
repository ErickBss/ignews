import { RichText } from 'prismic-dom'

import { GetStaticProps } from 'next'

import { getPrismicClient } from '../../../services/prismic'
import Head from 'next/head'

import styles from '../post.module.scss'

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  )
}

export const getStatitcPaths = () => {}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const prismic = getPrismicClient()

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asText(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'eng-US',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  }

  return {
    props: {
      post,
    },
  }
}
