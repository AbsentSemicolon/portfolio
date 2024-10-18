export interface Link {
    name: string;
    link?: string;
    external?: boolean;
    version?: string;
}
export interface Project {
    name: string;
    link: string;
    languageList: Link[];
    frameworkList: Link[];
    github: string;
    thirdPartyList: Link[];
    linkList: Link[];
}
