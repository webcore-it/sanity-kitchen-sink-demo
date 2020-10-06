export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7c8d2d789cc2012d0f8b1d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-demo-studio-opbkg366',
                  apiId: '19034e2d-75be-4ce9-8c9c-67797b9e5317'
                },
                {
                  buildHookId: '5f7c8d2df132a10142cbe82d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-demo-web-z4m1n4tj',
                  apiId: 'e145b71b-3b87-4e82-b99f-6f1538774820'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webcore-it/sanity-kitchen-sink-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-demo-web-z4m1n4tj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
