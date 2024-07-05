const availablePages = [0, 1, 2, 3, 4, 5] as const;

export type AvailablePages = (typeof availablePages)[number];

export const lastPage = availablePages[availablePages.length - 1];
