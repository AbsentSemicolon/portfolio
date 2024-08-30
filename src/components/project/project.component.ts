import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LinkComponent } from "../ui/link.component";

interface Language {
    name: string;
    version?: string;
}
interface Framework {
    name: string;
    version: string;
    link: string;
}
interface ThirdParty {
    name: string;
    link?: string;
}

interface ProjectLink {
    name: string;
    link: string;
}
interface Project {
    name: string;
    link: string;
    languageList: Language[];
    frameworkList: Framework[];
    github: string;
    thirdPartyList: ThirdParty[];
    linkList: ProjectLink[];
}
@Component({
    selector: "app-project",
    standalone: true,
    imports: [CommonModule, LinkComponent],
    templateUrl: "./project.component.html",
    styleUrl: "./project.component.scss"
})
export class ProjectComponent {
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
                    name: "Tailwind"
                },
                {
                    name: "react-responsive-masonry",
                    link: "https://www.npmjs.com/package/react-responsive-masonry"
                },
                {
                    name: "react-google-charts",
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
            github: "private",
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
