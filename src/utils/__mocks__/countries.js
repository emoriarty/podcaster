export default {
  query: {
    results: {
      json: {
        json: [{
          translation_key: 'al',
          country_code: 'al',
          currency_format: '$<%= price %>',
          currency_seperator: '.',
          decimal: true,
          default_price: 0.99,
          enabled: true,
          flag_icon: '/images/flags/alb.png',
          language: 'en-GB',
          navbar: 'gb',
          search_country: 'uk',
          region: 'Europe',
          stores: {
            apps: true,
            books: true,
            macapps: true,
            movie: false,
            music: false,
            podcast: true,
            tv: false
          }
        }, {
          translation_key: 'cz',
          country_code: 'cz',
          currency_format: '$<%= price %>',
          currency_seperator: '.',
          decimal: true,
          default_price: 0.99,
          enabled: true,
          flag_icon: '/images/flags/cze.png',
          language: 'en-GB',
          search_country: 'us',
          region: 'Europe',
          stores: {
            apps: true,
            books: true,
            macapps: true,
            movie: true,
            music: true,
            podcast: true,
            tv: false
          }
        }]
      }
    }
  }
}
