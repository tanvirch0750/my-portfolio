import { PortableText, PortableTextComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { Blog } from '@/types/blog';
import config from '@/sanity/config/client-config';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const ImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={
            urlBuilder(config)
              .image(value)
              .fit('max')
              .auto('format')
              .url() as string
          }
          width={width}
          height={height}
          alt={value.alt || 'Blog image'}
          loading="lazy"
          className="w-full h-auto mt-0"
        />
      </div>
      {value.caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

const CodeBlock = ({ value }: any) => {
  return (
    <div className="my-6">
      <SyntaxHighlighter
        language={value.language || 'javascript'}
        style={atomOneDark}
        customStyle={{
          padding: '1rem',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          lineHeight: '1.5',
        }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

const Table = ({ value }: any) => {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700 mt-0 mb-2">
        <thead>
          <tr>
            {value.rows[0].cells.map((cell: string, index: number) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm font-semibold text-gray-300 bg-gray-800"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {value.rows.slice(1).map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {row.cells.map((cell: any, cellIndex: number) => (
                <td key={cellIndex} className="px-4 py-2 text-sm text-gray-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const components: PortableTextComponents = {
  types: {
    image: ImageComponent,
    code: CodeBlock,
    table: Table,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-12 mb-4 text-white">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-10 mb-3 text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-6 mb-2 text-white">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return <PortableText value={post?.body as any} components={components} />;
};

export default RenderBodyContent;
