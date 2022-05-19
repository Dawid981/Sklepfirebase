import { useState } from "react";
import ProductService from "../services/product.service";
import Swal from "sweetalert2";

const AddProduct = () => {
    const initialProductState = {
        name: "",
        price: 0,
    };
    const [product, setProduct] = useState(initialProductState);
    
    const handleInputChange = e => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value });
    };

    const saveProduct = () => {
        ProductService.create(product)
        .then(() =>{
            Swal.fire("Uwaga", "Uwaga dodano nowy produkt", "success")
            setProduct(initialProductState);
            }) 
        .catch(err => console.log(err));
    };

    return (
        <div className="mt-5">
            <div className="form-group">
                <label> Wpisz nazwę produktu</label>
                <input 
                type="text" 
                className="form-control" required name="name" 
                value={product.name}
                onChange={handleInputChange} 
                />
            </div>
            <div className="form-group mt-3">
                <label> Wpisz cenę produktu</label>
                <input 
                type="number" 
                className="form-control" 
                required 
                name="price" 
                value={product.price}
                onChange={handleInputChange} 
                />
            </div>
            <div className="d-grid col-5 mx-auto">
            <button className="btn btn-success btn-lg mt-5 mb-5" onClick={saveProduct}>
                Zapisz produkt
            </button>

            </div>
        </div>
    )
}

export default AddProduct;