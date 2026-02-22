import { reader } from '@/utils/reader';
import { notFound } from 'next/navigation';
import React from 'react';
import Markdoc from '@markdoc/markdoc';

// Simple Markdoc renderer for React
function renderMarkdoc(node: any) {
    return Markdoc.renderers.react(node, React);
}

export async function generateStaticParams() {
    const posts = await reader.collections.posts.list();
    return posts.map((slug) => ({ slug }));
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await reader.collections.posts.read(params.slug);
    if (!post) notFound();

    const { node } = await post.content();

    return (
        <article className="prose lg:prose-xl mx-auto dark:prose-invert py-8 px-4">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            {post.date && <p className="text-gray-500 mb-8">{post.date}</p>}

            {post.featuredImage && (
                <img src={post.featuredImage} alt={post.title} className="w-full h-auto max-h-96 object-cover rounded-lg mb-8" />
            )}

            <div className="mt-8">
                {renderMarkdoc(Markdoc.transform(node))}
            </div>
        </article>
    );
}
