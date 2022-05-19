import firebase from "../firebase";

const db = firebase.collection("/products");

const getAll = () => {
    return db;
};

const create = (data) => {
    return db.add(data);
};

const update = (id, data) => {
    return db.doc(id).update(data);
};

const remove = id => {
    return db.doc(id).delete();
};

const choice = (id, data) => {
    return db.doc(id).set(data);
}

const ProductService = {
    getAll, 
    create, 
    update, 
    remove,
    choice,
};

export default ProductService;