export function start(timestamp)
{
  return {
    type: 'START',
    timestamp
  }
}

export function pause()
{
  return {
    type: 'PAUSE'
  }
}

export function resume(timestamp)
{
  return {
    type: 'RESUME',
    timestamp
  }
}

export function stop()
{
  return {
    type: 'STOP'
  }
}

export function update(timestamp, value)
{
  return {
    type: 'UPDATE',
    timestamp,
    value
  }
}
