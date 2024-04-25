import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrum/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const partParams = useParams()
  {console.log(partParams)}

  {
    console.log(all_product);
  }
  const product = all_product.find((e) => e.id === Number(productId));
  {
    console.log(product);
  }
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}
 