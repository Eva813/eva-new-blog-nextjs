'use client'; // 標示為客戶端組件
import * as React from 'react';
import Mdx from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'next-contentlayer2/hooks';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// 將 PostPage 改為 async 函數
export default function PostPage({ params }: { params: Promise<PostPageProps['params']> }) {
  // 使用 React.use() 解構 params
  const { slug } = React.use(params);

  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    return <div>No post here!</div>;
  }
  return (
    <article className='py-8 mx-auto max-w-xl'>
      <div className='mb-8 text-center'>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
      {/* <div
        className='text-sm [&>*]:mb-3 [&>*:last-child]:mb-0'
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      /> */}
    </article>
  );
}
