'use client';

import Image from 'next/image';

interface CardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  isSelected: boolean;
  imgUrl: string;
}

export default function Card({ title, subtitle, onClick, isSelected, imgUrl }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer transition-all mb-4 ${
        isSelected
          ? 'bg-gray-100 border-2 border-gray-900'
          : 'bg-white border-2 border-gray-200 hover:border-gray-400'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
        </div>
        <div className="min-w-12">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={imgUrl}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
      </div>
    </div>
  );
} 