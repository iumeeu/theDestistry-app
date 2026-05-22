import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export function slug(str: string) {
    const decodedURL = decodeURIComponent(str);

    // Remove unnecessary invisible characters (like BOM or whitespace)
    const cleanedURL = decodedURL.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();

    return cleanedURL;
    // return str.toLowerCase().replace(/\u200B/g, "");
    // .replace(/[\s\W]+/g, '-')
    // .replace(/^-+/, '')
    // .replace(/-+$/, '')
}
