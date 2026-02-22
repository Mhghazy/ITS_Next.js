import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

// Read blog posts directly from the filesystem — no Keystatic dependency at build time
export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const postsDir = path.join(process.cwd(), 'src/content/posts');
        if (!fs.existsSync(postsDir)) return [];
        return fs.readdirSync(postsDir)
            .filter((f) => f.endsWith('.mdoc'))
            .map((f) => ({ slug: f.replace('.mdoc', '') }));
    } catch {
        return [];
    }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Try to load content at runtime; safely 404 if not found
    try {
        const postsDir = path.join(process.cwd(), 'src/content/posts');
        const filePath = path.join(postsDir, `${slug}.mdoc`);
        if (!fs.existsSync(filePath)) notFound();
        const content = fs.readFileSync(filePath, 'utf-8');

        return (
            <article className="prose lg:prose-xl mx-auto dark:prose-invert py-8 px-4">
                <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
            </article>
        );
    } catch {
        notFound();
    }
}
