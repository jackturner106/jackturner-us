'use client';

import { JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import Card from './components/Card';
import DetailPanel from './components/DetailPanel';
import { experience_list } from './data/experiences';
import { project_list } from './data/projects';
import { education_list } from './data/educations';
import { introduction_list } from './data/introduction';
import { useRouter } from 'next/navigation';


export interface Item {
  id: number;
  imgUrl: string;
  title: string;
  subtitle: string;
  type: 'experience' | 'project' | 'education';
  description: string;
  details: {
    [key: string]: string | string[];
  };
  page? : () => JSX.Element;
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(introduction_list[0]);
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'education'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('activeTab') as 'experience' | 'projects' | 'education') || 'projects';
    }
    return 'projects';
  });

  // Save to localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);
  
  const router = useRouter();

  const items = {
    experience: experience_list,
    projects: project_list,
    education: education_list
  };

  return (
    <div className="h-screen flex">
      {/* Left panel - Scrollable list */}
      <div className="w-full md:w-2/5 lg:w-1/3 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-6 text-center border-b border-gray-200">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src="/profile_photo.jpeg"
              alt="Jack Turner"
              fill
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center 30%' 
              }}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Jack Turner</h1>
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                // On mobile, navigate to detail page
                router.push(`/mobileDetailPage/${introduction_list[0].id}`);
              } else {
                // On desktop, show detail panel
                setSelectedItem(introduction_list[0]);
              }
            }}
            className={`mt-2 flex items-center text-gray-200 text-base font-large mx-auto ${
              selectedItem?.id === introduction_list[0].id
              ? 'visible md:invisible'
              : 'visible'
            }`}
          >
            <div className="bg-gray-700 hover:bg-gray-600 transition-colors relative w-32 h-8 mx-auto rounded-full flex items-center justify-center">
              About Me
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l7-7 -7-7" /></svg>
            </div>
          </button>
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
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="mb-32 md:mb-2">
          {items[activeTab].map((item) => (
            <Card
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              isSelected={selectedItem?.id === item.id}
              onClick={() => {
                if (window.innerWidth < 768) {
                  // On mobile, navigate to detail page
                  router.push(`/mobileDetailPage/${item.id}`);
                } else {
                  // On desktop, show detail panel
                  setSelectedItem(item);
                }
              }}
              imgUrl={item.imgUrl}
            />
          ))}
          </div>
        </div>
      </div>

      {/* Right panel - Details */}
      <div className="hidden md:block md:w-3/5 lg:w-2/3 bg-white overflow-y-auto">
        {selectedItem!.page ? selectedItem?.page() : <DetailPanel item={selectedItem} />}
      </div>
    </div>
  );
} 