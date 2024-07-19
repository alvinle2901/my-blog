import {
  PostCard,
  Categories,
  PostWidget,
  MyInfo,
  FeaturedPosts,
  Subscription,
} from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <>
      <div className="container md:w-10/12 mx-auto md:px-32 px-4 mb-8 mt-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <MyInfo />
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Subscription />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  };
}
