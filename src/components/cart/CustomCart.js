import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AppConText } from "../../context/AppConText";

export default function CustomCart() {
  const { show, handleClose } = useContext(AppConText);

  return (
    <>
      <Offcanvas  show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
