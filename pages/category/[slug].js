import React from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"

import { getCategories, getCategoryPost } from '../../services'
import { PostCard, Categories, Loader } from '../../components'

const CategoryPost = ({ posts, params }) => {

  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto md:px-10 px-2 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <Head>
            <title>{params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CategoryPost

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts, params },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
