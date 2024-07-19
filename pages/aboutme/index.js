import Head from 'next/head'
import { Categories, PostWidget } from '../../components'
import AboutMeInfo from '../../components/AboutMeInfo'

export default function AboutMe() {
  return (
    <div className="container mx-auto md:px-40 sm:px-24 px-4 my-8">
      <Head>
        <title>about me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <AboutMeInfo />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
