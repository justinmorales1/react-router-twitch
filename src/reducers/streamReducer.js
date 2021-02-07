

export default (state = {}, action) => {
    switch (action.type) {
        case "SOMETHING":
            return {...state};
        case "ANOTHER SOMETHING":
            return {...state};
        default:
            return state

    }
}