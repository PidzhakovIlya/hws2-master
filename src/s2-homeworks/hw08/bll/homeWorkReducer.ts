import {UserType} from "../HW8"

type ActionType =
    | { type: "sort"; payload: "up" | "down" }
    | { type: "check"; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": { // by name
            let stateCopy = [...state]
            if (action.payload === "up") {
                stateCopy.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }else {
                        return 0
                    }
                })
            }else if (action.payload === "down") {
                stateCopy.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }else {
                        return 0
                    }
                })
            }// need to fix
            return stateCopy
        }
        case
        "check": {
            return [...state.filter(el=>el.age>18)]// need to fix
        }
        default:
            return state
    }
}
