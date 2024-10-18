import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LinkComponent } from "../ui/link.component";
import { Project } from "../../lib/types";
import { ProjectComponent } from "./project.component";

@Component({
    selector: "app-project-list",
    standalone: true,
    imports: [CommonModule, LinkComponent, ProjectComponent],
    templateUrl: "./project-list.component.html"
})
export class ProjectListComponent {
    projectList: Project[] = [
        {
            name: "Application Tracker",
            link: "https://missingsemicolon.net/tracker?demo=true",
            languageList: [
                {
                    name: "JavaScript"
                },
                { name: "TypeScript" }
            ],
            frameworkList: [
                {
                    name: "React",
                    version: "18",
                    link: ""
                }
            ],
            github: "apply-tracker",
            thirdPartyList: [
                {
                    name: "Tailwind",
                    link: "https://tailwindcss.com/"
                },
                {
                    name: "Radix Primitives",
                    link: "https://www.radix-ui.com/primitives"
                },
                {
                    name: "React Responsive Masonry",
                    link: "https://www.npmjs.com/package/react-responsive-masonry"
                },
                {
                    name: "React Google Charts",
                    link: "https://www.react-google-charts.com/"
                }
            ],
            linkList: []
        },
        {
            name: "Portfolio",
            link: "",
            languageList: [
                {
                    name: "JavaScript"
                },
                { name: "TypeScript" }
            ],
            frameworkList: [
                {
                    name: "Angular",
                    version: "18.1.0",
                    link: ""
                }
            ],
            github: "portfolio",
            thirdPartyList: [
                {
                    name: "SASS"
                },
                {
                    name: "Google Fonts"
                },
                {
                    name: "Google Icons"
                }
            ],
            linkList: [
                {
                    name: "Figma",
                    link: "https://www.figma.com/design/t4Jx3mmAaM0w04I3wuAdvv/Portfolio?node-id=0-1&t=deL611hzNibUxJdc-1"
                }
            ]
        },
        {
            name: "Remnant: From the Files",
            link: "",
            languageList: [{ name: "Python", version: "3.x.x" }],
            frameworkList: [],
            github: "remnant_from_file_files",
            thirdPartyList: [],
            linkList: []
        }
    ];
}
