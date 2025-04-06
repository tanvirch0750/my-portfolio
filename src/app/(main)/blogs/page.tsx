import SectionHeader from '@/components/SectionHeader';
import BlogSearch from '@/components/blog/BlogSearch';
import PageContainer from '@/components/layout/PageContainer';
import { getPosts } from '@/sanity/sanity-utils';

export default async function BlogPage() {
  const posts = await getPosts();

  // Extract all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <PageContainer scrollable>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <SectionHeader
            title="From Challenges to Solutions"
            eybrow="Web Dev Insights"
            description="Explore my thoughts, tutorials, and insights on web development, design, and technology"
          />
        </div>

        <BlogSearch initialPosts={posts} allTags={allTags} />
      </div>
    </PageContainer>
  );
}
