'use client';

import Card from '@/components/Card';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeader from '@/components/SectionHeader';
import {
  Brain,
  ChevronDown,
  ChevronRight,
  Code,
  Database,
  Filter,
  Palette,
  Server,
  Star,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { skills } from './data';

// Skill categories with enhanced descriptions
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <Code className="w-5 h-5" />,
    description:
      'Creating responsive, interactive user interfaces with modern frameworks and libraries',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <Server className="w-5 h-5" />,
    description:
      'Building robust server-side applications and APIs for scalable web solutions',
    color: 'from-sky-400 to-sky-600',
  },
  {
    id: 'design',
    name: 'UI/UX',
    icon: <Palette className="w-5 h-5" />,
    description:
      'Designing intuitive and engaging user experiences with modern design principles',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 'database',
    name: 'Database',
    icon: <Database className="w-5 h-5" />,
    description:
      'Managing and optimizing data storage solutions for efficient applications',
    color: 'from-amber-400 to-amber-600',
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: <Wrench className="w-5 h-5" />,
    description:
      'Utilizing development tools and utilities that enhance productivity and workflow',
    color: 'from-rose-400 to-rose-600',
  },
  {
    id: 'other',
    name: 'Other',
    icon: <Brain className="w-5 h-5" />,
    description:
      'Additional competencies that complement my technical expertise',
    color: 'from-indigo-400 to-indigo-600',
  },
];

// Function to determine which category a skill belongs to
// @ts-ignore
const getSkillCategory = (skillName) => {
  const name = skillName.toLowerCase();
  if (
    [
      'react',
      'javascript',
      'typescript',
      'html',
      'css',
      'tailwind',
      'next.js',
      'vue',
    ].some((tech) => name.includes(tech))
  ) {
    return 'frontend';
  } else if (
    ['node', 'express', 'api', 'rest', 'graphql'].some((tech) =>
      name.includes(tech)
    )
  ) {
    return 'backend';
  } else if (
    ['figma', 'design', 'ui', 'ux', 'photoshop', 'illustrator'].some((tech) =>
      name.includes(tech)
    )
  ) {
    return 'design';
  } else if (
    ['mongodb', 'sql', 'postgres', 'database', 'firebase'].some((tech) =>
      name.includes(tech)
    )
  ) {
    return 'database';
  } else if (
    ['git', 'github', 'docker', 'aws', 'vercel', 'netlify'].some((tech) =>
      name.includes(tech)
    )
  ) {
    return 'tools';
  }
  return 'other';
};

// Function to assign expertise level
// @ts-ignore
const getExpertiseLevel = (skillName) => {
  const name = skillName.toLowerCase();
  const frontendCore = ['javascript', 'react', 'html', 'css', 'tailwind'];
  const backendCore = ['node.js', 'express', 'mongodb'];

  if (
    frontendCore.some((tech) => name.includes(tech)) ||
    backendCore.some((tech) => name.includes(tech))
  ) {
    return 'Expert';
  } else if (
    ['next.js', 'typescript', 'redux'].some((tech) => name.includes(tech))
  ) {
    return 'Advanced';
  }
  return 'Proficient';
};

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = getSkillCategory(skill.name);
    // @ts-ignore
    if (!acc[category]) {
      // @ts-ignore
      acc[category] = [];
    }
    // @ts-ignore
    acc[category].push({
      ...skill,
      // @ts-ignore
      expertise: skill?.expertise || getExpertiseLevel(skill.name),
      category,
    });
    return acc;
  }, {});

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === 'all'
      ? skills.map((skill) => ({
          ...skill,
          // @ts-ignore
          expertise: skill?.expertise || getExpertiseLevel(skill.name),
          category: getSkillCategory(skill.name),
        }))
      : // @ts-ignore
        skillsByCategory[activeCategory] || [];

  return (
    <PageContainer scrollable={true}>
      <section className="max-w-6xl mx-auto py-10 md:py-14 px-4 ">
        <SectionHeader
          title="The Tools of My Trade"
          eybrow="Technical Expertise"
          description="Here are the key competencies I've developed, allowing me to build robust, user-friendly, and impactful digital experiences."
        />

        {/* Featured Skills Overview - Hidden on Mobile */}
        <div className="mt-10 hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.slice(0, 3).map((category) => {
            // @ts-ignore
            const categorySkills = skillsByCategory[category.id] || [];
            return (
              <Card
                key={category.id}
                className="border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden relative group"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {category.name} Development
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {/* @ts-ignore */}
                    {categorySkills.slice(0, 3).map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 text-white/80"
                      >
                        <ChevronRight className="w-4 h-4 text-emerald-400" />
                        <span>{skill.name}</span>
                      </div>
                    ))}

                    {categorySkills.length > 3 && (
                      <div className="text-emerald-400 text-sm mt-2">
                        +{categorySkills.length - 3} more skills
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className="mt-4 text-sm font-medium text-white flex items-center gap-1 hover:text-emerald-400 transition-colors"
                  >
                    View all {category.name} skills
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mobile Filter Dropdown */}
        <div className="mt-8 md:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3 text-white/80"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-emerald-400" />
              <span>
                {activeCategory === 'all'
                  ? 'All Skills'
                  : `${skillCategories.find((cat) => cat.id === activeCategory)?.name} Skills`}
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`}
            />
          </button>

          {showFilters && (
            <div className="mt-2 bg-white/5 border border-white/10 rounded-lg p-3 space-y-2">
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setShowFilters(false);
                }}
                className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-all text-left ${
                  activeCategory === 'all'
                    ? 'bg-emerald-500 text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                All Skills
              </button>

              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 text-left ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-black`
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  {category.name} Skills
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Filter Buttons - Hidden on Mobile */}
        <div className="mt-12 hidden md:flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-white/80">
            <Filter className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">Filter by category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-emerald-500 text-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              All
            </button>

            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-black`
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description - Hidden on Mobile */}
        {activeCategory !== 'all' && (
          <div className="mt-6 hidden md:block">
            <Card className="border-emerald-300/20 bg-emerald-900/10">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${skillCategories.find((cat) => cat.id === activeCategory)?.color || 'from-emerald-400 to-emerald-600'}`}
                >
                  {
                    skillCategories.find((cat) => cat.id === activeCategory)
                      ?.icon
                  }
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    {
                      skillCategories.find((cat) => cat.id === activeCategory)
                        ?.name
                    }{' '}
                    Development
                  </h3>
                  <p className="text-white/70">
                    {
                      skillCategories.find((cat) => cat.id === activeCategory)
                        ?.description
                    }
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Skills Grid - Simplified for Mobile */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* @ts-ignore */}
          {filteredSkills.map((skill) => {
            const category =
              skillCategories.find((cat) => cat.id === skill.category) ||
              skillCategories[0];

            return (
              <Card
                key={skill.name}
                className="border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Category indicator - Hidden on Mobile */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-5 rounded-bl-full hidden md:block`}
                ></div>

                <div className="relative z-10">
                  <div className="flex gap-4 items-start">
                    <div className="size-14 md:size-16 p-2 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                      <Image
                        src={skill.icon || '/placeholder.svg'}
                        alt={skill?.name}
                        width={50}
                        height={50}
                        className="group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-semibold text-base md:text-lg">
                        {skill?.name}
                      </div>
                      <div className="text-xs md:text-sm text-white/50">
                        {skill?.description}
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <div
                          className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${category.color} text-white font-medium`}
                        >
                          {skill.expertise}
                        </div>

                        <div className="text-xs text-white/40">
                          {skill.experience || '1.5+ years'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details - Optional on Mobile */}
                  {skill?.details && (
                    <p className="mt-3 text-xs md:text-sm text-white/70 border-t border-white/10 pt-3">
                      {skill.details}
                    </p>
                  )}

                  {/* Projects info - Hidden on Mobile */}
                  {skill.projects && (
                    <div className="mt-3 hidden md:flex items-center gap-2">
                      <Star className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-white/60">
                        Used in {skill.projects} projects
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary - Hidden on Mobile */}
        <Card className="mt-12 border-emerald-300/20 bg-gradient-to-br from-emerald-900/20 to-sky-900/20 hidden md:block">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              My Technical Journey
            </h3>
            <p className="text-white/70 mt-2">
              A summary of my technical expertise and continuous learning path
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col items-center">
              <div className="text-4xl font-bold text-center text-emerald-400 mb-2">
                {skills.length}+
              </div>
              <p className="text-center text-white/70 text-sm">
                Technical skills across various domains
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col items-center">
              <div className="text-4xl font-bold text-center text-emerald-400 mb-2">
                1.5+
              </div>
              <p className="text-center text-white/70 text-sm">
                Years of hands-on development experience
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col items-center">
              <div className="text-4xl font-bold text-center text-emerald-400 mb-2">
                24/7
              </div>
              <p className="text-center text-white/70 text-sm">
                Commitment to learning and improvement
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/70 max-w-3xl mx-auto">
              My technical journey is driven by a passion for creating
              exceptional digital experiences. I continuously expand my skillset
              to stay at the forefront of web development technologies, focusing
              on both depth of knowledge in core technologies and breadth across
              the full development stack.
            </p>
          </div>
        </Card>
      </section>
    </PageContainer>
  );
}
