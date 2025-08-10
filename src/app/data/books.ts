export interface Book {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    details: {
      [key: string]: string | string[];
    };
  }

export const books: Book[] = [
  {
    id: 18,
    title: 'Robot Proof: Higher Education in the Age of Artificial Intelligence',
    subtitle: 'Joseph E. Aoun • 2017 (Revised 2023)',
    description: 'Describes Aoun\'s vision for the role of the university in educating the workforce of tomorrow.',
    details: {
      "  ": "This book was unimpressive at the start, with Aoun walking through a high level overview of various ideas while offering little in the way of concrete details or supporting arguments. In the first few chapters he quotes the same statistic in 3 different place, to make the same argument 3 different times, and really just feels like he is repeating himself. I got the distinct impression that this already short (160 pages) book would have been better off as a paper or a long form magazine article. The back half did pick up a bit, with some specific examples in chapters 4 and 5 of various programs working in the real world. In the end I certainly think Aoun has the right ideas about what modern higher education could look like - although as a Northeastern student I'm certainly biased - but I'm not convinced this was the most rigorous possible defense of those ideas. If you are particularly interested in learning models or perhaps considering a return to higher education this book might be worth picking up, but otherwise you could get the general picture by visiting Northeastern's website and reading the marketing materials. ",
      "Rating": "1.5/5",
      "Genre Tags": 'Non-Fiction, Technology, Education',
      "Date Read": "August 2025"
    },
    image: "/robot_proof.jpeg"
  },
  {
    id: 17,
    title: 'Destiny and Power: The American Odyssey of George Herbert Walker Bush',
    subtitle: 'Jon Meacham • 2015',
    description: 'Biography of George H.W. Bush, from his childhood to his time as President.',
    details: {
      "  ": "Overall this was an excellent portrait of what ended up being a suprisingly complex subject. At 600 pages it took a while to get through, but in the end it just was not long enough. Meacham received an unprecedented level of cooperation from the Bush family and some of their advisors and staff, and certainly could have included far more material. The sections on Bush's childhood and oil career felt short, with around 1/3 of the book dedicated to the ~4.2% of his life that he was President. That said, the book moves along at an excellent pace, and contains a lot of insight. I thoroughly enjoyed reading it, and would definitely recommend if you have the time.",
      "Rating": "4/5",
      "Genre Tags": 'Non-Fiction, Biography, Politics, History',
      "Date Read": "August 2025"
    },
    image: "/destiny_and_power.jpg"
  },
    {
        id: 16,
        title: 'Eve in Hollywood',
        subtitle: 'Amor Towles • 2013',
        description: 'A novella following Evelyn Ross in Hollywood after Rules of Civility.',
        details: {
          "Rating": "4/5",
          "Genre Tags": 'Fiction',
          "Date Read": "July 2025"
        },
        image: "/eve_in_hollywood.jpg"
      },
    {
        id: 15,
        title: 'Table for Two: Fictions',
        subtitle: 'Amor Towles • 2024',
        description: 'A collection of short stories centered on New York City.',
        details: {
          "Rating": "5/5",
          "Genre Tags": 'Fiction, Short Fiction',
          "Date Read": "July 2025"
        },
        image: "/table_for_two.jpg"
      },
    {
        id: 14,
        title: 'First in his Class',
        subtitle: 'David Maraniss • 1995',
        description: 'Biography of Bill Clinton, up to when he announced his run for president.',
        details: {
          "Rating": "4.5/5",
          "Genre Tags": 'Non-Fiction, Biography, Politics',
          "Date Read": "July 2025"
        },
        image: "/first_in_his_class.png"
      },
    {
        id: 13,
        title: 'The Secret Cardinal',
        subtitle: 'Tom Grace • 2007',
        description: 'A former SOF operator must rescue an imprisoned cardinal in time for an upcoming conclave.',
        details: {
          "Rating": "2.5/5",
          "Genre Tags": 'Fiction, Action, Spy',
        },
      },
    {
        id: 12,
        title: 'Rumpole of the Bailey',
        subtitle: 'John Mortimer • 1978',
        description: '(Mis)adventures of a quirky British barrister - Based on the TV series of the same name.',
        details: {
          "Rating": "3/5",
          "Genre Tags": 'Fiction, Legal Drama',
        },
      },
    {
        id: 11,
        title: 'Washington Rules: America\'s Path to Permanent War',
        subtitle: 'Andrew J. Bacevitch • 2010',
        description: 'Explores the development American military from WWII to today, and argues that American resources would be used better at home.',
        details: {
          "Rating": "2/5",
          "Genre Tags": 'Non-Fiction, Politics',
        },
      },
    {
        id: 10,
        title: 'Mudbound',
        subtitle: 'Hillary Jordan • 2008',
        description: 'Novel exploring racism in the American South amid WWII.',
        details: {
          "Rating": "5/5",
          "Genre Tags": 'Fiction, Historical Fiction',
        },
      },
    {
        id: 9,
        title: 'Lords of Finance: The Bankers Who Broke the World',
        subtitle: 'Liaquat Ahamed • 2009',
        description: 'An economic history of Europe and America from WWI to the Great Depression.',
        details: {
          "Rating": "4.5/5",
          "Genre Tags": 'Non-Fiction, Economics, History',
        },
      },
    {
        id: 8,
        title: 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything',
        subtitle: 'Steven D. Levitt and Stephen J. Dubner • 2005',
        description: 'Applying economic thinking to everyday (and not so everyday) problems.',
        details: {
          "Rating": "4/5",
          "Genre Tags": 'Non-Fiction, Economics',
        },
      },
    {
        id: 7,
        title: 'Moscow Rules',
        subtitle: 'Daniel Silva • 2008',
        description: 'Possibly the most legendary Gabrial Allon book, the Office must save Europe from a Russian arms dealer.',
        details: {
          "Rating": "4/5",
          "Genre Tags": 'Fiction, Spy',
        },
      },
    {
        id: 6,
        title: 'The Christmas Train',
        subtitle: 'David Baldacci • 2002',
        description: 'A warm, fuzzy novel about a journalist taking a train home for Christmas - A hallmark movie in book form.',
        details: {
          "Rating": "2.5/5",
          "Genre Tags": 'Fiction',
        },
      },
    {
        id: 5,
        title: 'World Order',
        subtitle: 'Henry Kissinger • 2014',
        description: 'An all-encompassing treatise on the development of the rules of international politics, from the Treaty of Westphalia to today.',
        details: {
          "Rating": "4/5",
          "Genre Tags": 'Non-Fiction, Politics',
        },
      },
    {
        id: 4,
        title: 'The Defector',
        subtitle: 'Daniel Silva • 2009',
        description: 'A Russian defector living in London is kidnapped. Gabriel Allon gets to the bottom of it.',
        details: {
          "Rating": "2.5/5",
          "Genre Tags": 'Fiction, Spy',
        },
      },
    {
        id: 3,
        title: 'The Portrait of Molly Dean',
        subtitle: 'Katherine Kovacic • 2018',
        description: 'An art dealer solves in 1999 solves a murder from 70 years prior.',
        details: {
          "Rating": "4.5/5",
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
        "Rating": "2/5",
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
        ],
        "Rating": "4/5",
        "Genre Tags": 'Non-Fiction, Economics',
        "Date Read": "March 2025"
      },
    },
  ];