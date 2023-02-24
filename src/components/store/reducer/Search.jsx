const initializeState = [];

function Search_input(state = initializeState, action) {
  if (action.type == "added") {
    state = action.payload.mass;
    return state;
  }

  if (action.type == "added1") {
    let current = [...state];
    action.payload.mass.map((item, index) => {
      current.push(item)
    });
    state = current;
    return state;
  }

  if (action.type == "added2") {
      let current = [...state];
      action.payload.mass.map((item, index) => {
          current.push(item);
        });
        state = current;
    return state;
  }

  if(action.type == 'search'){
    let current = [...state]
    let qiymat = current.filter(item => {
        return item.name.includes(action.payload.name)
    })
    state = qiymat
    return state
  }
  return state;
}

export { Search_input };
