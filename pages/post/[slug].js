import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { PostDetail, Categories, PostWidget, Comments, CommentsForm, Loader, AdjacentPosts, Subscription } from '../../components'
import { getPosts, getPostDetails } from '../../services'

const PostDetails = ({ post }) => {

  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      <div className="container mx-auto md:px-10 px-2 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Head>
            <title>{post.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
              <Subscription />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PostDetails

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  return {
    props: {
      post: data,
    },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
