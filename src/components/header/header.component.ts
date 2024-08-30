import { Component } from "@angular/core";
import { LinkComponent } from "../ui/link.component";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [LinkComponent],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {}
