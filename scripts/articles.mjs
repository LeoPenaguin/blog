import fs from 'node:fs/promises';
import matter from 'gray-matter';

const articles = await fs.readdir('./docs/posts');

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(`./docs/posts/${article}`, {
      excerpt: true,
    });

    const { data, path } = file;

    return {
      ...data,
      date: formatDate(data.date),
      path: path.replace('./docs/', '').replace(/\.md$/, ''),
    };
  })
);

await fs.writeFile('./generated/data.json', JSON.stringify(data), 'utf-8');

function formatDate(date) {
    if (!(date instanceof Date)) {
      date = new Date(date)
    }
    date.setUTCHours(12)
    return {
      time: +date,
      string: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }