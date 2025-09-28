'use client';

import BookCard from '../components/BookCard';
import BookPanel from '../components/BookPanel';
import { books, Book } from '../data/books';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function ReadingLogPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const router = useRouter();


  return (
    <div className="h-screen flex">
      {/* Left panel - List of books */}
      <div className="w-full md:w-2/5 lg:w-1/3 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-6 border-b border-gray-200 flex">
          <div>
          <h2 className="text-2xl font-bold text-gray-900 pr-8">Currently Reading:</h2>
          <p className="text-gray-600 pr-8 mt-2">The Great Dissenter: The Story of John Marshall Harlan, America&apos;s Judicial Hero</p>
          <p className="text-gray-600 pr-8 mt-4">Peter S. Canellos</p>
          </div>
          <Image
              src={"/great_dissenter.jpg"}
              alt={"The Great Dissenter: The Story of John Marshall Harlan, America&apos;s Judicial Hero by Peter S. Canellos"}
              width={130}
              height={130}
              priority
            />        
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-900 pr-8">Previously Read:</h2>
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              subtitle={book.subtitle}
              imgUrl={book.image ? book.image : undefined}
              isSelected={selectedBook?.id === book.id}
              onClick={() => {
                if (window.innerWidth < 768) {
                  // On mobile, navigate to detail page
                  router.push(`/mobileBookPage/${book.id}`);
                } else {
                  // On desktop, show detail panel
                  setSelectedBook(book);
                }
              }}
            />
          ))}
        </div>
      </div>
      {/* Right panel - Book details */}
      <div className="hidden md:block md:w-3/5 lg:w-2/3 bg-white overflow-y-auto">
        <BookPanel book={selectedBook} />
      </div>
    </div>
  );
} 