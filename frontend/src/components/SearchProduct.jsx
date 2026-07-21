import { useState } from "react";
import axios from "axios";
import BASE_URL from "./api";

const SearchProduct = () => {

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const search = () => {

    axios
      .get(`${BASE_URL}/search?product=${query}`)
      .then((res) => {
        setProducts(res.data);
      });

  };

  return (

    <div className="search-box">

      <h2>Search Product</h2>

      <input
        type="text"
        placeholder="Enter Product Name..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />

      <button onClick={search}>Search</button>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Sales</th>
          </tr>
        </thead>

        <tbody>

          {products.map((item,index)=>(

            <tr key={index}>
              <td>{item["Product Name"]}</td>
              <td>{item.Category}</td>
              <td>₹ {item.Sales.toFixed(2)}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default SearchProduct;