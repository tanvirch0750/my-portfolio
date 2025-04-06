'use client';

import { Badge } from '@/components/ui/badge';
import type { Blog } from '@/types/blog';
import { Filter, Search, SlidersHorizontal, Tag, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Card from '../Card';
import BlogItem from './BlogItem';

interface BlogSearchProps {
  initialPosts: Blog[];
  allTags: string[];
}

export default function BlogSearch({ initialPosts, allTags }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [posts, setPosts] = useState<Blog[]>(initialPosts);

  // Filter posts based on search term and selected tags
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // Search term filter
      const searchMatch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // @ts-ignore
        post.body[0]?.children[0]?.text
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      // Tags filter
      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag));

      return searchMatch && tagMatch;
    });
  }, [initialPosts, searchTerm, selectedTags]);

  // Update posts when filters change
  useEffect(() => {
    setPosts(filteredPosts);
  }, [filteredPosts]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div>
      {/* Search and Filter Controls */}
      <div className="mb-8">
        <Card className="border-emerald-300/20 p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
            {/* Search Input */}
            <div className="relative w-full md:w-2/3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-white/40" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full p-3 pl-10 bg-white/5 text-white rounded-lg border border-white/10 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <X className="w-5 h-5 text-white/40 hover:text-white/70" />
                </button>
              )}
            </div>

            {/* Filter Toggle Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filter by Tags</span>
              {selectedTags.length > 0 && (
                <Badge className="bg-emerald-500 text-black ml-2">
                  {selectedTags.length}
                </Badge>
              )}
            </button>

            {/* Desktop Filter Label */}
            <div className="hidden md:flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
              <span className="font-medium">Filter by Tags:</span>
            </div>
          </div>

          {/* Tags Filter - Always visible on desktop, toggleable on mobile */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-2 mb-4">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    selectedTags.includes(tag)
                      ? 'bg-emerald-500 text-black'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </button>
              ))}
            </div>

            {/* Filter Status and Clear Button */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/60">
                {filteredPosts.length === initialPosts.length
                  ? 'Showing all posts'
                  : `Showing ${filteredPosts.length} of ${initialPosts.length} posts`}
              </div>

              {(searchTerm || selectedTags.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogItem key={post._id} blog={post} />
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center border-emerald-300/20">
          <div className="flex flex-col items-center gap-4">
            <Search className="w-12 h-12 text-white/20" />
            <h3 className="text-xl font-semibold">No matching posts found</h3>
            <p className="text-white/60 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}
