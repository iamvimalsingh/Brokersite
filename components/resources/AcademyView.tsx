'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BRAND_NAME, BROKER_CONFIG } from '@/lib/config';
import { ACADEMY_COURSES } from '@/lib/resource-data';
import { AcademyCourse, AcademyLesson } from '@/types/resource';
import { RelatedResources } from './RelatedResources';
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Award,
  Layers,
  Sparkles,
  X,
  Play,
  Check,
  CheckSquare,
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';

export const AcademyView: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCourseModal, setActiveCourseModal] = useState<AcademyCourse | null>(null);
  const [activeLesson, setActiveLesson] = useState<AcademyLesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({
    'course-1-l1': true,
    'course-1-l2': true,
    'course-2-l3': true
  });

  const toggleLessonComplete = (lessonKey: string) => {
    setCompletedLessons(prev => ({
      ...prev,
      [lessonKey]: !prev[lessonKey]
    }));
  };

  const filteredCourses = ACADEMY_COURSES.filter(course => {
    const matchesTrack = selectedTrack === 'All' || course.level === selectedTrack;
    const matchesSearch =
      searchQuery === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTrack && matchesSearch;
  });

  const tracksSummary = [
    {
      level: 'Beginner',
      badge: 'Core Foundation',
      title: 'Market Mechanics & Orders',
      duration: '3 Courses · 22 Lessons',
      desc: 'Master base/quote dynamics, pip valuation, spread calculations, leverage ratios, and how orders route through global liquidity pools.'
    },
    {
      level: 'Intermediate',
      badge: 'Chart & Execution Mastery',
      title: 'Technical Structure & Volatility',
      duration: '3 Courses · 26 Lessons',
      desc: 'Deconstruct support/resistance inflection nodes, candlestick formations, momentum indicators, ATR sizing, and daily market session timing.'
    },
    {
      level: 'Advanced',
      badge: 'Quantitative & Institutional',
      title: 'Risk Budgeting & Sizing Systems',
      duration: '3 Courses · 21 Lessons',
      desc: 'Deploy statistical expectancy models, maximum drawdown caps, cross-asset correlation matrices, and algorithmic strategy testing.'
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FBFBF9]">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-[#E7E4DE] text-xs">
          <Link href="/resources" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            All Resources
          </Link>
          <span className="font-semibold text-[#087F78] bg-[#DDEDEA]/60 px-3 py-1.5 rounded-md">
            Trading Academy
          </span>
          <Link href="/resources/news" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market News
          </Link>
          <Link href="/resources/analysis" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Market Analysis
          </Link>
          <Link href="/resources/guides" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Trading Guides
          </Link>
          <Link href="/resources/webinars" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Webinars
          </Link>
          <Link href="/resources/glossary" className="text-[#77736C] hover:text-[#111111] px-3 py-1.5 rounded-md">
            Glossary
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 border-b border-[#E7E4DE] pb-10 sm:pb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#087F78] mb-3">
              TRADING ACADEMY
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Learn the markets step by step.
            </h1>
            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed mb-8 max-w-2xl">
              Build a stronger understanding of trading through structured lessons covering markets, analysis, risk and trading mechanics.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-[#E7E4DE] shadow-xs">
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Total Tracks</div>
                <div className="text-xl font-mono font-semibold text-[#111111]">3 Levels</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Course Count</div>
                <div className="text-xl font-mono font-semibold text-[#087F78]">9 Curricula</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Total Lessons</div>
                <div className="text-xl font-mono font-semibold text-[#111111]">69 Lessons</div>
              </div>
              <div>
                <div className="text-xs font-mono text-[#77736C] uppercase">Access Level</div>
                <div className="text-xl font-mono font-semibold text-[#0A9F6E]">100% Free</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Learning Track Summaries */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#087F78] font-semibold">Structured Pathways</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                Three Progressive Learning Tracks
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracksSummary.map((track, i) => (
              <div
                key={i}
                onClick={() => setSelectedTrack(track.level as any)}
                className={`p-6 sm:p-7 rounded-2xl bg-white border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedTrack === track.level
                    ? 'border-[#087F78] ring-2 ring-[#087F78]/10 shadow-sm'
                    : 'border-[#E7E4DE] hover:border-[#087F78]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-xs font-semibold bg-[#DDEDEA] text-[#087F78]">
                      {track.level}
                    </span>
                    <span className="text-xs font-mono text-[#77736C]">{track.duration}</span>
                  </div>
                  <h3 className="text-lg font-normal text-[#111111] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {track.title}
                  </h3>
                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">{track.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between text-xs font-semibold text-[#087F78]">
                  <span>{selectedTrack === track.level ? 'Currently Filtering' : 'Filter by this Track'}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E4DE]">
          {/* Level Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map(track => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedTrack === track
                    ? 'bg-[#181818] text-white shadow-xs font-semibold'
                    : 'bg-white border border-[#E7E4DE] text-[#77736C] hover:text-[#111111]'
                }`}
              >
                {track === 'All' ? 'All 9 Courses' : `${track} Track`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#77736C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search topics, lessons, concepts..."
              className="w-full bg-white border border-[#E7E4DE] rounded-lg pl-9 pr-3 py-2 text-xs text-[#111111] placeholder:text-[#77736C] focus:outline-none focus:border-[#087F78] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77736C] hover:text-[#111111]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Course Cards Grid (9 Comprehensive Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCourses.map((course, idx) => {
            const courseCompleted = (course.progressPercent || 0) === 100;
            return (
              <div
                key={course.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs hover:border-[#087F78] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Level Badge & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-xs font-semibold ${
                        course.level === 'Beginner'
                          ? 'bg-[#DDEDEA] text-[#087F78]'
                          : course.level === 'Intermediate'
                          ? 'bg-[#F3F2EE] text-[#111111]'
                          : 'bg-[#181818] text-white'
                      }`}
                    >
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#77736C]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-normal text-[#111111] mb-2 leading-snug group-hover:text-[#087F78] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#77736C] leading-relaxed mb-6">{course.description}</p>

                  {/* Topics List Tags */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase text-[#77736C] font-semibold block mb-2">
                      Syllabus Topics:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.topics.slice(0, 4).map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] bg-[#FBFBF9] border border-[#E7E4DE] text-[#111111] px-2 py-0.5 rounded-sm"
                        >
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 4 && (
                        <span className="text-[11px] text-[#77736C] font-mono px-1 py-0.5">
                          +{course.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mb-6 p-3 rounded-lg bg-[#FBFBF9] border border-[#E7E4DE]">
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="text-[#77736C]">{course.lessonCount} Structured Lessons</span>
                      <span className="font-semibold text-[#087F78]">
                        {course.progressPercent || 0}% Complete
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#E7E4DE] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#087F78] transition-all duration-300"
                        style={{ width: `${course.progressPercent || 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="pt-4 border-t border-[#E7E4DE] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#77736C]">Module {idx + 1} of 9</span>
                  <button
                    onClick={() => {
                      setActiveCourseModal(course);
                      setActiveLesson(course.lessons[0] || null);
                    }}
                    className="px-4 py-2 rounded-lg bg-[#181818] text-white text-xs font-semibold hover:bg-[#087F78] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{courseCompleted ? 'Review Lessons' : 'Start Learning'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Course & Lesson Modal */}
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#E7E4DE] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
              {/* Modal Header */}
              <div className="p-6 border-b border-[#E7E4DE] flex items-center justify-between bg-[#FBFBF9]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase bg-[#DDEDEA] text-[#087F78] px-2 py-0.5 rounded-xs font-semibold">
                      {activeCourseModal.level}
                    </span>
                    <span className="text-xs font-mono text-[#77736C]">
                      {activeCourseModal.duration} · {activeCourseModal.lessonCount} Lessons
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#111111]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {activeCourseModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setActiveCourseModal(null);
                    setActiveLesson(null);
                  }}
                  className="p-2 text-[#77736C] hover:text-[#111111] hover:bg-[#E7E4DE]/50 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Two Columns (Lessons Sidebar + Lesson Content) */}
              <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E7E4DE]">
                {/* Sidebar Lessons List */}
                <div className="p-4 sm:p-6 bg-[#FBFBF9]/50 overflow-y-auto max-h-[400px] md:max-h-[500px]">
                  <h4 className="text-xs font-mono uppercase font-semibold text-[#77736C] mb-4">
                    Course Syllabus
                  </h4>
                  <div className="space-y-2">
                    {activeCourseModal.lessons.map((lesson, lIdx) => {
                      const lessonKey = `${activeCourseModal.id}-${lesson.id}`;
                      const isCompleted = !!completedLessons[lessonKey];
                      const isSelected = activeLesson?.id === lesson.id;
                      return (
                        <div
                          key={lesson.id}
                          onClick={() => setActiveLesson(lesson)}
                          className={`p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-start gap-2.5 ${
                            isSelected
                              ? 'bg-white border-[#087F78] shadow-xs'
                              : 'bg-white/80 border-[#E7E4DE] hover:border-[#087F78]/40'
                          }`}
                        >
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              toggleLessonComplete(lessonKey);
                            }}
                            className={`mt-0.5 p-1 rounded-sm border shrink-0 transition-colors ${
                              isCompleted
                                ? 'bg-[#087F78] border-[#087F78] text-white'
                                : 'border-[#E7E4DE] hover:border-[#087F78]'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-[#111111] leading-tight mb-1 truncate">
                              {lIdx + 1}. {lesson.title}
                            </div>
                            <div className="text-[11px] font-mono text-[#77736C] flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Lesson Main Reader Pane */}
                <div className="p-6 sm:p-8 md:col-span-2 overflow-y-auto max-h-[500px]">
                  {activeLesson ? (
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E7E4DE]">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#087F78] font-semibold">
                            Lesson Reader
                          </span>
                          <h4 className="text-xl font-normal text-[#111111] mt-0.5" style={{ fontFamily: 'var(--font-serif)' }}>
                            {activeLesson.title}
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-[#77736C] px-2.5 py-1 rounded bg-[#F3F2EE]">
                          {activeLesson.duration}
                        </span>
                      </div>

                      <p className="text-xs text-[#77736C] italic mb-6 leading-relaxed bg-[#FBFBF9] p-3.5 rounded-lg border border-[#E7E4DE]">
                        &quot;{activeLesson.summary}&quot;
                      </p>

                      <div className="space-y-4 mb-8 text-xs sm:text-sm text-[#111111] leading-relaxed">
                        {activeLesson.content.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      {/* Key Takeaway Box */}
                      <div className="p-4 sm:p-5 rounded-xl bg-[#DDEDEA]/50 border border-[#087F78]/30 mb-8">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#087F78] mb-2">
                          <Sparkles className="w-4 h-4" />
                          <span>Core Principle &amp; Key Takeaway</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#111111] font-medium leading-relaxed">
                          {activeLesson.keyTakeaway}
                        </p>
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#E7E4DE]">
                        <button
                          onClick={() => {
                            if (activeLesson) {
                              toggleLessonComplete(`${activeCourseModal.id}-${activeLesson.id}`);
                            }
                          }}
                          className={`px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-2 cursor-pointer transition-colors ${
                            completedLessons[`${activeCourseModal.id}-${activeLesson.id}`]
                              ? 'bg-[#DDEDEA] text-[#087F78] border border-[#087F78]/20'
                              : 'bg-[#181818] text-white hover:bg-[#087F78]'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>
                            {completedLessons[`${activeCourseModal.id}-${activeLesson.id}`]
                              ? 'Completed ✓'
                              : 'Mark as Completed'}
                          </span>
                        </button>

                        <Button to="/trading/accounts" variant="outline" size="sm">
                          Practice on Demo
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="py-20 text-center text-xs text-[#77736C]">
                      Select a lesson from the left syllabus to start reading.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Practice Environment Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#181818] text-white flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#087F78] bg-white/10 px-2.5 py-1 rounded-sm font-semibold">
              Risk-Free Simulation
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white mt-3 mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
              Practice what you learn in real-time.
            </h3>
            <p className="text-xs sm:text-sm text-[#E7E4DE]/80 leading-relaxed">
              Open a zero-risk demo account with virtual funds to test order types, indicators, and risk management strategies across live market feeds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button
              to={process.env.NEXT_PUBLIC_TRADING_TERMINAL_URL || '/platforms/webtrader'}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              Launch Demo Terminal
            </Button>
            <Button
              to="/trading/accounts"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-center bg-transparent text-white border-white/30 hover:border-white hover:bg-white/10"
            >
              Compare Account Types
            </Button>
          </div>
        </div>

        {/* Cross-Link Related Resources */}
        <RelatedResources currentCategory="Forex" />
      </Container>
    </div>
  );
};
