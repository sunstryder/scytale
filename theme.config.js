export default {
  projectLink: 'https://github.com/sunstryder/nextjs', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/sunstryder/nextjs/blob/main', // base URL for the docs repository
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © rul.eth.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
    <svg>...</svg>
  </>
  ),
head: (
  <>
  <meta name= "viewport" content = "width=device-width, initial-scale=1.0" />
    <meta name="description" content = "Nextra: the next docs builder" />
      <meta name="og:title" content = "Nextra: the next docs builder" />
        </>
  ),
}
