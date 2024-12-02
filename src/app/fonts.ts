import { Fraunces, Poppins } from "next/font/google";

export const fraunces = Fraunces({
    style: ['normal'],
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const poppins = Poppins({
    style: ['normal'],
    subsets: ['latin'],
    weight: ['300', '400', '600'],
});