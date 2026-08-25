import ItemBox from '@/components/atoms/ItemBox/ItemBox'

const Links = () => {
    const links = [
        {
            title: 'My GitHub',
            url: 'https://github.com/GeorgeMunday'
        },
        {
            title: 'Next.js Documentation',
            url: 'https://nextjs.org/docs'
        },
        {
            title: 'MongoDB Documentation',
            url: 'https://www.mongodb.com/docs/'
        },
        {
            title: 'Next Documentation to be tracked',
            url: 'https://nodejs.org/en/blog/announcements'
        }
    ];

  return (
    <>
        {links.map((link, index) => (
            <ItemBox key={index} title={link.title} description={link.url} />
        ))}
    </>
  )
}

export default Links