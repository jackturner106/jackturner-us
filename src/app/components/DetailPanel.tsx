'use client';

import Image from 'next/image';

interface DetailPanelProps {
  item: {
    title: string;
    imgUrl: string;
    subtitle: string;
    type: 'experience' | 'project' | 'education';
    description: string;
    details: {
      [key: string]: string | string[];
    };
  } | null;
}

export default function DetailPanel({ item }: DetailPanelProps) {
  if (!item) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        <p>Select an item to view details</p>
      </div>
    );
  }

  if (!item.imgUrl) {
    item.imgUrl = "/blank.png"
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
      {item.imgUrl != "/blank.png" ? <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src={item.imgUrl}
              alt={item.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div> :
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={item.imgUrl}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
        <p className="text-gray-600 mb-6">{item.subtitle}</p>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-8">{item.description}</p>
          {renderDetails(item.details)}
        </div>
      </div>
    </div>
  );
} 