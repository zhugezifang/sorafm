import Link from "next/link"
import type { Metadata } from 'next'
import { getDictionary } from "@/services/i18n"

export const runtime = 'edge'

export default async function BlogPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang)
  const posts = dict.blog.posts

  return (
    <main className="container py-12 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {dict.blog.title}
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
          {dict.blog.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: { id: string; title: string; date: string; readTime: string; description: string; slug: string; }) => (
          <Link key={post.id} href={`/${lang}/blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  )
}

export async function generateMetadata({ 
  params: { lang } 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const dict = await getDictionary(lang)
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: dict.blog.title,
    description: dict.blog.description,
    alternates: {
      canonical: `${url}/${lang}/blog`,
      languages: {
        'en': `${url}/en/blog`,
        'zh': `${url}/zh/blog`,
      },
    },
    openGraph: {
      title: dict.blog.title,
      description: dict.blog.description,
      url: `${url}/${lang}/blog`,
    }
  }
}
