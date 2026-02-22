export const ASSET_PREFIX = '/ITS_Next.js';

/**
 * Prefixes a given path with the GitHub Pages basePath.
 * Use this for all unoptimized <Image> components and standard <img> tags
 * that reference images in the public folder.
 */
export const getAssetUrl = (path: string) => {
    // If the path already has the prefix or happens to be a full URL, don't double prefix
    if (path.startsWith(ASSET_PREFIX) || path.startsWith('http')) {
        return path;
    }
    // Ensure the path starts with a slash
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${ASSET_PREFIX}${normalizedPath}`;
};
