module.exports={
  "title": "makeitopen.com",
  "tagline": "Building the F8 App",
  "url": "https://caabernathy.github.io",
  "baseUrl": "/makeitopen/",
  "organizationName": 'caabernathy',
  "projectName": "makeitopen",
  "favicon": "images/favicon_junction.png",
  "customFields": {
    "users": []
  },
  "onBrokenLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/facebook/makeitopen/edit/master/docs/",
          "path": "./docs",
          "sidebarPath": require.resolve('./sidebars.json')
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [require.resolve('./src/css/custom.css')],
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "makeitopen.com",
      "logo": {
        "src": "images/logo.png",
        "srcDark": 'images/logo_dark.png',
      },
      "items": [
        {
          "label": "Version",
          "to": "docs",
          "position": "right",
          "items": [
            {
              "label": "2017.1.0.0",
              "to": "docs/",
              "activeBaseRegex": "docs/(?!2016.1.1.0|2017.1.0.0|next)"
            },
            {
              "label": "2016.1.1.0",
              "to": "docs/2016.1.1.0/"
            },
            {
              "label": "Master/Unreleased",
              "to": "docs/next/",
              "activeBaseRegex": "docs/next/(?!support|team|resources)"
            }
          ]
        }
      ]
    },
    "image": "images/f8app-2017-app.png",
    "footer": {
      "copyright": `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
      "logo": {
        "src": "images/oss_logo.png",
        "alt": 'Facebook Open Source Logo',
      },
      "links": [
        {
          title: 'Links',
          items: [
            {
              label: 'Open Source Projects',
              to: 'https://code.facebook.com/projects/',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/facebook/',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/fbOpenSource',
            },
            {
              label: 'Contribute on GitHub',
              to: 'https://github.com/facebook/makeitopen/',
            },
          ],
        }
      ],
    },
    "gtag": {
      "trackingID": "UA-44373548-14"
    }
  }
}
