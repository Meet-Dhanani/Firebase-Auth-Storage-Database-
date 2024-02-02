import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { fireStore } from "../../firebase-config"

export const getFireData = async () => {
    const getData = await getDocs(collection(fireStore, "test"))
    return getData.docs.map(v => v.data())
}

export const postFireData = async (data) => {
    await setDoc(doc(fireStore, "test", `${Date.now()}`), data, { merge: true })
}