'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from './components/Card';
import DetailPanel from './components/DetailPanel';
import { experience_list } from './data/experiences';
import { project_list } from './data/projects';
import { education_list } from './data/educations';


export interface Item {
  id: number;
  imgUrl: string;
  title: string;
  subtitle: string;
  type: 'experience' | 'projects' | 'education';
  description: string;
  details: {
    [key: string]: string | string[];
  };
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'education'>('projects');

  const items = {
    experience: experience_list,
    projects: project_list,
    education: education_list
  };

  return (
    <div className="h-screen flex">
      {/* Left panel - Scrollable list */}
      <div className="w-full md:w-2/5 lg:w-1/3 border-r border-gray-200 bg-white overflow-y-auto">
        <div className="p-6 text-center border-b border-gray-200">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/profile_photo.jpeg"
              alt="Jack Turner"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Jack Turner</h1>
          <p className="text-gray-600 mt-2">Software Engineer & Developer</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {['projects', 'experience', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'experience' | 'projects' | 'education')}
              className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* List of items */}
        <div className="p-4">
          {items[activeTab].map((item) => (
            <Card
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              isSelected={selectedItem?.id === item.id}
              onClick={() => setSelectedItem(item)}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>

      {/* Right panel - Details */}
      <div className="hidden md:block md:w-3/5 lg:w-2/3 bg-white overflow-y-auto">
        <DetailPanel item={selectedItem} />
      </div>
    </div>
  );
} 