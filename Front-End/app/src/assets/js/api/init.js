import workInit from './work'
import firebaseInit from '../firebase'



export default () => {
    const { database } = firebaseInit()
    const work = workInit(database)

    return {
        work
    }
}