import { defineConfig } from "vitepress";

const defaultSidebar = [
    {
        text: "Guide",
        items: [
            { text: "Getting started", link: "/guide/#getting-started" },
        ],
    },
    {
        text: "Installation",
        collapsible: true,
        items: [
            {
                text: "Windows",
                link: "/guide/#windows",
            },
        ],
    },
    {
        text: "Usage",
        collapsible: true,
        collapsed: true,
        items: [
            {
                text: "@include",
                link: "/guide/#include-function",
            },
            {
                text: "@repeat",
                link: "/guide/#repeat-function",
            },
        ],
    },
];
export default defineConfig( {
    lang: "en-Us",
    title: 'H5assembler',
    base : '/H5A.github.io/',
    outlineTitle: 'In hac pagina',
    titleTemplate: "Code satic html pages without repeating yourself",
    description: 'Code satic html pages without repeating yourself',
    appearance: "dark",
    cleanUrls: 'with-subfolders',
    themeConfig: {
        siteTitle: 'H5assembler',
        logo: { src: "/icon.png", alt: "H5assembler logo" },
        nav: [
            { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
            { text: 'Changelog', link: 'https://github.com/ngdream/H5assembler/releases' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ngdream/H5assembler' },
            { icon: 'discord', link: 'https://discord.com/invite/CDxcsNTE' },

        ],
        editLink: {
            pattern: 'https://github.com/ngdream/H5assembler/tree/main/documentation',
            text: 'Edit this page on GitHub'
        },
        lastUpdated: true,
        lastUpdatedText: 'Updated Date',
        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Ngdream'
        },
        sidebar: {
            "/guide/": defaultSidebar
        }
    }
})
