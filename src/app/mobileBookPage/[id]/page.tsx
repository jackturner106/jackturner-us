'use client';
import BookPanel from '../../components/BookPanel';
import { books } from '../../data/books';
import { notFound, useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const book = books.find((p) => p.id === Number(id));
  if (!book) return notFound();
  return (
    <div className="p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 flex items-center text-gray-200 text-base font-large"
      >
        <div className="bg-gray-700 hover:bg-gray-600 transition-colors relative w-20 h-10 mx-auto rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back
        </div>
      </button>
      { <BookPanel book={book} />}
    </div>
  );
} 