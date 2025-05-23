'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from './components/Card';
import DetailPanel from './components/DetailPanel';
import { experience_list } from './data/experiences';
import { project_list } from './data/projects';
import { education_list } from './data/educations';
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
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'education'>('projects');
  const router = useRouter();

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
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center 30%' 
              }}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Jack Turner</h1>
          <p className="text-gray-600 mt-2">Software Engineer</p>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/turnerwj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <svg width="28" height="28" className="text-gray-800" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
            </a>
            <a
              href="https://github.com/jackturner106"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80 transition-opacity"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800" focusable="false" aria-hidden="true" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg>
            </a>
          </div>
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
              onClick={() => {
                if (window.innerWidth < 768) {
                  // On mobile, navigate to detail page
                  router.push(`/${activeTab}/${item.id}`);
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

      {/* Right panel - Details */}
      <div className="hidden md:block md:w-3/5 lg:w-2/3 bg-white overflow-y-auto">
        <DetailPanel item={selectedItem} />
      </div>
    </div>
  );
} 