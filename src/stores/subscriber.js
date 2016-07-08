export default (store, next) => {
  let LastState = null

  store.subscribe(
    () => {
      let state = store.getState()

      if (LastState !== state)
      {
        LastState = state
        next(state)
      }
    }
  )
}
