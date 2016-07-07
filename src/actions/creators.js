export function setState(state)
{
  return {
    type: 'SET_STATE',
    payload: state
  }
}

export function start()
{
  return {
    type: 'START',
    meta: {
      master: true
    }
  }
}

export function pause()
{
  return {
    type: 'PAUSE',
    meta: {
      master: true
    }
  }
}

export function resume()
{
  return {
    type: 'RESUME',
    meta: {
      master: true
    }
  }
}

export function stop()
{
  return {
    type: 'STOP',
    meta: {
      master: true
    }
  }
}

export function reset()
{
  return {
    type: 'RESET',
    meta: {
      master: true
    }
  }
}

export function tick()
{
  return {
    type: 'TICK',
    meta: {
      master: true
    }
  }
}
