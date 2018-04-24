const employees = [
  {
    'id': 1,
    'name': 'Waqar Shahid',
    'designation': 'Software Engineer',
    'experience': 6,
    'link_id': [1, 3],
    'link_is_read': [
      {
        'id': 1,
        'isRead': false
      },
      {
        'id': 2,
        'isRead': false
      }
    ]
  },
  {
    'id': 2,
    'name': 'Urwa',
    'designation': 'Model',
    'experience': 10,
    'link_id': [3],
    'link_is_read': [
      {
        'id': 3,
        'isRead': false
      }
    ]
  },
  {
    'id': 3,
    'name': 'SumaiL',
    'designation': 'Gamer',
    'experience': 8,
    'link_id': [1, 2, 3],
    'link_is_read': [
      {
        'id': 1,
        'isRead': false
      },
      {
        'id': 2,
        'isRead': false
      },
      {
        'id': 3,
        'isRead': false
      }
    ]
  }
]

export default {
  getEmployees (em) {
    return em(employees)
  }
}
