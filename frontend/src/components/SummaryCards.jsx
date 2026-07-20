import { motion } from "framer-motion";

const SummaryCards = ({ summary }) => {
  return (
    <div className="cards">
      {/* <div className="card">
        <h3>Total Sales</h3>
        <h2>💰 ₹ {summary.total_sales?.toLocaleString()}</h2>
      </div> */}
      <motion.div
className="card"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
>

<h3>Total Sales</h3>

<h2>
₹ {new Intl.NumberFormat("en-IN").format(summary.total_sales)}
</h2>

</motion.div>

      <motion.div className="card"
      initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}>
        <h3>Total Orders</h3>
       <h2>📦 {summary.total_orders}</h2>
      </motion.div>

      <motion.div className="card"
      initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}>
        <h3>Average Sale</h3>
        <h2>📈₹ {summary.average_sales}</h2>
      </motion.div>

      <motion.div className="card"
      initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}>
        <h3>Highest Sale</h3>
        <h2>🏆 ₹ {summary.highest_sale}</h2>
      </motion.div>
    </div>
  );
};

export default SummaryCards;