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
    id: 27,
    title: 'Do Androids Dream of Electric Sheep?',
    subtitle: 'Philip K. Dick • 1968',
    description: '',
    details: {
      "Review": "",
      "Rating": "3.5/5",
      "Genre Tags": 'Fiction, Sci-fi',
      "Date Read": "25 October 2025"
    },
    image: "/do_androids.jpg"
  },  {
    id: 26,
    title: 'Normal People',
    subtitle: 'Sally Rooney • 2018',
    description: '',
    details: {
      "Review": "",
      "Rating": "5/5",
      "Genre Tags": 'Fiction, Romance',
      "Date Read": "14 October 2025"
    },
    image: "/normal_people.png"
  },  
    {
    id: 25,
    title: 'The Great Dissenter: The Story of John Marshall Harlan, America\'s Judicial Hero',
    subtitle: 'Peter S. Canellos • 2021',
    description: '',
    details: {
      "Review": "",
      "Rating": "4/5",
      "Genre Tags": 'Non-Fiction, Biography, Politics, Law',
      "Date Read": "13 October 2025"
    },
    image: "/great_dissenter.jpg"
  },  
  {
    id: 24,
    title: 'Second Foundation',
    subtitle: 'Isaac Asimov • 1953',
    description: 'The Foundation has risen again after their largest challenge, but now the Second Foundation has been forced to show their hand.',
    details: {
      "Review": "",
      "Rating": "2/5",
      "Genre Tags": 'Fiction, Sci-fi',
      "Date Read": "28 September 2025"
    },
    image: "/second_foundation.jpg"
  },  
  {
    id: 23,
    title: 'Foundation and Empire',
    subtitle: 'Isaac Asimov • 1952',
    description: 'Continues the tale of the foundation in two more short stories, including the rise of a unforseen force that throws Seldon\'s plan into disarray',
    details: {
      "Review": "",
      "Rating": "3/5",
      "Genre Tags": 'Fiction, Sci-fi',
      "Date Read": "14 September 2025"
    },
    image: "/foundation_and_empire.jpg"
  },
  {
    id: 22,
    title: 'Foundation',
    subtitle: 'Isaac Asimov • 1951',
    description: 'Asimov\'s most famous work, a collection of 5 connected short stories set in the waning years of a Galactic Empire 10,000 years in the future ',
    details: {
      "Review": "This book was not at all what I expected, which probably shows how little I know about 1950s science fiction. Asimov is very succinct, and does not bother to build out his world in too much detail, but moves through a very interesting plot at an incredible pace. The entire time I was reading this I was thinking about Dune, and it now seems that Frank Herbert must have gotten a ton of his ideas from Asimov (although he leaves far less of his universe to the imagination). The powers of psychohistory admittedly push the limits of suspension of disbelief (did you know I'm a math major? That's right, I studied statistics), but as a plot device it allows the story to explore different themes without feeling disconnected. Overall, this was a great book, and I can't wait to read through more of the series",
      "Rating": "4.5/5",
      "Genre Tags": 'Fiction, Sci-fi',
      "Date Read": "7 September 2025"
    },
    image: "/foundation.jpg"
  },
  {
    id: 21,
    title: 'The Boys from Biloxi',
    subtitle: 'John Grisham • 2022',
    description: 'Legal thriller following two boys and their experiences with the criminal underworld in Biloxi, MS',
    details: {
      "Review": "This was an exciting novel with a fantastic ending. It took a little while to get started, I felt like the exposition went on a little long, but by the end I was completely hooked. Grisham's writing style is incredibly straightforward, and I would almost say it lacked color except for the fact that I couldn't put the book down. The characters developed well over the course of the novel, and the intertwining stories of the two boys led to a satisfying, if ultimately slightly melodramatic, ending",
      "Rating": "4/5",
      "Genre Tags": 'Fiction, Crime, Legal Drama',
      "Date Read": "31 August 2025"
    },
    image: "/boys_from_biloxi.jpg"
  },
  {
    id: 20,
    title: 'Decision Points',
    subtitle: 'George W. Bush • 2010',
    description: 'Memoirs of Bush Jr. focusing on the most influential decisions he made before and during his presidency.',
    details: {
      "Review": "This was the first political autobiography/memoir that I have read, and overall it was definitely worth the time. Bush's writing is clear and concise, and in many ways he does well to explain why the decisions he made were the right ones at the time. He presents some interesting insights into the White House decision making process, although the focus on his personal decisions certainly obscures the contributions of others in the executive branch. Given that I was born after 9/11, I had mostly heard the modern take on Bush Jr; that he was a war monger who lied to our allies and our nation to get us to invade Iraq. The chapters of this book focused on 9/11, and the decisions afterward, certainly gave me a better picture of the environment of the time. That said, Decision Points is pretty explicitly a defense of the second Bush presidency, and for that reason Bush somewhat glosses over issues that others might think significant. His DUI, his use of his Dad's influence to obtain a national guard position, thus avoiding the Vietnam draft, the fact that there were not WMDs in Iraq, all of these probably would have been given more time in a more critical review. He also presents a few chapters (\"Leading\", \"Freedom Agenda\") that read more like lists of achievements that insights into his decisions. I think the real value in this book lies in the chapters that focused on one particular issue (\"Stem Cells\"), where he truly does give good insight into the decision making and crisis response process in the White House, and lays out his personal values as well. In the end, I would recommend this book to anyone interested in the time, although I would caution that it should be approached with some amount of skepticism.",
      "Rating": "3.5/5",
      "Genre Tags": 'Non-Fiction, Biography, Politics',
      "Date Read": "23 August 2025"
    },
    image: "/decision_points.jpg"
  },
  {
    id: 19,
    title: 'Munich',
    subtitle: 'Robert Harris • 2017',
    description: 'Historical novel covering a 4 day period around the Munich agreement of 1938.',
    details: {
      "Review": "Munich was a surprisingly fun book that I got pulled in to and ended up reading in about a day. It has interesting characters and an interesting premise, and moves along at an excellent pace. However, its clumsy use of plot devices and uneven tone ultimately detracted from the story, and any message that it might have contained. The ending, especially the resolution to the missing file subplot, feels shoehorned in, and doesn't match the rest of the book. The mysterious girl in the past is a bit forced, and fails to truly engage the reader. I definitely recommend this book as entertainment if you have some spare time, but I don't think anyone will be advocating for it to enter the literary canon. ",
      "Rating": "3.5/5",
      "Genre Tags": 'Fiction, Historical Fiction',
      "Date Read": "10 August 2025"
    },
    image: "/munich.jpg"
  },
  {
    id: 18,
    title: 'Robot Proof: Higher Education in the Age of Artificial Intelligence',
    subtitle: 'Joseph E. Aoun • 2017 (Revised 2023)',
    description: 'Describes Aoun\'s vision for the role of the university in educating the workforce of tomorrow.',
    details: {
      "Review": "This book was unimpressive at the start, with Aoun walking through a high level overview of various ideas while offering little in the way of concrete details or supporting arguments. In the first few chapters he quotes the same statistic in 3 different place, to make the same argument 3 different times, and really just feels like he is repeating himself. I got the distinct impression that this already short (160 pages) book would have been better off as a paper or a long form magazine article. The back half did pick up a bit, with some specific examples in chapters 4 and 5 of various programs working in the real world. In the end I certainly think Aoun has the right ideas about what modern higher education could look like - although as a Northeastern student I'm certainly biased - but I'm not convinced this was the most rigorous possible defense of those ideas. If you are particularly interested in learning models or perhaps considering a return to higher education this book might be worth picking up, but otherwise you could get the general picture by visiting Northeastern's website and reading the marketing materials. ",
      "Rating": "1.5/5",
      "Genre Tags": 'Non-Fiction, Technology, Education',
      "Date Read": "9 August 2025"
    },
    image: "/robot_proof.jpeg"
  },
  {
    id: 17,
    title: 'Destiny and Power: The American Odyssey of George Herbert Walker Bush',
    subtitle: 'Jon Meacham • 2015',
    description: 'Biography of George H.W. Bush, from his childhood to his time as President.',
    details: {
      "Review": "Overall this was an excellent portrait of what ended up being a suprisingly complex subject. At 600 pages it took a while to get through, but in the end it just was not long enough. Meacham received an unprecedented level of cooperation from the Bush family and some of their advisors and staff, and certainly could have included far more material. The sections on Bush's childhood and oil career felt short, with around 1/3 of the book dedicated to the ~4.2% of his life that he was President. That said, the book moves along at an excellent pace, and contains a lot of insight. I thoroughly enjoyed reading it, and would definitely recommend if you have the time.",
      "Rating": "4.5/5",
      "Genre Tags": 'Non-Fiction, Biography, Politics, History',
      "Date Read": "8 August 2025"
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
        image: "/secret_cardinal.jpg"
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
        image: "/rumpole_of_the_bailey.jpg"
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
        image: "/washington_rules.png"
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
        image: "/mudbound.jpg"
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
        image: "/lords_of_finance.jpg"
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
        image: "/freakonomics.jpg"
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
        image: "/moscow_rules.jpg"
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
        image: "/the_christmas_train.jpg"
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
        image: "/world_order.jpg"
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
        image: "/the_defector.jpg"
      },
    {
        id: 3,
        title: 'The Portrait of Molly Dean',
        subtitle: 'Katherine Kovacic • 2018',
        description: 'An art dealer in 1999 solves a murder from 70 years prior.',
        details: {
          "Rating": "4.5/5",
          "Genre Tags": 'Fiction, Crime, Mystery',
          "Date Read": "May 2025"
        },
        image: "/portrait_of_molly_dean.jpg"
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
      image: "/black_holes.jpg"
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
      image: "/misbehaving.jpg"
    },
  ];