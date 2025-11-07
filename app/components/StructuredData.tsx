export default function StructuredData() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ಭಕ್ತಿ ಗೀತೆಗಳು - Mudralu Temple',
    alternateName: 'Bhakti Geethe',
    url: 'https://mudralu.netlify.app',
    description: 'Complete collection of Kannada devotional songs, bhajans, and spiritual lyrics',
    inLanguage: 'kn-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://mudralu.netlify.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mudralu Temple',
      url: 'https://mudralu.netlify.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mudralu.netlify.app/logo.jpg',
        width: 512,
        height: 512
      }
    }
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ReligiousOrganization',
    name: 'Mudralu Temple',
    alternateName: 'ಮುದ್ರಾಲು ದೇವಸ್ಥಾನ',
    url: 'https://mudralu.netlify.app',
    description: 'Hindu temple dedicated to preserving and sharing devotional music and spiritual content',
    foundingDate: '2024',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mudralu.netlify.app/logo.jpg'
    },
    sameAs: [
      'https://facebook.com/mudralutemple',
      'https://twitter.com/mudralutemple',
      'https://instagram.com/mudralutemple'
    ]
  }

  const musicPlaylistSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicPlaylist',
    name: 'Kannada Devotional Songs Collection',
    description: 'Complete collection of traditional Kannada devotional songs and bhajans',
    genre: 'Devotional Music',
    inLanguage: 'kn',
    publisher: {
      '@type': 'Organization',
      name: 'Mudralu Temple'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicPlaylistSchema) }}
      />
    </>
  )
}