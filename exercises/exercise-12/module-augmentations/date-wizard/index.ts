// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.

    // Notice that I only have to define the properties that are
    // missing from the official type! The declarations will be
    // merged together, so I don't need to repeat things.
    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }

    // Same here. I don't have to redefine the functions that have
    // already been correctly typed. I just have to add the additional
    // functions that were missing in the existing module definition.
    function pad(s: string | number): string;
}
