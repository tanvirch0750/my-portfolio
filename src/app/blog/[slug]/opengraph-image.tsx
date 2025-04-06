import { getPostBySlug, imageBuilder } from '@/sanity/sanity-utils';
import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const imageUrl = imageBuilder(post.mainImage.asset._ref).url();

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#111827',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: 50,
          position: 'relative',
        }}
      >
        {/* Background image with overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Content */}
        <div style={{ zIndex: 10, width: '100%', maxWidth: '90%' }}>
          <div style={{ fontSize: 24, color: '#93c5fd', marginBottom: 10 }}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </div>
          <div style={{ fontSize: 32, color: '#d1d5db' }}>
            By {post.author.name}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
