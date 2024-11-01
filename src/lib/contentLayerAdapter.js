// import { allPosts, Post } from 'contentlayer/generated';
// import {
//   defineDocumentType,
//   defineNestedType,
//   makeSource,
// } from 'contentlayer/source-files';
// import { compareDesc } from 'date-fns';

// export { allPosts, defineDocumentType, defineNestedType, makeSource, Post };


// export const allPostsNewToOld =
//   allPosts?.sort((a, b) => {
//     return compareDesc(new Date(a.date), new Date(b.date));
//   }) || [];
// import { allDocuments, Post } from 'contentlayer/generated';
// import { compareDesc } from 'date-fns';

// // 過濾所有文檔，僅保留 Post 類型
// export const allPosts = allDocuments.filter((doc) => doc._type === 'Post');

// // 排序文章從新到舊
// export const allPostsNewToOld =
//   allPosts?.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))) || [];

// export { Post };