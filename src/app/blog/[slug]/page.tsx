import RenderBodyContent from '@/components/blog/RenderBodyContent';
import { getPostBySlug, imageBuilder } from '@/sanity/sanity-utils';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  TagIcon,
  UserIcon,
} from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Generate metadata for SEO and social sharing
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch the post data
  const post = await getPostBySlug(params.slug);
  const imageUrl = imageBuilder(post.mainImage.asset._ref).url();

  // Format the publication date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Create metadata object
  return {
    title: post.title,
    description:
      post.metadata || `${post.title} - Published on ${formattedDate}`,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description:
        post.metadata || `${post.title} - Published on ${formattedDate}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description:
        post.metadata || `${post.title} - Published on ${formattedDate}`,
      images: [imageUrl],
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  const imageUrl = imageBuilder(post.mainImage.asset._ref).url();

  return (
    <div className="w-full bg-brand-secondary">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="border-b border-brand flex justify-between items-center">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to all blogs
          </Link>
          <Link
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
          >
            <ArrowRightIcon className="w-4 h-4 mr-2" />
            Home
          </Link>
        </div>

        <header className="my-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300"
                >
                  <TagIcon className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="mb-8 overflow-hidden rounded-lg">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src={imageUrl || '/placeholder.svg'}
              alt={post.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <RenderBodyContent post={post} />
        </div>
      </article>
    </div>
  );
}
