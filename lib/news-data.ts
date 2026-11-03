// News data file
// Add new articles by adding objects to this array
// No need to modify layout code

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'press' | 'update' | 'event' | 'feature';
  image?: string;
  externalUrl?: string;
  content?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'nba-india-partnership-2019',
    title: 'Hoops Creating Hope Partners with NBA India',
    excerpt: 'We ran programs in Mumbai in conjunction with the historic NBA Games in India, bringing international recognition to our mission.',
    date: '2019-10-04',
    category: 'press',
  },
  {
    id: 'hyderabad-expansion-2022',
    title: 'Expanding to Hyderabad: Our Third City',
    excerpt: 'Hoops Creating Hope launches programs in Hyderabad, bringing our basketball-based education model to a third major Indian city.',
    date: '2022-08-15',
    category: 'update',
  },
  {
    id: '2500-students-milestone',
    title: 'Milestone: 2,500+ Students Impacted',
    excerpt: 'We celebrate reaching over 2,500 students across Chennai, Mumbai, Delhi, Hyderabad, and Bangalore with proven 85% high school completion rates.',
    date: '2024-03-01',
    category: 'update',
  },
  {
    id: 'crossover-scholars-2024',
    title: 'Crossover Scholars Program 2024',
    excerpt: 'This year\'s intensive 2-week summer academy brought together students and coaches from around the world for leadership development and basketball coaching.',
    date: '2024-06-15',
    category: 'event',
  },
  {
    id: 'girls-basketball-initiative',
    title: '60% Girls Participation: Breaking Barriers',
    excerpt: 'Our dedicated programs for girls have achieved 60% female participation, empowering young women in communities where opportunities are scarce.',
    date: '2024-01-20',
    category: 'feature',
  },
];

// Independent press and video coverage of Hoops Creating Hope / Crossover Basketball and Scholars
// Academy and its founder. Each item was opened and checked: outlet, title and date come from the
// page itself. Summaries are our own words. Items whose original page is gone link to an archived copy.
export interface PressItem {
  outlet: string;
  title: string;
  /** ISO date. For items only dated by month, use the 1st and set datePrecision: 'month'. */
  date: string;
  datePrecision?: 'month';
  url: string;
  summary: string;
  kind?: 'article' | 'video';
  /** The original page is offline; url points to the Internet Archive copy. */
  archived?: boolean;
}

const press: PressItem[] = [
  {
    outlet: 'NBA.com India',
    title: 'From Hoops to Hope',
    date: '2019-04-02',
    url: 'https://web.archive.org/web/20201219160446/https://in.nba.com/news/hoops-to-hope-crossover-basketball-wnba-star-alana-beard-teach-for-india-amar-jyoti-foundation/b6hrsmk7o3mu1kpmj614litpu',
    archived: true,
    summary: 'Karan Madhok reports from New Delhi as WNBA star Alana Beard joins the Hoops Creating Hope program with Teach For India and the Amar Jyoti Foundation.',
  },
  {
    outlet: 'Diya TV',
    title: 'Diya TV News Headlines for Tuesday, January 22nd, 2019',
    date: '2019-01-22',
    url: 'https://www.youtube.com/watch?v=X6n_6dfuY00',
    kind: 'video',
    summary: 'Includes a segment on WNBA players supporting Crossover Basketball and its Hoops Creating Hope program.',
  },
  {
    outlet: 'SLAM',
    title: 'World Runners',
    date: '2017-08-04',
    url: 'https://slamonline.com/international/crossover-academy-india-basketball/',
    summary: 'Conrad Kaczmarek goes inside the summer program in Chennai, from its 2012 pilot with 45 students to coaching hundreds of girls and boys side by side.',
  },
  {
    outlet: 'Brown Girl Magazine',
    title: 'Shaun Jayachandran Gives Kids in India a Chance at Education Using Basketball',
    date: '2017-06-05',
    url: 'https://browngirlmagazine.com/shaun-jay-basketball-program-underprivileged-kids-school/',
    summary: 'A profile of the founder and the program\'s focus on leadership, gender equity and keeping students in school.',
  },
  {
    outlet: 'Khabar',
    title: 'Good Sports: Hoops Creating Hope',
    date: '2017-04-01',
    datePrecision: 'month',
    url: 'https://khabar.com/column/chai-time/good-sports-hoops-creating-hope/',
    summary: 'Introduces the free two-week summer program in Chennai and the Indian-American college players who volunteer as coaches.',
  },
  {
    outlet: 'Ekalavyas',
    title: 'Crossover Basketball & Scholars Academy - Creating Hope through hoops',
    date: '2015-08-03',
    url: 'https://www.ekalavyas.com/p/crossover-basketball-scholars-academy-creating-hope-hoops',
    summary: 'An interview with the founder about the Chennai camp, its volunteer model and plans to grow.',
  },
  {
    outlet: 'The Washington Post',
    title: 'At basketball camp in India, Maryland\'s Varun Ram lends a helping hand',
    date: '2015-06-24',
    url: 'https://www.washingtonpost.com/news/terrapins-insider/wp/2015/06/24/at-basketball-camp-in-india-marylands-varun-ram-lends-a-helping-hand/',
    summary: 'Follows a University of Maryland player volunteering as a coach with the program in Chennai.',
  },
  {
    outlet: 'TEDx Talks',
    title: 'Basketball lessons to education | Shaun Jayachandran | TEDxSomerville',
    date: '2014-11-25',
    url: 'https://www.youtube.com/watch?v=MmM4R6qcWvY',
    kind: 'video',
    summary: 'The founder\'s TEDx talk on how the leadership lessons kids learn on the court carry into the classroom.',
  },
  {
    outlet: 'Dream About Sports',
    title: 'Shaun J founder of Crossover basketball shares his experiences with DAS',
    date: '2014-09-14',
    url: 'https://www.youtube.com/watch?v=zMYl2iqsQSI',
    kind: 'video',
    summary: 'A video conversation with the founder about using basketball as a vehicle for education in India.',
  },
  {
    outlet: 'The American Bazaar',
    title: 'Helping reach goals by shooting through hoops',
    date: '2013-04-03',
    url: 'https://americanbazaaronline.com/2013/04/03/helping-reach-goals-by-shooting-through-hoops/',
    summary: 'Covers a 3-on-3 tournament in the Washington, DC area raising funds for the program in India.',
  },
  {
    outlet: 'Tufts Daily',
    title: 'Caring changes communities with Crossover Basketball',
    date: '2020-12-11',
    url: 'https://tuftsdaily.com/sports/2020/12/11/caring-changes-communities-with-crossover-basketball/',
    summary: 'Profiles Shaun Jayachandran and the free summer camp in Chennai that has grown from 45 children to nearly 500, with a focus on staying in school and gender equity.',
  },
  {
    outlet: 'India.com',
    title: 'Hoops Creating Hope: Using Basketball To Improve Education in India',
    date: '2015-08-25',
    url: 'https://www.india.com/lifestyle/hoops-creating-hope-using-basketball-to-improve-education-in-india-492632/',
    summary: 'Reports on the fourth Crossover summer camp in Chennai, which drew more than 400 students, and how the program responds to school dropout in India.',
  },
  {
    outlet: 'The Better India',
    title: 'Every Year, This Man Brings Coaches From The USA And Teaches Basketball To Local Children',
    date: '2014-04-16',
    url: 'https://thebetterindia.com/10005/crossover-basketball-academy-sports-development-children-underprivileged/',
    summary: 'Tells the story behind Crossover and its yearly camp where U.S. volunteer coaches train children from different economic backgrounds side by side, at no cost.',
  },
  {
    outlet: 'The Aerogram',
    title: 'Hoops Creating Hope: Using Basketball As a Vehicle of Change in Education',
    date: '2013-08-01',
    url: 'https://theaerogram.com/hoops-creating-hope-using-basketball-as-a-vehicle-of-change-in-education/',
    summary: 'An interview with Shaun Jayachandran about his coaching background and why he sees sports and academics as connected.',
  },
];

// Newest first
export const pressCoverage: PressItem[] = [...press].sort((a, b) => b.date.localeCompare(a.date));

// Helper function to get articles by category
export function getArticlesByCategory(category: NewsArticle['category']) {
  return newsArticles.filter((article) => article.category === category);
}

// Helper function to get latest articles
export function getLatestArticles(count: number = 5) {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Helper function to get article by ID
export function getArticleById(id: string) {
  return newsArticles.find((article) => article.id === id);
}

// Category labels
export const categoryLabels: Record<NewsArticle['category'], string> = {
  press: 'Press',
  update: 'Update',
  event: 'Event',
  feature: 'Feature',
};
