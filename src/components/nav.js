import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AppConText } from "../context/AppConText";
export default function Nav () {
    const { cart } = useContext(AppConText);
    const { handleShow } = useContext(AppConText);
    return(
    <nav>
        <Button variant="outline-primary" onClick={handleShow}>
          <AiOutlineShoppingCart className="icon__card" />
          <Badge className="number__card" >
            {cart.length}
          </Badge>
        </Button>
      </nav>
    )
}