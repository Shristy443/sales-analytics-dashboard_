// import { useEffect, useState } from "react";
// import axios from "axios";
// import BASE_URL from "../api";

// const TopProducts = () => {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     axios
//       .get(`${BASE_URL}/Top-products=${query}`)
//       .then((res) => {
//         setProducts(res.data);
//       })
// .catch((err) => console.error(err));
//   }, []);

//   return (

//     <div className="table-container">

//       <h2>Top 10 Products</h2>

//       <table>

//         <thead>

//           <tr>

//             <th>Rank</th>

//             <th>Product Name</th>

//             <th>Sales</th>

//           </tr>

//         </thead>

//         <tbody>

//           {products.map((item, index) => (

//             <tr key={index}>

//               <td>{index + 1}</td>

//               <td>{item["Product Name"]}</td>

//               <td>₹ {item.Sales.toFixed(2)}</td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>

//   );

// }

// export default TopProducts;
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/top-products`)
      .then((res) => {
        console.log("Top Products:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Top Products Error:", err);
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
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item["Product Name"]}</td>
                <td>₹ {Number(item.Sales).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;