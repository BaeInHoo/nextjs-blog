import SanityService from "../../services/SanityService";

export default function PostAll({ slug, post }) {
  return (
    <div>
      <h1>Post : { slug }</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const home = await new SanityService().getHome();
  const posts = await new SanityService().getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    failback: false,
  };
}

export function getStaticProps({ params }) {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
}