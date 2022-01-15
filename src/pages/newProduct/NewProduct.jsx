import { useState, useEffect } from "react";
import "./newProduct.css";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../requestMethods";
import { useParams, useHistory } from "react-router-dom";
import { updateProduct } from "../../actions/products";

export default function NewProduct() {
  let { id } = useParams();
  let history = useHistory();
  const [product, setProduct] = useState({});
  const [cat, setCat] = useState([]);
  const [formValue, setFormValue] = useState({
    title: '',
    desc: '',
    price: 0,
    inStock: true,
})
const dispatch = useDispatch();

useEffect(() => {
  const getProduct = async () => {
    try {
      const res = await publicRequest.get("/products/find/" + id);
        await setProduct(res.data);
        setFormValue({
          ...formValue, 
          title:res.data.title,
          desc: res.data.desc,
          price: res.data.price,
          inStock: res.data.inStock
        })
      } catch { }
    };
    getProduct();
  }, [id]);
  
  const handleChange = ({ target }) => {
      const { name, value } = target
      setFormValue({ ...formValue, [name]: value })
  }
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct(id, {
      ...product,
      title: formValue.title,
      desc: formValue.desc,
      price: formValue.price,
      inStock: formValue.inStock,
      cat: cat
    }))
    history.replace('/')
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Edit Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
            value={formValue.title}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
            value={formValue.desc}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
            value={formValue.price}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange} value={formValue.inStock}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Update
        </button>
      </form>
    </div>
  );
}
