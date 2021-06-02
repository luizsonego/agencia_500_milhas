import { useRouter } from "next/router"
import ConnectionModal from '../../components/connectionModal'

import { getConnBySlug, getAllConn } from '../../lib/apiConn'
import markdownToHtml from '../../lib/markdownToHtml'

export default function ConnectionPage({ post }) {
  return (
    <div>
      <ConnectionModal connectionCode={post} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getConnBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}


export async function getStaticPaths() {
  const posts = getAllConn(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
