import { Component, Input } from "@angular/core";

import { CommonModule } from "@angular/common";
import { LinkComponent } from "../ui/link.component";
import { Project } from "../../lib/types";
import { ProjectDetailComponent } from "./project-detail.component";

@Component({
    selector: "app-project",
    standalone: true,
    imports: [CommonModule, LinkComponent, ProjectDetailComponent],
    templateUrl: "./project.component.html",
    styleUrl: "project.component.scss"
})
export class ProjectComponent {
    @Input() project: Project = {} as Project;
}
