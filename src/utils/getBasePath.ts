export function getBasePath(): string {
    return "";
}

export function getFullPath(path: string): string {
    const basePath = getBasePath();
    return `${basePath}${path}`;
}