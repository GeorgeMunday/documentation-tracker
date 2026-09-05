import ItemBox from '@/components/atoms/ItemBox/ItemBox'

const links = [
    {
        id: 'github',
        title: 'My GitHub',
        description: 'Check out my GitHub profile for my projects and contributions.',
        url: 'https://github.com/GeorgeMunday'
    },
    {
        id: 'nodejs-docs-primary',
        title: 'Node.js Documentation',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server side.',
        url: 'https://nodejs.org/en/docs'
    },
    {
        id: 'mongodb',
        title: 'MongoDB Documentation',
        description: 'MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.',
        url: 'https://www.mongodb.com/docs/'
    },
    {
        id: 'nodejs-docs-secondary',
        title: 'Node.js Documentation',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript on the server side.',
        url: 'https://nodejs.org/en/docs'
    },
    {
        id: 'typescript',
        title: 'TypeScript Documentation',
        description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
        url: 'https://www.typescriptlang.org/docs/'
    },
    {
        id: 'tailwindcss',
        title: 'Tailwind CSS Documentation',
        description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
        url: 'https://tailwindcss.com/docs'
    }
];

const Links = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
        {links.map((link) => (
            <ItemBox
            key={link.id}
                title={link.title}
                description={link.description}
                link={link.url}
            />
        ))}
    </div>
  )
}

export default Links