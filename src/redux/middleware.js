import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php']

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if(action.type === CREATE_POST) {
                const found = forbidden.filter(word => action.payload.title.includes(word))
                if(found.length) {
                    return dispatch(showAlert('Нельзя использовать запрещенные слова в тексте заголовка'))
                }
            }
            return next(action)
        }
    }
}