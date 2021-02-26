const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK_SUCCEEDED' :
      return [
        ...state,
        {
          ...action.payload
        }
      ]
    case 'REMOVE_TASK_SUCCEEDED':
      return [
        ...state.filter(item => item.id != action.payload)
      ] 
    case 'FETCH_TASKS_SUCCEEDED':
      return [
        ...action.payload
    ]
    default:
      return state
  }
}

export default tasks;