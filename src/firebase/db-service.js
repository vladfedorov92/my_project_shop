import {
    getDoc,
    setDoc,
    doc,
    collection,
    deleteDoc,
    getCountFromServer
} from "firebase/firestore";
import productConfig from "../utils/products-config.json";
import {db} from "./firebaseConfig";
import {CATEGORIES_COLLECTION, PRODUCT_COLLECTION} from "../utils/constants";
import {getRandomId} from "../utils/utilFunctions";

const productCollection = collection(db, PRODUCT_COLLECTION);
const categoriesCollection = collection(db, CATEGORIES_COLLECTION);

export async function addProduct(product) {
    product.id = getRandomId(100000, 999999);
    const ref = doc(productCollection, product.id.toString());
    await setDoc(ref, product);
};
export const addCategory = async (category) => {
    const ref = doc(categoriesCollection, category.name);
    await setDoc(ref, category);
};
export const removeProduct = async (id) => {
    const ref = doc(productCollection, id);
    await deleteDoc(ref);
};
export const removeCategory = async (name) => {
    const ref = doc(categoriesCollection, name);
    await deleteDoc(ref);
};
export const isCategoryExists = async (name) => {
    const ref = doc(categoriesCollection, name);
    const res = await getDoc(ref);
    return res.exists();
};
export const setAllProducts = async () => {
    let collectionCount =
        ((await getCountFromServer(productCollection)).data().count);
    if (!collectionCount) {
        const products = productConfig.map(item => (
            {
                title: item.name,
                category: item.name.split("-")[0],
                unit: item.unit,
                cost: item.cost,
                image: item.name+".jpg"
            }
        ));
        for (let i = 0; i < products.length; i++) {
           const res = await isCategoryExists(products[i].category);
           if (!res){
               await addCategory({name: products[i].category});
           }
           await addProduct(products[i]);
           collectionCount++;
        }
    }
    return collectionCount;
}
