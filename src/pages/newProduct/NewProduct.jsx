import { useState, useEffect } from "react";
import "./newProduct.css";
import FileBase64 from 'react-file-base64';
import { useDispatch } from "react-redux";
import { publicRequest } from "../../requestMethods";
import { useParams, useHistory } from "react-router-dom";
import { updateProduct, addProduct } from "../../actions/products";

export default function NewProduct() {
  let { id } = useParams();
  let history = useHistory();
  const [product, setProduct] = useState({});
  const [cats, setCats] = useState([]);
  const [file, setFile] = useState(null);
  const [formValue, setFormValue] = useState({
    title: '',
    desc: '',
    price: 0,
    inStock: true,
    categories: ['t-shirt']
  })
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicRequest.get("/categories");
        setCats(res.data);
      } catch { }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        await setProduct(res.data);
        setFormValue({
          ...formValue,
          title: res.data.title,
          desc: res.data.desc,
          price: res.data.price,
          inStock: res.data.inStock
        })
      } catch { }
    };
    id !== undefined && getProduct();
  }, [id]);

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormValue({ ...formValue, [name]: value })
  }


  const handleClick = async (e) => {
    e.preventDefault();

    id
      ? await dispatch(updateProduct(id, {
        ...product,
        title: formValue.title,
        desc: formValue.desc,
        price: formValue.price,
        inStock: formValue.inStock,
        categories: formValue.categories
      }))

      : await dispatch(addProduct({
        title: formValue.title,
        desc: formValue.desc,
        price: formValue.price,
        inStock: formValue.inStock,
        categories: formValue.categories,
        img: file
      }))

    history.replace('/')
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">{id ? "Edit Product" : "Create Product"}</h1>
      <form className="addProductForm">
        {
          !id

          &&

          <div className="addProductItem">
            <label>Image</label>
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setFile(base64)}
            />
          </div>
        }
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
          <select name="cat"
            onChange={(e) => setFormValue((prev) => prev = { ...prev, categories: [e.target.value] })}
            value={formValue.categories}
          >
            {
              cats.map((cat,index) => (
                <option key={index} value={cat.cat}>{cat.cat}</option>
              ))
            }
          </select>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange} value={formValue.inStock}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        {

          id === undefined
            ?
            <button onClick={handleClick} className="addProductButton">
              Create
            </button>
            :
            <button onClick={handleClick} className="addProductButton">
              Update
            </button>
        }
      </form>
    </div>
  );
}
