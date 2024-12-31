export function getImagePath(src: string): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // Use basePath from environment
    return `${basePath}${src}`;
}
