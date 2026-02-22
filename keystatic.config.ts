import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Date' }),
                featuredImage: fields.image({
                    label: 'Featured Image',
                    directory: 'public/assets/images',
                    publicPath: '/assets/images/',
                }),
                content: fields.markdoc({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'public/assets/images',
                            publicPath: '/assets/images/',
                        },
                    },
                }),
            },
        }),
        pages: collection({
            label: 'Pages',
            slugField: 'title',
            path: 'src/content/pages/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                content: fields.markdoc({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'public/assets/images',
                            publicPath: '/assets/images/',
                        },
                    },
                }),
            },
        }),
    },
});
