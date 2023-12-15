
export type StateType = { themeId: number}

const initState:StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {
                ...state, themeId: action.id
            }
        }

        // дописать

        default:
            return state
    }
}

type ChangeThemeType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeType => ({ type: 'SET_THEME_ID', id }) // fix any
