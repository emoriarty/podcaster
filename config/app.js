import path from 'path'

export default {
  paths: {
    mocks: path.resolve(__dirname, '../__test__/mocks')
  },
  itunes: {
    provider: {
      rss: 'https://rss.itunes.apple.com/data',
      service: ''
    }
  }
}
