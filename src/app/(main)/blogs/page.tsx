import React from 'react';
import BlogItem from '@/components/blog/BlogItem';
import PageContainer from '@/components/layout/PageContainer';
import { getPosts } from '@/sanity/sanity-utils';
import SectionHeader from '@/components/SectionHeader';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <PageContainer scrollable>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" text-center mb-14">
          <SectionHeader
            title="From Challenges to Solutions"
            eybrow="Web Dev Insights"
            description=""
          />
        </div>

        {posts?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogItem key={post._id} blog={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl">No posts found</p>
        )}
      </div>
    </PageContainer>
  );
}

// blog 1: Caching in Next.js: A Detailed Overview
// blog 2: Open graph meta data
