import { Pipe } from "@angular/core";

@Pipe({
    name: "orderBy",
    standalone: true
})

/* Pipe to sort an array by a field. This has to use any
 * as the types as we won't know what's coming in.
 */
export class OrderByPipe {
    transform(array: any, field: any): any[] {
        if (!Array.isArray(array)) {
            return [];
        }

        return array.sort((a: any, b: any) => {
            if (a[field] < b[field]) {
                return -1;
            }

            if (a[field] > b[field]) {
                return 1;
            }

            return 0;
        });
    }
}
