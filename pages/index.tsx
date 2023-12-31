import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { PostData, loadBlogPosts } from "../loader";
import FavoritePosts from "../components/FavoritePosts";
import RecentPosts from "../components/RecentPosts";

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div className="content">
      <Head>
        <title>Phil Giammattei</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="section">

        <FavoritePosts posts={props.posts} />
      </div>
      <RecentPosts posts={props.posts} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const readmeFile = await import(`../${"README.md"}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    readme: readme,
    posts,
  };

  return { props };
};
