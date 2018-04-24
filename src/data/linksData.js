const links = [
  {
    'id': 1,
    'link': 'https://medium.com/@dalaidunc/10-things-i-love-about-vue-505886ddaff2',
    'profile_id': [1, 3]
  },
  {
    'id': 2,
    'link': 'https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf',
    'profile_id': [1, 3]
  },
  {
    'id': 3,
    'link': 'https://en.wikipedia.org/wiki/Medicine',
    'profile_id': [2, 3]
  }
]

export default {
  getLinks (cb) {
    return cb(links)
  }
}

