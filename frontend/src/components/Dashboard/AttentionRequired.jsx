// import { Link } from "react-router-dom";
// import Item_photo from "../../assets/Item_photo.svg";

// export default function AttentionRequired({ lowStock }) {
//   return (
//     <section>
//       <h2 className="section-title">Attention Required</h2>

//       {lowStock.length === 0 ? (
//         <div className="card">
//           <p>No low stock items to display. Nice!</p>
//         </div>
//       ) : (
//         <div className="grid gap-3">
//           {lowStock.map((item) => (
//             <Link
//               key={item.id}
//               to={`/inventory/${item.item_id}`}
//               className="item-card block hover:border-amber"
//             >
//               <div className="item-row">
//                 <img
//                   src={Item_photo}
//                   alt="placeholder photo"
//                   className="item-img"
//                 />

//                 <div className="min-w-0 flex-1">
//                   <h5 className="font-bold">{item.name}</h5>
//                   <p className="font-mono text-xs text-slate-600">
//                     SKU: {item.sku}
//                   </p>
//                   <p className="font-mono text-xs text-slate-600">
//                     Quantity: {item.quantity}
//                   </p>
//                 </div>

//                 <span className="badge-low">Low Stock</span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// =========================TEST Matt

import { Link } from "react-router-dom";
import Item_photo from "../../assets/Item_photo.svg";

export default function AttentionRequired({ lowStock }) {
  return (
    <section>
      <h2 className="section-title">Attention Required</h2>

      {lowStock.length === 0 ? (
        <div className="card">
          <p>No low stock items to display. Nice!</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {lowStock.map((item) => (
            <Link
              key={item.id}
              to={`/inventory/${item.item_id}`}
              className="item-card block hover:border-amber"
            >
              <div className="item-row flex flex-row items-center justify-between gap-4">
                {/* Left content block */}
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={Item_photo}
                    alt="placeholder photo"
                    className="item-img shrink-0"
                  />

                  <div className="min-w-0">
                    <h5 className="font-bold text-sm text-deep dark:text-slate-100">
                      {item.name}
                    </h5>
                    <p className="font-mono text-xs text-slate-500">
                      SKU: {item.sku}
                    </p>
                    <p className="font-mono text-xs text-slate-500">
                      Quantity:{" "}
                      <span className="font-bold text-deep dark:text-slate-100">
                        {item.quantity}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right side status element: Explicit inline layout values added */}
                <div className="shrink-0 ml-auto self-center">
                  <span className="badge-low inline-block text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    Low Stock
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
