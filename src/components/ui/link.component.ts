/* Making links easier/consistent to use.
 *
 * Usage:
 *  <app-link
 *   linkUrl="<url with protocol>"
 *   linkText="<text to be displayed>"
 *   external="true|false"
 *  ></app-link>
 *
 * Setting external to true with show icon indicating
 * link will be taking user away from site.
 */

import { Component, Input, booleanAttribute } from "@angular/core";

import { CommonModule } from "@angular/common";

@Component({
    selector: "app-link",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./link.component.html"
})
export class LinkComponent {
    @Input() linkUrl: string = "";
    @Input({ required: true }) linkText: string = "";
    @Input({ transform: booleanAttribute }) external: boolean = false;
}
