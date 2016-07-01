import assign from 'object-assign'

export default function (state = {}, action)
{
  switch (action.type)
  {
    case 'SET_STATE':
      return assign({}, state, action.state)
  }
  return state
}
