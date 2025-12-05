import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getContent(type) {
  const dir = path.join(contentDirectory, type);
  const files = fs.readdirSync(dir);

  const content = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const markdownWithMeta = fs.readFileSync(path.join(dir, filename), 'utf-8');
    const { data } = matter(markdownWithMeta);

    // FIX: Convert Date object to string (ISO format) for JSON serialization
    if (data.date instanceof Date) {
      data.date = data.date.toISOString();
    }

    return {
      slug,
      ...data,
    };
  });

  // Ensure sorting happens on the standardized string date field
  return content.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getSingleContent(type, slug) {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // FIX: Convert Date object to string for the single item as well
  if (data.date instanceof Date) {
    data.date = data.date.toISOString();
  }

  return { data, content };
}
