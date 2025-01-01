export function getBasePath(): string {
    return process.env.NEXT_PUBLIC_BASE_PATH || ""; // Ensure you use NEXT_PUBLIC_BASE_PATH
}

export function getFullPath(path: string): string {
    const basePath = getBasePath();
    return `${basePath}${path}`;
}