import { useEffect, useState } from "react";
import ProductService from "../services/product.service";
import Swal from "sweetalert2";

const ProductsList = () => {
    const initialProductState = {
        id: 0,
        name: "",
        price: 0,
    };

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(initialProductState);

    const onDataChange = items => {
        var products = [];
        items.docs.forEach(item => {
            products.push({
                id: item.id,
                name: item.data().name,
                price: item.data().price,
                
            });
        });
        setProducts(products)
    };

    const handleInputChange = e => {
        const {name, value} = e.target;
        setSelectedProduct({...selectedProduct, [name]: value });
    };

    const updateProduct = () => {
        var newData = {
            name: selectedProduct.name,
            price: selectedProduct.price
        }
        ProductService.update(selectedProduct.id, newData)
        .then(() => {
            Swal.fire("Uwaga", "Zmieniono dane produktu", "success")
            setSelectedProduct(initialProductState);
        })
        .catch(err => console.log(err));
    };

    const deleteProduct = () => {
        ProductService.remove(selectedProduct.id)
        .then(() => {
            Swal.fire("Uwaga", "Usunięto produkt", "success")
            setSelectedProduct(initialProductState);
        })
        .catch(err => console.log(err));
    };

    const choiceProduct = () => {
        var Data = {
            name: selectedProduct.name,
            price: selectedProduct.price
        }
        ProductService.choice(selectedProduct.id, Data)
        .then(() => {
            Swal.fire("UPS", "Skasowałeś swój wybór!", 'info')
            setSelectedProduct(initialProductState);
        })
        .catch(err => console.log(err));
        }

    useEffect(() => {
        const result = ProductService.getAll()
            .orderBy("name", "asc")
            .onSnapshot(onDataChange);
        return () => result();
    }, [])

    return (
        <div className="row">
                <div className="col-md-6">
                    <h4>Lista produktów:</h4>
                            {
                                products.map(product =>
                                    <li
                                    className="list-group"  
                                    key={product.id} 
                                    onClick={() => setSelectedProduct(product)}
                                    >
                                        {product.name} {product.price+"."+"zł"}
                                     </li>      
                                )
                            }
                
                </div>
                <div className="col-md-6">
                        <h4>Wybrany produkt</h4>
                        <div className="form-group">
                    <label> Wpisz nazwę produktu</label>
                    <input 
                    type="text" 
                    className="form-control"
                    required 
                    name="name" 
                    value={selectedProduct.name}
                    onChange={handleInputChange} 
                    />
                </div>
                <div className="form-group">
                    <label> Wpisz cenę produktu</label>
                    <input 
                    type="number" 
                    className="form-control"
                    required 
                    name="price" 
                    value={selectedProduct.price}
                    onChange={handleInputChange} 
                    />
                </div>
                
                <div 
                className = "mt-4 mb-3 d-grid gap-2 d-flex justify-content-center"
                > 
            
                <button className="btn btn-warning"  
                onClick={updateProduct}>Zmień dane produktu</button>
                <button className="btn btn-danger" 
                onClick={deleteProduct}>Usuń produkt</button>
                <button className="btn btn-info" onClick={choiceProduct}>Skasuj wybór</button>                
                </div>
            </div>

       
           

        
        </div>
    )
}

export default ProductsList;