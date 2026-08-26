import ItemBox from '@/components/atoms/ItemBox/ItemBox'

const Links = () => {
    const links = [
        {
            title: 'My GitHub',
            url: 'https://github.com/GeorgeMunday'
        },
        {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org/en/docs'
        },
        {
            title: 'MongoDB Documentation',
            url: 'https://www.mongodb.com/docs/'
        },
        {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org/en/docs'
        },
        {
            title: 'TypeScript Documentation',
            url: 'https://www.typescriptlang.org/docs/'
        },
        {
            title: 'Tailwind CSS Documentation',
            url: 'https://tailwindcss.com/docs'
        }
    ];

  return (
    <div className="flex w-full flex-col items-center gap-4 p-2 sm:p-4">
        {links.map((link, index) => (
            <ItemBox
                key={index}
                title={link.title}
                description=" "
                link={link.url}
            />
        ))}
    </div>
  )
}

export default Links