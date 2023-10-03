import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import { categories } from './data/categories';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Category" type defines the queryable fields for every category in our data source.
  type Category {
    name: String
    description: String
	image:String
  }

  type Challenge {
    id: Int
    name: String
    description: String
    image: String
    daysLeft: Int
    praying: Int
  }

type Routine {
  id: Int!
  name: String!
  description: String!
  image: String!
  duration: String!
}

type MorningRoutine {
  id: Int!
  name: String!
  description: String!
  image: String!
  duration: String!
}

type NightRoutine {
  id: Int!
  name: String!
  description: String!
  image: String!
  duration: String!
}

type QuickBreak {
  id: Int!
  name: String!
  description: String!
  image: String!
  duration: String!
}

type Lesson {
  id: Int!
  name: String!
  description: String!
  image: String!
  duration: String!
}

type MentalHealthTip {
  id: Int!
  name: String!
  description: String!
  image: String!
  duration: String!
}

type Starter {
  id: Int!
  name: String!
  description: String!
  image: String!
  duration: String!
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "categories" query returns an array of zero or more Categories (defined above).
  type Query {
    categories: [Category]
	challenges: [Challenge]
	routines: [Routine]
	quickBreaks: [QuickBreak]
	morningRoutines: [MorningRoutine]
	nightRoutines: [NightRoutine]
	lessons: [Lesson]
	starters: [Starter]
	mentalHealthTips: [MentalHealthTip]
  }
`;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves categories from the "categories" array above.
const resolvers = {
    Query: {
        categories: () => categories,
        challenges: () => challenges,
        // routines: () => routines,
        morningRoutines: () => morningRoutines,
        nightRoutines: () => nightRoutines,
        quickBreaks: () => quickBreaks,
        mentalHealthTips: () => mentalHealthTips,
        lessons: () => lessons,
        starters: () => starters,
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
});
console.log(`🚀  Server ready at: ${url}`);
// data
// the people of our prophet have too many storioes to be mentioned at once
// You can replace 'image_url_for_X' with actual image URLs for each prophet's story if needed.
export const mentalHealthTips = [
    {
        id: 1,
        name: 'Tawakkul (Trust in Allah)',
        description: 'Tawakkul is the Islamic concept of placing trust and reliance on Allah. It helps reduce anxiety and stress by recognizing that ultimate control rests with Allah, and humans can only do their best.',
    },
    {
        id: 2,
        name: 'Dua (Supplication)',
        description: 'Praying and making supplications to Allah is a powerful way to seek comfort, guidance, and relief during times of mental distress or hardship.',
    },
    {
        id: 3,
        name: 'Sabr (Patience)',
        description: 'Sabr is the virtue of patience and perseverance in the face of adversity. It can be a source of inner strength and resilience during difficult times.',
    },
    {
        id: 4,
        name: 'Community Support',
        description: 'Engaging with the Muslim community and seeking support from friends, family, or mental health professionals is encouraged to address mental health challenges.',
    },
    {
        id: 5,
        name: 'Gratitude (Shukr)',
        description: "Practicing gratitude and recognizing the blessings in one's life can improve mental well-being and foster a positive outlook.",
    },
    {
        id: 6,
        name: 'Self-Care',
        description: "Taking care of one's physical and emotional needs, as well as seeking a balance between worldly and spiritual obligations, is vital for mental health.",
    },
    {
        id: 7,
        name: 'Forgiveness',
        description: 'Forgiving oneself and others can release mental burdens and promote inner peace. Islam encourages forgiveness as a path to mental healing.',
    },
    {
        id: 8,
        name: 'Seeking Knowledge',
        description: 'Acquiring knowledge, especially related to Islamic teachings and personal development, is a means to improve mental health and well-being.',
    },
    {
        id: 9,
        name: 'Helping Others',
        description: 'Assisting those in need and engaging in acts of kindness and charity can bring a sense of purpose and fulfillment, positively impacting mental health.',
    },
    {
        id: 10,
        name: 'Awareness and Destigmatization',
        description: 'Raising awareness about mental health issues within the Muslim community and destigmatizing seeking professional help is essential for addressing mental health challenges.',
    },
];
export const courses = [
    {
        id: 1,
        name: 'Seeking Knowledge',
        description: 'In Islam, seeking knowledge is highly encouraged. Taking a course is a means of acquiring knowledge and fulfilling a religious duty.',
    },
    {
        id: 2,
        name: 'Islamic Studies',
        description: 'Courses on Islamic studies cover a wide range of topics, including Quranic studies, Hadith, Islamic jurisprudence (Fiqh), and theology (Aqidah).',
    },
    {
        id: 3,
        name: 'Islamic Ethics and Morality',
        description: 'Courses on Islamic ethics and morality teach the principles of honesty, kindness, justice, and compassion, guiding students to live a righteous life.',
    },
    {
        id: 4,
        name: 'Arabic Language',
        description: 'Learning Arabic is essential for understanding the Quran and Hadith. Courses in Arabic language help students access Islamic texts in their original form.',
    },
    {
        id: 5,
        name: 'Tafsir (Quranic Exegesis)',
        description: 'Tafsir courses delve into the interpretation and commentary of the Quranic verses, providing deeper insights into the Quranic text.',
    },
    {
        id: 6,
        name: 'Hadith Sciences',
        description: 'Courses on Hadith sciences teach the methodology of authenticating and understanding the sayings and actions of the Prophet Muhammad.',
    },
    {
        id: 7,
        name: 'Fiqh (Islamic Jurisprudence)',
        description: 'Fiqh courses guide students in understanding Islamic laws and how they apply to various aspects of life, including worship, ethics, and transactions.',
    },
    {
        id: 8,
        name: 'Islamic History and Civilization',
        description: 'Courses on Islamic history explore the rich heritage of Muslim civilizations, including the contributions of Muslim scholars, scientists, and philosophers.',
    },
    {
        id: 9,
        name: 'Online Learning',
        description: 'With advancements in technology, online courses have become a convenient way to access Islamic education from anywhere in the world.',
    },
    {
        id: 10,
        name: 'Continual Learning',
        description: 'Islamic education is a lifelong journey. Taking multiple courses ensures ongoing spiritual and intellectual growth in the faith.',
    },
];
export const tasbeeh = [
    {
        id: 1,
        name: 'The Virtue of Tasbeeh',
        description: 'Tasbeeh, the act of glorifying and remembering Allah through repetitive phrases, holds a special virtue in Islam. It serves as a means of drawing closer to Allah, seeking His forgiveness, and finding tranquility in remembrance.',
    },
    {
        id: 2,
        name: 'SubhanAllah (Glory be to Allah)',
        description: 'Reciting "SubhanAllah" signifies acknowledging Allah\'s perfection and transcendence over all imperfections. It is a common form of Tasbeeh.',
    },
    {
        id: 3,
        name: 'Alhamdulillah (Praise be to Allah)',
        description: '"Alhamdulillah" expresses gratitude and praise to Allah. It is another important phrase in the practice of Tasbeeh.',
    },
    {
        id: 4,
        name: 'Allahu Akbar (Allah is the Greatest)',
        description: '"Allahu Akbar" affirms Allah\'s greatness and supremacy. It is recited during various acts of worship and is a powerful form of Tasbeeh.',
    },
    {
        id: 5,
        name: 'Astaghfirullah (I seek forgiveness from Allah)',
        description: 'Reciting "Astaghfirullah" is an act of seeking forgiveness and repentance. It reminds us of our human imperfections and Allah\'s mercy and forgiveness.',
    },
    {
        id: 6,
        name: 'Tasbeeh Beads (Misbahah)',
        description: 'Tasbeeh beads (Misbahah) are a practical tool for counting repetitions while engaging in Tasbeeh. Each bead represents a phrase, facilitating focused remembrance of Allah.',
    },
];
export const quranReflections = [
    {
        name: 'Reflecting on the Quran',
        description: 'Reflect on the Quran as a source of divine guidance without contradictions. [Quran 4:82]',
    },
    {
        name: 'Guidance and Good Tidings',
        description: 'The Quran is a guide to what is suitable and brings good news to believers who do righteous deeds. [Quran 17:9]',
    },
    {
        name: 'Understanding the Quran',
        description: 'The Quran was revealed in Arabic for understanding, emphasizing the importance of comprehension. [Quran 12:2]',
    },
    {
        name: 'Ease of Remembering',
        description: 'Allah has made the Quran easy to remember, and we are encouraged to be mindful of it. [Quran 54:17]',
    },
    {
        name: 'Active Engagement',
        description: 'When reminded of the verses of the Lord, we should not be deaf and blind but actively engage and reflect. [Quran 25:73]',
    },
];
export const IslamicKnowledgeAreas = [
    {
        id: 1,
        name: 'The Quran',
        description: 'Reading, reciting, and understanding the Quran, the holy book of Islam.',
    },
    {
        id: 2,
        name: 'Hadith',
        description: 'Studying the recorded sayings, actions, and approvals of the Prophet Muhammad.',
    },
    {
        id: 3,
        name: 'Aqidah (Theology)',
        description: 'Understanding the core beliefs of Islam, including the oneness of God and the Day of Judgment.',
    },
    {
        id: 4,
        name: 'Fiqh (Islamic Jurisprudence)',
        description: 'Learning Islamic laws and how they apply to various aspects of life.',
    },
    {
        id: 5,
        name: 'Salat (Prayer)',
        description: 'Mastering the five daily prayers, including recitations and postures.',
    },
    {
        id: 10,
        name: 'Tazkiyah (Purification of the Soul)',
        description: 'Pursuing self-purification, moral development, and spiritual growth.',
    },
    {
        id: 11,
        name: 'Islamic Ethics and Morality',
        description: 'Learning Islamic values, ethics, and moral principles.',
    },
    {
        id: 12,
        name: 'Islamic Art and Culture',
        description: 'Studying Islamic art, architecture, and cultural heritage influenced by Islamic principles.',
    },
    {
        id: 13,
        name: 'Arabic Language',
        description: 'Mastering the Arabic language to understand Quranic text and Islamic literature.',
    },
];
export const starters = [
    {
        id: 1,
        name: 'Wudu (Ablution)',
        description: 'Learning the steps and significance of ritual purification before prayers.',
    },
    {
        id: 2,
        name: 'Ghusl (Full Bath)',
        description: 'Understanding when and how to perform a full bath for purification.',
    },
    {
        id: 3,
        name: 'Halal and Haram',
        description: 'Recognizing permissible (halal) and prohibited (haram) aspects of food, drink, and daily life.',
    },
    {
        id: 4,
        name: 'Dress Code (Hijab)',
        description: 'Exploring the principles of modesty in clothing and the concept of hijab (for women).',
    },
    {
        id: 5,
        name: 'Islamic Diet and Nutrition',
        description: 'Learning about Islamic dietary guidelines, including avoiding pork and alcohol.',
    },
    {
        id: 6,
        name: 'Prayer Timings and Qibla',
        description: 'Understanding how to determine prayer times and face the Qibla (direction of Mecca).',
    },
    {
        id: 7,
        name: 'Islamic Calendar',
        description: 'Familiarizing oneself with the Islamic lunar calendar and its important dates.',
    },
    {
        id: 8,
        name: 'Basic Arabic Phrases',
        description: 'Learning common Arabic phrases for prayer and daily interactions.',
    },
    {
        id: 9,
        name: 'Introduction to Islamic History',
        description: 'Exploring the history and life of Prophet Muhammad and early Islamic civilization.',
    },
    {
        id: 10,
        name: 'Personal Hygiene and Cleanliness',
        description: 'Maintaining proper hygiene practices in accordance with Islamic teachings.',
    },
];
export const kidsActivities = [
    {
        id: 1,
        name: 'Islamic Stories',
        description: 'Engage kids with stories from Islamic history and Prophets.',
        ageRange: 'All Ages',
    },
    {
        id: 2,
        name: 'Learning Quranic Verses',
        description: 'Teach kids to recite and understand Quranic verses.',
        ageRange: '3+ years',
    },
    {
        id: 3,
        name: 'Islamic Art and Crafts',
        description: 'Encourage creativity through Islamic-themed art and crafts.',
        ageRange: '4+ years',
    },
    {
        id: 4,
        name: 'Arabic Language Learning',
        description: 'Introduce kids to the Arabic language and alphabet.',
        ageRange: '5+ years',
    },
    {
        id: 5,
        name: 'Islamic Games and Puzzles',
        description: 'Educational games and puzzles with Islamic themes.',
        ageRange: '6+ years',
    },
    {
        id: 6,
        name: 'Islamic Coloring Books',
        description: 'Coloring books featuring Islamic motifs and characters.',
        ageRange: '3+ years',
    },
    {
        id: 7,
        name: 'Islamic Songs and Nasheeds',
        description: 'Listen to and sing along with Islamic songs for kids.',
        ageRange: 'All Ages',
    },
    {
        id: 8,
        name: 'Islamic Etiquette and Manners',
        description: 'Teach kids Islamic manners and etiquette.',
        ageRange: '4+ years',
    },
    {
        id: 9,
        name: 'Islamic Dress-Up Play',
        description: 'Dress-up activities with Islamic clothing and accessories.',
        ageRange: '3+ years',
    },
    {
        id: 10,
        name: 'Islamic Science and Nature',
        // world is tilted on a axis
        description: 'Explore science and nature from an Islamic perspective.',
        ageRange: '6+ years',
    },
];
export const lessons = [
    {
        id: 1,
        name: 'Tawhid (Monotheism)',
        description: 'Belief in the oneness of Allah.',
        duration: 'Ongoing',
    },
    {
        id: 2,
        name: 'Salah (Prayer)',
        description: 'Daily prayers to connect with Allah.',
        duration: '5 times a day',
    },
    {
        id: 3,
        name: 'Zakat (Charity)',
        description: 'Giving to those in need as Ibadah.',
        duration: 'Yearly',
    },
    {
        id: 4,
        name: 'Sawm (Fasting)',
        description: 'Fasting during Ramadan for self-purification.',
        duration: 'Month of Ramadan',
    },
    {
        id: 5,
        name: 'Hajj (Pilgrimage)',
        description: 'Pilgrimage to Mecca as an obligation.',
        duration: 'Once in a lifetime, if able',
    },
    {
        id: 6,
        name: 'Kindness and Compassion',
        description: 'Practice kindness and compassion in daily life.',
        duration: 'Ongoing',
    },
    {
        id: 7,
        name: 'Justice and Fairness',
        description: 'Promote justice and fairness in all dealings.',
        duration: 'Ongoing',
    },
    {
        id: 8,
        name: 'Honesty and Truthfulness',
        description: 'Adhere to honesty and truthfulness in all aspects.',
        duration: 'Ongoing',
    },
    {
        id: 9,
        name: 'Respect for Knowledge and Education',
        description: 'Value knowledge and pursue education.',
        duration: 'Ongoing',
    },
];
export const morningRoutines = [
    {
        id: 1,
        name: 'Daily Khutba',
        description: 'Start your day with a sermon.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qur%27an_and_Rehal.jpg/640px-Qur%27an_and_Rehal.jpg',
        duration: '20 minutes',
    },
    {
        id: 2,
        name: 'Islamic Reflection',
        description: 'Reflect on Islamic teachings.',
        content: [],
        image: 'https://media.licdn.com/dms/image/C5112AQHPcxj4kh9AmA/article-cover_image-shrink_600_2000/0/1520089674924?e=2147483647&v=beta&t=GWINL3JNehtf0Pf90JUscoV7A8CmF0aCFSdDhvSBMW8',
        duration: '30 minutes',
    },
    {
        id: 3,
        name: 'Daily Tafsir',
        description: 'Engage in nightly prayers.',
        content: [],
        image: 'https://www.azernews.az/media/2023/07/07/1174386645.jpg',
        duration: '10-15 minutes',
    },
    {
        id: 4,
        name: 'Gratitude & Reflection',
        description: 'Reflect and express gratitude.',
        content: [],
        image: 'https://m2w4k5m5.stackpathcdn.com/wp-content/uploads/sonni-ali-1.jpg',
        duration: '15 minutes',
    },
    {
        id: 5,
        name: 'Divine Remembrance',
        description: 'Remember Allah with Dhikr.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        duration: '15 minutes',
    },
    {
        id: 6,
        name: 'Morning Contemplation',
        description: 'Contemplate on your spirituality.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        duration: '15 minutes',
    },
    {
        id: 7,
        name: 'Quranic Study',
        description: 'Study and reflect on the Quran.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        duration: '15 minutes',
    },
    {
        id: 8,
        name: 'Recite Al-Fatiha',
        description: 'As muslims we ask Allah for aid.',
        content: [],
        image: 'https://example.com/surah-al-fatiha.jpg',
        duration: '10 minutes',
    },
    {
        id: 9,
        name: 'Acts of Kindness',
        description: 'Perform acts of kindness.',
        content: [],
        image: 'https://example.com/charity.jpg',
        duration: '7 minutes',
    },
];
export const nightRoutines = [
    {
        id: 1,
        name: 'Nightly Quran Recitation',
        description: 'Recite and reflect on Quranic verses.',
        image: 'https://yaqeeninstitute.org/wp-content/uploads/2018/10/Hadith_HeroImages.jpg',
        duration: '15 minutes',
    },
    {
        id: 2,
        name: 'Dua and Supplication',
        description: 'Engage in heartfelt supplications.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qur%27an_and_Rehal.jpg/640px-Qur%27an_and_Rehal.jpg',
        duration: '20 minutes',
    },
    {
        id: 3,
        name: 'Nightly Islamic Study',
        description: 'Study Islamic texts (e.g., Hadith or Tafsir).',
        content: [],
        image: 'https://media.licdn.com/dms/image/C5112AQHPcxj4kh9AmA/article-cover_image-shrink_600_2000/0/1520089674924?e=2147483647&v=beta&t=GWINL3JNehtf0Pf90JUscoV7A8CmF0aCFSdDhvSBMW8',
        duration: '30 minutes',
    },
    {
        id: 4,
        name: 'Qiyam-ul-Lail (Night Prayer)',
        description: 'Perform voluntary night prayer.',
        content: [],
        image: 'https://www.azernews.az/media/2023/07/07/1174386645.jpg',
        duration: '10-15 minutes',
    },
    {
        id: 5,
        name: 'Self-Reflection and Gratitude',
        description: 'Reflect, express gratitude, and repent.',
        content: [],
        image: 'https://m2w4k5m5.stackpathcdn.com/wp-content/uploads/sonni-ali-1.jpg',
        duration: '15 minutes',
    },
    {
        id: 6,
        name: 'Tasbih and Dhikr',
        description: 'Engage in remembrance of Allah.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        duration: '15 minutes',
    },
    {
        id: 6,
        name: 'Tomorrows day',
        description: 'Inshallah indeed the powerful is Allah.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        duration: '15 minutes',
    },
];
export const features = [
    {
        id: 1,
        categoryId: 1,
        name: 'Daily Quran Reflection',
        description: 'Reflect on a new Quranic verse every day.',
        image: 'https://yaqeeninstitute.org/wp-content/uploads/2018/10/Hadith_HeroImages.jpg',
        duration: '15 minutes', // Example value, replace with the actual duration.
    },
    {
        id: 2,
        categoryId: 1,
        name: 'Islamic Wisdom Insights',
        description: 'Discover daily insights from Islamic wisdom and teachings.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qur%27an_and_Rehal.jpg/640px-Qur%27an_and_Rehal.jpg',
        duration: '20 minutes', // Example value, replace with the actual duration.
    },
    {
        id: 3,
        categoryId: 2,
        name: "Companions' Stories",
        description: 'Learn about the inspiring lives of the Prophet’s companions.',
        content: [],
        image: 'https://media.licdn.com/dms/image/C5112AQHPcxj4kh9AmA/article-cover_image-shrink_600_2000/0/1520089674924?e=2147483647&v=beta&t=GWINL3JNehtf0Pf90JUscoV7A8CmF0aCFSdDhvSBMW8',
        duration: '30 minutes', // Example value, replace with the actual duration.
    },
    {
        id: 4,
        categoryId: 3,
        name: 'Quran Recitations',
        description: 'Listen to beautiful Quranic recitations daily.',
        content: [],
        image: 'https://www.azernews.az/media/2023/07/07/1174386645.jpg',
        duration: '10 sessions', // Example value, replace with the actual duration.
    },
    {
        id: 5,
        categoryId: 2,
        name: 'Islamic History Journey',
        description: 'Embark on a journey to explore the rich history of Islam.',
        content: [],
        image: 'https://m2w4k5m5.stackpathcdn.com/wp-content/uploads/sonni-ali-1.jpg',
        duration: '1 hour per day', // Example value, replace with the actual duration.
    },
    {
        id: 6,
        categoryId: 4,
        name: 'Islamic Art Appreciation',
        description: 'Admire and learn about the beauty of Islamic art and calligraphy.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        duration: '45 minutes', // Example value, replace with the actual duration.
    }, // write a cron job to take random ones nto featured
];
export const quickBreaks = [
    {
        id: 1,
        categoryId: 1,
        name: 'Daily Quran Reflection',
        description: 'Reflect on a new Quranic verse every day.',
        image: 'https://yaqeeninstitute.org/wp-content/uploads/2018/10/Hadith_HeroImages.jpg',
        duration: '15 minutes', // Example value, replace with the actual duration.
    },
    {
        id: 2,
        categoryId: 1,
        name: 'Islamic Wisdom Insights',
        description: 'Discover daily insights from Islamic wisdom and teachings.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qur%27an_and_Rehal.jpg/640px-Qur%27an_and_Rehal.jpg',
        duration: '20 minutes', // Example value, replace with the actual duration.
    },
    {
        id: 3,
        categoryId: 2,
        name: "Companions' Stories",
        description: 'Learn about the inspiring lives of the Prophet’s companions.',
        content: [],
        image: 'https://media.licdn.com/dms/image/C5112AQHPcxj4kh9AmA/article-cover_image-shrink_600_2000/0/1520089674924?e=2147483647&v=beta&t=GWINL3JNehtf0Pf90JUscoV7A8CmF0aCFSdDhvSBMW8',
        duration: '30 minutes', // Example value, replace with the actual duration.
    },
    {
        id: 4,
        categoryId: 3,
        name: 'Quran Recitations',
        description: 'Listen to beautiful Quranic recitations daily.',
        content: [],
        image: 'https://www.azernews.az/media/2023/07/07/1174386645.jpg',
        duration: '10 sessions', // Example value, replace with the actual duration.
    },
    {
        id: 5,
        categoryId: 2,
        name: 'Islamic History Journey',
        description: 'Embark on a journey to explore the rich history of Islam.',
        content: [],
        image: 'https://m2w4k5m5.stackpathcdn.com/wp-content/uploads/sonni-ali-1.jpg',
        duration: '1 hour per day', // Example value, replace with the actual duration.
    },
    {
        id: 6,
        categoryId: 4,
        name: 'Islamic Art Appreciation',
        description: 'Admire and learn about the beauty of Islamic art and calligraphy.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        duration: '45 minutes', // Example value, replace with the actual duration.
    },
];
export const categories = [
    {
        id: 1,
        name: 'Daily Hadith',
        description: 'Explore a new Hadith every day.',
        image: 'https://yaqeeninstitute.org/wp-content/uploads/2018/10/Hadith_HeroImages.jpg',
    },
    {
        id: 2,
        name: 'Quranic Insights',
        description: 'Discover the teachings of the Quran daily.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qur%27an_and_Rehal.jpg/640px-Qur%27an_and_Rehal.jpg',
    },
    {
        id: 3,
        name: "Companions' Stories",
        description: 'Learn about the lives of the companions.',
        content: [],
        image: 'https://media.licdn.com/dms/image/C5112AQHPcxj4kh9AmA/article-cover_image-shrink_600_2000/0/1520089674924?e=2147483647&v=beta&t=GWINL3JNehtf0Pf90JUscoV7A8CmF0aCFSdDhvSBMW8',
    },
    {
        id: 4,
        name: 'Quran Recitations',
        description: 'Listen to beautiful Quranic recitations.',
        content: [],
        image: 'https://www.azernews.az/media/2023/07/07/1174386645.jpg',
    },
    {
        id: 5,
        name: 'Islamic History',
        description: 'Explore the diverse history of Islam.',
        content: [],
        image: 'https://m2w4k5m5.stackpathcdn.com/wp-content/uploads/sonni-ali-1.jpg', // Replace with the actual image URL for Islamic History.
    },
    {
        id: 6,
        name: 'Islamic Art',
        description: 'Admire Islamic art and calligraphy.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg', // Replace with the actual image URL for Islamic Art.
    },
];
export const challenges = [
    {
        id: 1,
        name: 'Daily Quran Reflection',
        description: 'Reflect on a new Quranic verse every day.',
        image: 'https://yaqeeninstitute.org/wp-content/uploads/2018/10/Hadith_HeroImages.jpg',
        daysLeft: 5,
        praying: 3, // Example value, replace with the actual number for praying.
    },
    {
        id: 2,
        name: 'Islamic Wisdom Insights',
        description: 'Discover daily insights from Islamic wisdom and teachings.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qur%27an_and_Rehal.jpg/640px-Qur%27an_and_Rehal.jpg',
        daysLeft: 7,
        praying: 2, // Example value, replace with the actual number for praying.
    },
    {
        id: 3,
        name: "Companions' Stories",
        description: 'Learn about the inspiring lives of the Prophet’s companions.',
        content: [],
        image: 'https://media.licdn.com/dms/image/C5112AQHPcxj4kh9AmA/article-cover_image-shrink_600_2000/0/1520089674924?e=2147483647&v=beta&t=GWINL3JNehtf0Pf90JUscoV7A8CmF0aCFSdDhvSBMW8',
        daysLeft: 10,
        praying: 1, // Example value, replace with the actual number for praying.
    },
    {
        id: 4,
        name: 'Quran Recitations',
        description: 'Listen to beautiful Quranic recitations daily.',
        content: [],
        image: 'https://www.azernews.az/media/2023/07/07/1174386645.jpg',
        daysLeft: 3,
        praying: 5, // Example value, replace with the actual number for praying.
    },
    {
        id: 5,
        name: 'Islamic History Journey',
        description: 'Embark on a journey to explore the rich history of Islam.',
        content: [],
        image: 'https://m2w4k5m5.stackpathcdn.com/wp-content/uploads/sonni-ali-1.jpg',
        daysLeft: 15,
        praying: 0, // Example value, replace with the actual number for praying.
    },
    {
        id: 6,
        name: 'Islamic Art Appreciation',
        description: 'Admire and learn about the beauty of Islamic art and calligraphy.',
        content: [],
        image: 'https://starsinsymmetry.files.wordpress.com/2013/12/image-php.jpg',
        daysLeft: 8,
        praying: 4, // Example value, replace with the actual number for praying.
    },
];
const sleepQuranStories = [
    {
        id: 1,
        prophet: 'Adam',
        story: 'The first man and woman in paradise.',
        image: 'https://imgs.search.brave.com/0huFCV4HNH4zNMQdL6yMVOo-Y10mCi47ixprCXcH6Mc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MTgwOTUzMy9waG90/by90aGUtdmluZXMt/aGF2ZS1vdmVyZ3Jv/d24tdGhlLXdhbGwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW1LUE9KcTJsdlRB/Rm9OblpLR3RsRUVl/S1c2aFZaQ01PTzB4/aS1GS3M5eDg9',
    },
    {
        id: 2,
        prophet: 'Nuh (Noah)',
        story: 'The great flood and Prophet Noah.',
        image: 'https://imgs.search.brave.com/cFNkU8lb1Up1aBMJ3vFYhKMJnmI3ox5ZRdPQI2dDLHw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzM1Lzg4LzYx/LzM2MF9GXzEzNTg4/NjEzOV9ZNGFWQk0x/S05WVFFYeWJkTFVD/dkFBeW5xTnloZWlN/My5qcGc',
    },
    {
        id: 3,
        prophet: 'Ibrahim (Abraham)',
        story: 'Trials of Prophet Abraham and monotheism.',
        image: 'https://imgs.search.brave.com/kY1zKjAptZVPgQc4-oboZui9qVOjFgC5xBzIn5h7_fk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgy/MzQ0MDEzL3Bob3Rv/L3NoZWVwLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Zc1JT/N0NrUE1maEJkVXR0/dWVuWFh4Y0lTUlo1/bnIxalZSZ1doNkRO/V044PQ',
    },
    {
        id: 4,
        prophet: 'Lut (Lot)',
        story: 'Destruction of Sodom and Gomorrah.',
        image: 'https://imgs.search.brave.com/DmKliVkb2s-CEXNNPq6BGvMciGK7AG-VuGerUQKi4FI/rs:fit:860:0:0/g:ce/aHR0cDovL2FuY2ll/bnRzLWJnLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Mi9UaHJvd2luZ1N0/b25lcy1lMTQ1NTIw/ODA3NDk0Mi5qcGc',
    },
    {
        id: 5,
        prophet: 'Yusuf (Joseph)',
        story: "Prophet Joseph's life and journey in Egypt.",
        image: 'https://imgs.search.brave.com/n1klwPSjS3WOvY-6gth8_y-dCWFJTfz2YfX8LVK3VQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAyMy0wNy9zaHV0/dGVyc3RvY2syMjg3/NjE4MDE5LXJmYy5q/cGVnP2F1dG89Zm9y/bWF0JmZpdD1jcm9w/JmFyPTE6MSZxPTc1/Jnc9MTIwMA',
    },
    {
        id: 6,
        prophet: 'Musa (Moses)',
        story: 'Prophet Moses and the Exodus.',
        image: 'https://cdn.catholic.com/wp-content/uploads/AdobeStock_573674316-900x900.jpeg',
    },
    {
        id: 7,
        prophet: 'Dawud (David)',
        story: 'Kingdoms of Prophets David and Solomon.',
        image: 'https://www.worldatlas.com/r/w1200/upload/85/4f/09/shutterstock-614886038.jpg',
    },
    {
        id: 8,
        prophet: 'Yunus (Jonah)',
        story: 'Prophet Jonah and the whale.',
        image: 'https://imgs.search.brave.com/z5TSu3FHYh2ScsQpP1bju46IfZJunuH59lukr8gZrKw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg5/NjQwNTg0L3Bob3Rv/L2dvdXJkcy1vZi1k/aWZmZXJlbnQtc2hh/cGVzLWFuZC1jb2xv/cnMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXRQZW81c014/aUhBZ19fSzhtUnlf/Z0s2S1lfU1lfcDNj/WWxUSVMzZzRiOTA9',
    },
    {
        id: 9,
        prophet: 'Ayub (Job)',
        story: 'Story of Prophet Job and his patience.',
        image: 'https://imgs.search.brave.com/72vEQqgHDh8fiQmsl872g6T-H1YDUfJAy4gXb5yeuK8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIz/Nzg5MzE0L3Bob3Rv/L2Nsb2Nrcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9M3A0/U1NEa180TWN4d3dS/UE9FOGZqOUF4Zno2/cW9jQ1h3RHUyaVlT/bERiUT0',
    },
    {
        id: 10,
        prophet: 'Maryam (Mary)',
        story: 'Virgin Mary and the birth of Jesus.',
        image: 'https://imgs.search.brave.com/QodfEKjNqFgZtpiaJeBtAl-_Hk8kjzDRv0HLQeheWpY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTA3/Njg1NTkvcGhvdG8v/Y3JhZGxlLW1hZGUt/b2Ytb2FrLWFuZC1w/aW5lLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz14YnRibWli/QjlTQjBJUHVHQXhi/SUNkR3ZDdkp2TERo/Y0JrMFg1MUVGbkk4/PQ',
    },
    {
        id: 11,
        prophet: 'Isa (Jesus)',
        story: 'Life and miracles of Prophet Jesus.',
        image: 'https://imgs.search.brave.com/p8MykfkQyuTXA32ysLxKKYRyerFe-7XQUubTeL5ooHI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/NDc1OTMyOC9waG90/by9mZWFzdC10YWJs/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VUdpOUVvaVda/SkhXUTVZelgwQmg2/S1hzdDUwdG9MMUtf/RFBUWnVlSmo3Zz0',
    },
    {
        id: 13,
        prophet: 'Sulaiman (Solomon)',
        story: 'His wisdom, kingdom, and miracles.',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F234609461816081728%2F&psig=AOvVaw1wJTFcXt_IG5P7xzYvG0AA&ust=1695347126677000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPD736vKuoEDFQAAAAAdAAAAABBB',
    },
    {
        id: 14,
        prophet: 'Shuaib',
        story: 'Shuaib and his message to his people.',
        image: 'image_url_for_Shuaib',
    },
    {
        id: 15,
        prophet: 'Idris (Enoch)',
        story: 'Prophet Idris and his wisdom.',
        image: 'image_url_for_Idris',
    },
    {
        id: 16,
        prophet: 'Hud (Eber)',
        story: 'Prophet Hud and his call to righteousness.',
        image: 'image_url_for_Hud',
    },
    {
        id: 17,
        prophet: 'Salih (Selah)',
        story: 'Prophet Salih and the she-camel miracle.',
        image: 'image_url_for_Salih',
    },
    {
        id: 18,
        prophet: 'Ismail (Ishmael)',
        story: 'Prophet Ishmael and his role in building the Kaaba.',
        image: 'image_url_for_Ismail',
    },
    {
        id: 19,
        prophet: 'Ishaq (Isaac)',
        story: 'Prophet Isaac and his family.',
        image: 'image_url_for_Ishaq',
    },
    {
        id: 20,
        prophet: 'Yaqub (Jacob)',
        story: 'Prophet Jacob and his sons, including Joseph.',
        image: 'image_url_for_Yaqub',
    },
    {
        id: 21,
        prophet: 'Dhul-Kifl (Ezekiel)',
        story: 'Prophet Dhul-Kifl and his guidance.',
        image: 'image_url_for_Dhul-Kifl',
    },
    {
        id: 23,
        prophet: 'Yahya (John)',
        story: 'The story of Prophet John (Yahya) and his mission.',
        image: 'image_url_for_Yahya',
    },
];
