import { useState } from 'react';
import './productPage.css';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
// import back from '../pictures/back.jpg'


function ProductPage(props) {
    const item = props.history.location.state
    const cartList = props.cartList
    const history = useHistory()
    const setGeneralNnumberOfcartList = props.setGeneralNnumberOfcartList
    const setCartProduct = props.setCartProduct
    const [quantity, setQuantity] = useState(1)
    const [errorMessage, setErrorMessage] = useState("false")
    const [wantedColor, setWantedColor] = useState("");
    const [realWantedColor, setRealWantedColor] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        setCartProduct([...cartList, { productId: item.id, name: item.name, cost: item.cost, link:item.link, company:item.company, quantity: quantity, wantedColor: wantedColor, realWantedColor: realWantedColor }]);
        setGeneralNnumberOfcartList(prev => prev + quantity);
    }

    return (<>
        <div className="productP">

            <div className="productPicture">
                <img className="productPicture" src={item.link} alt={item.image}></img>
            </div>

            <div className="left-column">
                <div className="product-description">
                    <h4>{item.name}</h4>
                    <h1>{item.company}</h1>
                    <p>{item.description}</p>
                </div>

                <div className="product-configuration" className="productConfiguration">

                    <div className="product-color">
                        <div className="labelcolor">
                            <span className="textChoose"> הגוון הנבחר:&nbsp;&nbsp;‏</span>
                            <label >{wantedColor}</label>
                        </div>
                        <br />
                        <div className="color-choose">

                            {item.colors.map(color => {
                                return <div className="colorCircle">
                                    {/* {wantedColor == color.colorName && <label>{color.colorName}</label>} */}
                                    <input type="radio" id={color.colorName} name="color" value="red" checked onClick={() => {
                                        let cn = color.colorName;
                                        setWantedColor(cn);
                                        let rn = color.realColor;
                                        setRealWantedColor(rn);
                                        setErrorMessage("false");
                                    }} />
                                    <label for={color.colorName}><span style={{ backgroundColor: color.realColor }}></span></label>
                                </div>
                            })}
                            {errorMessage === "true" && <h6 className="errorMes">אנא בחרי בגוון ברצוי</h6>}
                        </div>
                    </div >
                    <div className="quantitydiv">
                        <a className="priceItem"> ₪{item.cost} &nbsp; :מחיר</a>
                        <input className="quantityInput" type="number" id="quantity" name="quantity" min="1" placeholder="1" onChange={(e) => { setQuantity(e.target.valueAsNumber) }}></input>
                        <label className="sum" for="quantity">כמות</label>
                    </div>
                </div>
                <div className="product-price">
                    <button className="cart-btn" color='unique' onClick={() => {
                        { wantedColor === "" ? setErrorMessage("true") : handleShow(); }
                    }}>הוספה לסל</button>
                    <Modal id="mdl" show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title className="mdl-title">המוצר נוסף לסל</Modal.Title>
                        </Modal.Header>
                        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
                        <Modal.Footer className="modal-ftr">
                            <Button className="btn1" id="btn1id"/*variant="secondary"*/ onClick={() => history.push('/')}>
                                להמשך קניה</Button>
                            <Button className="btn2" id="btn2id"/*variant="primary"*/ onClick={() => history.push('/cart/')}>
                                לסיום הזמנה</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </div>
    </>
    );
}

export default ProductPage;
