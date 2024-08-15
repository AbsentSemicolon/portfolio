import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NgxMasonryModule } from "ngx-masonry";

@Component({
    selector: "app-project",
    standalone: true,
    imports: [CommonModule, NgxMasonryModule],
    templateUrl: "./project.component.html",
    styleUrl: "./project.component.scss"
})
export class ProjectComponent {
    masonryOptions = {};
    projects = [
        {
            name: "Application Tracker",
            link: "https://missingsemicolon.net/tracker",
            languageList: ["JavaScript/TypeScript"],
            frameworkList: ["React(v18)", "Tailwind"],
            github: "apply-tracker"
        },
        {
            name: "Portfolio",
            link: "./",
            languageList: ["JavaScript/TypeScript"],
            frameworkList: ["Angular(v18.1.0)", "SASS"],
            github: "private"
        },
        {
            name: "Remnant: From the Files",
            link: "",
            languageList: ["Python"],
            frameworkList: [],
            github: "remnant_from_file_files"
        }
    ];
}
