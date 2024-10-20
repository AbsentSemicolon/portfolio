import { Component, Input } from "@angular/core";

import { CommonModule } from "@angular/common";
import { Link } from "../../lib/types";
import { LinkComponent } from "../ui/link.component";
import { OrderByPipe } from "../../lib/orderby.pipe";

@Component({
    selector: "app-project-detail",
    standalone: true,
    imports: [CommonModule, LinkComponent, OrderByPipe],
    templateUrl: "./project-detail.component.html",
    styles: [
        `
            p:after {
                letter-spacing: 0.25rem;
                content: "....................................................";
            }
        `
    ]
})
export class ProjectDetailComponent {
    @Input() linkList: Link[] = [];
    @Input() name: string = "";
}
