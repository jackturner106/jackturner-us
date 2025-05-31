import { Item } from '../page';
import Image from 'next/image';


export const introduction_list: Item[] = [
  {
    id: 13,
    imgUrl: '/blank.png',
    title: 'Hello There!',
    subtitle: '',
    type: 'education',
    description: 'My name is Jack!',
    details: {
      " ":"I\'m currently a software engineer at NASA through the pathways program, a student at Northeastern University studying CS + Math, and generally a tech enthusiast.",
      "  ":"This website exists to showcase my projects and experiences. Select any from the list to learn more.",
      "Get in touch!": [
        "turner.wi@northeastern.edu",
        "https://linkedin.com/in/turnerwj",
        "https://github.com/jackturner106"
      ]
    },
    page: IntroPage
  }
];

function IntroPage() {
  return (
    <div className="h-full overflow-auto p-6">
    <div className="max-w-3xl mx-auto">
    <div className="hidden md:block relative w-12 h-12 rounded-full overflow-hidden">
           <Image
            src={'/blank.png'}
            alt={'Hello There!'}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Hello There!</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-5">My name is Jack!</p>
        <div className="mb-4">
          <div className="text-gray-700 mb-5">
            I&#39;m currently a software engineer at NASA through the pathways program, a student at Northeastern University studying CS + Math, and generally a tech enthusiast.
          </div>
          <div className="text-gray-700 mb-5">
            This website exists to showcase my projects and experiences. Select any from the list to learn more.
          </div>
          <div className="text-gray-700 mb-5">
            If you want to get in touch, I&#39;d love to connect!
          </div>
          <a
              href="https://www.linkedin.com/in/turnerwj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex">
              <svg width="28" height="28" className="text-gray-800" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
                <div className="text-blue-600 hover:underline ml-2 mb-4">
                  https://www.linkedin.com/in/turnerwj
                </div>
                </div>
            </a>
            <a
              href="https://github.com/jackturner106"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800" focusable="false" aria-hidden="true" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg>
                <div className="text-blue-600 hover:underline ml-2 mb-4">
                  https://github.com/jackturner106
                </div>
              </div>
            </a>
            <a
              href="mailto: turner.wi@northeastern.edu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800" focusable="false" aria-hidden="true" data-testid="GitHubIcon">
                <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                <polyline points="2,6 12,14 22,6" fill="none" strokeWidth="1" stroke="white" />
              </svg>
                <div className="text-blue-600 hover:underline ml-2 mb-4">
                  https://turner.wi@northeastern.edu
                </div>
              </div>
            </a>
        </div>
      </div>
    </div>
  </div>
  );
} 