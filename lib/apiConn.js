import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const connDirectory = join(process.cwd(), '_connect')

export function getConnSlugs() {
  return fs.readdirSync(connDirectory)
}

export function getConnBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(connDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  const htmlContent = remark()
    .use(html)
    .processSync(content)
    .toString()

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = htmlContent
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}


export function getAllConn(fields = []) {
  const slugs = getConnSlugs()
  const conn = slugs
  .map((slug) => getConnBySlug(slug, fields))
  // sort posts by date in descending order
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return conn
}
