export interface Book {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    details: {
      [key: string]: string | string[];
    };
  }

export const books: Book[] = [
    {
        id: 16,
        title: 'Eve in Hollywood',
        subtitle: 'Amor Towles • 2013',
        description: 'A novella following Evelyn Ross in Hollywood after Rules of Civility.',
        details: {
          " ": ["4/5",
          ],
          "Genre Tags": 'Fiction',
          "Date Read": "July 2025"
        },
      },
    {
        id: 15,
        title: 'Table for Two: Fictions',
        subtitle: 'Amor Towles • 2024',
        description: 'A collection of short stories centered on New York City.',
        details: {
          " ": ["5/5",
          ],
          "Genre Tags": 'Fiction, Short Fiction',
          "Date Read": "July 2025"
        },
      },
    {
        id: 14,
        title: 'First in his Class',
        subtitle: 'David Maraniss • 1995',
        description: 'Biography of Bill Clinton, up to when he announced his run for president.',
        details: {
          " ": ["4.5/5",
          ],
          "Genre Tags": 'Non-Fiction, Biography, Politics',
          "Date Read": "July 2025"
        },
      },
    {
        id: 13,
        title: 'The Secret Cardinal',
        subtitle: 'Tom Grace • 2007',
        description: 'A former SOF operator must rescue an imprisoned cardinal in time for an upcoming conclave.',
        details: {
          " ": ["2.5/5",
          ],
          "Genre Tags": 'Fiction, Action, Spy',
        },
      },
    {
        id: 12,
        title: 'Rumpole of the Bailey',
        subtitle: 'John Mortimer • 1978',
        description: '(Mis)adventures of a quirky British barrister - Based on the TV series of the same name.',
        details: {
          " ": ["3/5",
          ],
          "Genre Tags": 'Fiction, Legal Drama',
        },
      },
    {
        id: 11,
        title: 'Washington Rules: America\'s Path to Permanent War',
        subtitle: 'Andrew J. Bacevitch • 2010',
        description: 'Explores the development American military from WWII to today, and argues that American resources would be used better at home.',
        details: {
          " ": ["2/5",
          ],
          "Genre Tags": 'Non-Fiction, Politics',
        },
      },
    {
        id: 10,
        title: 'Mudbound',
        subtitle: 'Hillary Jordan • 2008',
        description: 'Novel exploring racism in the American South amid WWII.',
        details: {
          " ": ["5/5",
          ],
          "Genre Tags": 'Fiction, Historical Fiction',
        },
      },
    {
        id: 9,
        title: 'Lords of Finance: The Bankers Who Broke the World',
        subtitle: 'Liaquat Ahamed • 2009',
        description: 'An economic history of Europe and America from WWI to the Great Depression.',
        details: {
          " ": ["4.5/5",
          ],
          "Genre Tags": 'Non-Fiction, Economics, History',
        },
      },
    {
        id: 8,
        title: 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything',
        subtitle: 'Steven D. Levitt and Stephen J. Dubner • 2005',
        description: 'Applying economic thinking to everyday (and not so everyday) problems.',
        details: {
          " ": ["4/5",
          ],
          "Genre Tags": 'Non-Fiction, Economics',
        },
      },
    {
        id: 7,
        title: 'Moscow Rules',
        subtitle: 'Daniel Silva • 2008',
        description: 'Possibly the most legendary Gabrial Allon book, the Office must save Europe from a Russian arms dealer.',
        details: {
          " ": ["4/5",
          ],
          "Genre Tags": 'Fiction, Spy',
        },
      },
    {
        id: 6,
        title: 'The Christmas Train',
        subtitle: 'David Baldacci • 2002',
        description: 'A warm, fuzzy novel about a journalist taking a train home for Christmas - A hallmark movie in book form.',
        details: {
          " ": ["3.5/5",
          ],
          "Genre Tags": 'Fiction',
        },
      },
    {
        id: 5,
        title: 'World Order',
        subtitle: 'Henry Kissinger • 2014',
        description: 'An all-encompassing treatise on the development of the rules of international politics, from the Treaty of Westphalia to today.',
        details: {
          " ": ["4.5/5",
          ],
          "Genre Tags": 'Non-Fiction, Politics',
        },
      },
    {
        id: 4,
        title: 'The Defector',
        subtitle: 'Daniel Silva • 2009',
        description: 'A Russian defector living in London is kidnapped. Gabriel Allon gets to the bottom of it.',
        details: {
          " ": ["3/5",
          ],
          "Genre Tags": 'Fiction, Spy',
        },
      },
    {
        id: 3,
        title: 'The Portrait of Molly Dean',
        subtitle: 'Katherine Kovacic • 2018',
        description: 'An art dealer solves in 1999 solves a murder from 70 years prior.',
        details: {
          " ": ["4.5/5",
          ],
          "Genre Tags": 'Fiction, Crime, Mystery',
          "Date Read": "May 2025"
        },
      },
    {
      id: 2,
      title: 'Black Holes: The Key to Understanding the Universe',
      subtitle: 'Brian Cox and Jeff Forshaw • 2022',
      description: 'Explores a modern understanding of black holes and how they can help us explain the universe.',
      details: {
        " ": ["2/5",
        ],
        "Genre Tags": 'Non-Fiction, Physics, Pop-Science',
        "Date Read": "May 2025"
      },
    },
    {
      id: 1,
      title: 'Misbehaving: The Making of Behavioral Economics',
      subtitle: 'Richard Thaler • 2015',
      description: 'Discusses how Behavioral Economics develops, and its applications in a wide variety of areas.',
      details: {
        " ": [
          'Goes through the history of behavioral economics, starting with Thaler\'s Cornell days. Describes how the field arose out of a series of anomalies in human behavior that suggested humans did not always behave rationally. Touches on Nudge theory and its applications in public policy.',
          'Very much enjoyed reading this book. Not a subject I\m familiar with, and I would definitely enjoy hearing from the non-behavioral side at some point.',
          '4/5'
        ],
        "Genre Tags": 'Non-Fiction, Economics',
        "Date Read": "March 2025"
      },
    },
  ];