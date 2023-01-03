import { collection, query, getDocs } from "firebase/firestore";
import { database } from "../config/firebase";


export default function GetData() {
    const q = query(collection(database, "asian"));

    const GrabData = async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
    return GrabData()
}