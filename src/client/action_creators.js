export function start()
{
  return {
    type: 'START',
    meta: {
      remote: true
    }
  }
}

export function pause()
{
  return {
    type: 'PAUSE',
    meta: {
      remote: true
    }
  }
}

export function resume()
{
  return {
    type: 'RESUME',
    meta: {
      remote: true
    }
  }
}

export function stop()
{
  return {
    type: 'STOP',
    meta: {
      remote: true
    }
  }
}
