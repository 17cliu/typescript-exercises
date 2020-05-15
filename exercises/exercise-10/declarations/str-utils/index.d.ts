// Ambient Modules
//
// Here, we can declare the API interfaces of packages we use that do not
// come with type information.
//
// These declarations are called "ambient modules" (probably b/c they are
// just type declarations and don't come with working implementations?).
//
// We can have multiple ambient modules in a single .d.ts file.

declare module 'str-utils' {
    export function strReverse(value: string): string;
    export function strToLower(value: string): string;
    export function strToUpper(value: string): string;
    export function strRandomize(value: string): string;
    export function strInvertCase(value: string): string;
}

// This is a shorthand ambient module. All imports from this module will
// be typed as `any`:
//
// declare module 'str-utils'
