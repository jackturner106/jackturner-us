import { Item } from '../page';

export const project_list: Item[] = [
  {
    id: 2,
    imgUrl: '/tailwind.png',
    title: 'Personal Website',
    subtitle: 'Side Project • 2025',
    type: 'project',
    description: 'Making this website to showcase my projects and experience. Used Typescript, React, and Tailwind CSS. Hosted on a Debian server using nginx.',
    details: {
      features: [
        'Responsive design',
        'Interactive UI components',
        'Performance optimized'
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      repo: 'https://github.com/jackturner106/jackturner-us',
      'live site': 'https://jackturner.us'
    }
  },
  {
    id: 8,
    imgUrl: '/UNO_logo.png',
    title: 'Q-Learning UNO Bot',
    subtitle: 'Class Project • 2025',
    type: 'project',
    description: 'Used Q-Learning and Python to make a bot that can plays UNO for CS5100 AI class final project. Achieved 40% win rate in 3-player games.',
    details: {
      details: [
        '~80,000 state Q-table',
        'Epsilon-greedy learning policy',
      ],
      technologies: ['Python', 'Pygame', 'Q-learning', 'Reniforcement Learning'],
      repo: 'https://github.com/fraander/cs5100project'
    }
  },
  {
    id: 9,
    imgUrl: '/NU_Rover.jpg',
    title: 'NU Mars Rover Team',
    subtitle: 'Extracurriculars • 2023 - 2024',
    type: 'project',
    description: 'Developer on the Autonomous sub-team of the Northeastern Mars Rover Team, a component of the Students for the Exploration and Development of Space (SEDS) club. ',
    details: {
      Details: [
        'Used OpenCV to build a computer vision system to detect ArUco tags',
        'Used YOLO model to automatically detect objects in the Rover\' field of view',
        'Built RTK GPS system, along with particle filter for sensor fusion of IMU data to enable accurate positioning'
      ],
      Accomplishments: [
        'Won 1st place at the Canadian International Rover Competition (CIRC) Winter 2024 competition.',
        'Achieved highest ever score for Northeastern at University Rover Challenge (URC) 2024.'
      ],
      technologies: ['Python', 'ROS', 'YOLO', 'OpenCV'],
      repo: 'https://nurover.notion.site/'
    }
  },
  {
    id: 10,
    imgUrl: '/NER.jpg',
    title: 'Northeastern Electric Racing',
    subtitle: 'Extracurriculars • 2023 - 2024',
    type: 'project',
    description: 'Developer on the Software sub-team at Northeastern Electric Racing. Build the project management platform Finishline. Served as a Tech Lead for spring semester of 2024, responsible for mentoring and leading new developers.',
    details: {
      details: [
        'Building a project management platform used by 100+ engineers building an electric race car.',
        'As a tech lead, responsible for assigning work to new developers, conducting weekly standups and code reviews, and teaching new skills.',
      ],
      technologies: ['Typescript', 'React', 'PostgreSQL', 'MUI'],
      'live site': 'https://finishlinebyner.com/',
      repo: 'https://github.com/Northeastern-Electric-Racing/FinishLine'
    }
  },
];