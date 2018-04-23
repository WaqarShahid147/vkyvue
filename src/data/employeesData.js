const employees = [
  {'id': 1, 'name': 'Waqar Shahid', 'designation': 'Software Engineer', 'experience': 6},
  {'id': 2, 'name': 'Urwa', 'designation': 'Model', 'experience': 10},
  {'id': 3, 'name': 'SumaiL', 'designation': 'Gamer', 'experience': 8}
]

export default {
  getEmployees (em) {
    return em(employees)
  }
}
