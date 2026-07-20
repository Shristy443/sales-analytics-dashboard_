import { useEffect, useState } from "react";
import axios from "axios";

const TopProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("http://127.0.0.1:5000/top-products")
      .then((res) => {
        setProducts(res.data);
      });

  }, []);

  return (

    <div className="table-container">

      <h2>Top 10 Products</h2>

      <table>

        <thead>

          <tr>

            <th>Rank</th>

            <th>Product Name</th>

            <th>Sales</th>

          </tr>

        </thead>

        <tbody>

          {products.map((item, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{item["Product Name"]}</td>

              <td>₹ {item.Sales.toFixed(2)}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TopProducts;