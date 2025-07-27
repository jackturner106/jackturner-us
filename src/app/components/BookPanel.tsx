'use client';

import Image from 'next/image';

interface DetailPanelProps {
  book: {
    title: string;
    subtitle: string;
    description: string;
    details: {
      [key: string]: string | string[];
    };
  } | null;
}

export default function DetailPanel({ book }: DetailPanelProps) {
  if (!book) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        <p>Select an item to view details</p>
      </div>
    );
  }

  const linkify = (text: string) => {
    const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '" class="text-blue-600 hover:underline">' + url + '</a>';
  });
  }

  const renderDetails = (details: { [key: string]: string | string[] }) => {
    return Object.entries(details).map(([key, value]) => (
      <div key={key} className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 mb-2">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </h4>
        {Array.isArray(value) ? (
          <ul className="list-disc list-inside">
            {value.map((item, index) => (
              <li key={index} className="text-gray-700">
                <span dangerouslySetInnerHTML={{ __html: linkify(item) }} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: linkify(value) }} />
        )}
      </div>
    ));
  };

  return (
    <div className="h-full overflow-auto p-6">
      <div className="max-w-3xl mx-auto">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={'/blank.png'}
            alt={"Space filling image"}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h2>
        <p className="text-gray-600 mb-6">{book.subtitle}</p>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-8">{book.description}</p>
          {renderDetails(book.details)}
        </div>
      </div>
    </div>
  );
} 