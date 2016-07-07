export default (store, next) => {
  let lastState = null

  store.subscribe(
    () => {
      let state = store.getState()

      if (lastState !== state)
      {
        lastState = state
        next(state)
      }
    }
  )
}
