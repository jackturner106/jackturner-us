import { Item } from '../page';

export const education_list: Item[] = [
  {
    id: 3,
    imgUrl: '/NU_logo.png',
    title: 'Computer Science and Math, BS',
    subtitle: 'Northeastern University • 2022 - 2026',
    type: 'education',
    description: '4th year studying a combined major in CS and Math at Northeastern\'s Boston Campus. Studied abroad at Northeastern University London campus 2022-2023.',
    details: {
      'Coursework': [
        'Artificial Intelligence (Grad level)',
        'Group Theory & Number Theory',
        'Algorithms',
        'Object Oriented Design'
      ],
      achievements: '4.0 GPA | Dean\'s List all semesters | Dean\'s Scholarship',
      'Activities and Societies': [
        'Kappa Theta Pi Professional Fraternity',
        'Husky Ambassadors',
        'NU SEDS/Mars Rover Team',
        'Northeastern Electric Racing'
      ]
    }
  },
  {
    id: 7,
    imgUrl: '/tjhsst_logo.jpeg',
    title: 'Advanced Diploma',
    subtitle: 'Thomas Jefferson High School for Science and Technology • 2018 - 2022',
    type: 'education',
    description: 'Rated #1 HS in the United States by US News & World Report, Newsweek, and Business Insider',
    details: {
      achievements: '4.2/4.0 GPA | 1600/1600 SAT',
      "Activities": [
        'Computer Systems Senior Research lab. Completed a year long research project on collaboration for autonomous robots',
        'TJHSST Cubesat Team',
      ]
    }
  }
];