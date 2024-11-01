import Mdx from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'next-contentlayer2/hooks';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Convert PostPage into an async function
export default  function PostPage({ params }: PostPageProps) {
  // Await params to access its properties
  const { slug } = params;

  // Find the post matching the slug
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  // Handle case where post is not found
  if (!post) {
    return <div>No post here!</div>;
  }

  // Render the post content
  return (
    <article className='py-8 mx-auto max-w-xl'>
      <div className='mb-8 text-center'>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
}