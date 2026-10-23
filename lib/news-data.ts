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
    excerpt: 'We celebrate reaching over 2,500 students across Chennai, Bangalore, and Hyderabad with proven 85% high school completion rates.',
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

// Independent press coverage of Hoops Creating Hope / Crossover and Shaun Jayachandran.
// Dates are the publication dates shown on each outlet's page. Summaries are our own words.
export interface PressItem {
  outlet: string;
  title: string;
  date: string;
  url: string;
  summary: string;
}

export const pressCoverage: PressItem[] = [
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
