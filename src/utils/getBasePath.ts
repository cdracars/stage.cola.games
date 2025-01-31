export function getBasePath(): string {
    const isProd = process.env.ENVIRONMENT === 'production' ? true : false;

    return isProd ? "" : "/stage.cola.games"
}

export function getFullPath(path: string): string {
    const basePath = getBasePath();
    return `${basePath}${path}`;
}