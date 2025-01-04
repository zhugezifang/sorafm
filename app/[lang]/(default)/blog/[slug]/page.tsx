import { getPost } from "@/lib/getPost"
import type { Metadata } from 'next'
//import {Game} from  "@/components/game"

export const runtime = 'edge'

export default async function BlogPost({ params }: { params: { slug: string, lang: string } }) {
  const post = await getPost(params.slug, params.lang) as unknown as { 
    title: string; 
    date: string; 
    author: string; 
    readTime: string; 
    contentHtml: string; 
    url: string;
  }

  return (
    <main className="container">
      <article className="prose prose-gray dark:prose-invert mx-auto py-8">
        <h1 className="mb-4 text-center text-3xl font-bold">{post.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </main>
  )
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string, lang: string } 
}): Promise<Metadata> {
  const post = await getPost(params.slug, params.lang) as unknown as { 
    title: string
    description?: string
    author: string
    date: string
  }
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      locale: params.lang,
      url: `${url}/${params.lang}/blog/${params.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `${url}/${params.lang}/blog/${params.slug}`,
      languages: {
        'en': `${url}/en/blog/${params.slug}`,
        'zh': `${url}/zh/blog/${params.slug}`,
      },
    },
  }
}
