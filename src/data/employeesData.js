const employees = [
  {
    'id': 1,
    'name': 'Waqar Shahid',
    'designation': 'Software Engineer',
    'experience': 6,
    'link_id': [1, 2]
  },
  {
    'id': 2,
    'name': 'Urwa',
    'designation': 'Model',
    'experience': 10,
    'link_id': [3]
  },
  {
    'id': 3,
    'name': 'SumaiL',
    'designation': 'Gamer',
    'experience': 8,
    'link_id': [1, 2, 3]
  }
]

export default {
  getEmployees (em) {
    return em(employees)
  }
}
