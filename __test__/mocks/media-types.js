export default {
  query: {
    results: {
      json: {
        json: [{
          canBeExplicit: true,
          feed_types: [{
            translation_key: 'topaudiobooks',
            urlPrefix: 'https://itunes.apple.com/<%= country_code %>/rss/topaudiobooks/<%= parameters %>',
            urlSuffix: 'xml'
          }],
          id: '50000024',
          store: 'music',
          subgenres: [{
            id: '',
            translation_key: 'all'
          }, {
            id: '50000041',
            translation_key: 'arts&entertainment'
          }],
          translation_key: 'audiobooks'
        }]
      }
    }
  }
};
