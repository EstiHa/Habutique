import './cart.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './makeupList.json';

function Cart(props) {
    const { cartList, generalNnumberOfcartList } = props
    let history = useHistory();
    let sum = 0
    const goToPreviousPath = () => {
        history.goBack()
    }
    function updateSum(num) {
        sum += num;
    }
  sessionStorage.setItem('cart', JSON.stringify(cartList))
    return (<>
        <div className="cart_title">SHOPPING CART </div>
        <a className="numOfItems">
            {/* {cartList.forEach(element => { generalNnumberOfcartList += parseInt(element.quantity) })} */}
            {generalNnumberOfcartList} items in your cart</a>
        <div className="space"></div>
        {cartList && cartList.map(item =>

            <div classNameName="cart_section">
                {updateSum(item.cost * item.quantity)}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="cart_container">
                                <div className="cart_cartList">
                                    <ul className="cart_list">
                                        <li className="cart_item clearfix">

                                            <div className="cart_item_image"><img src={item.link} alt="itemPic"></img></div>

                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div className="cart_item_name cart_info_col">
                                                    <div className="cart_item_title">שם המוצר</div>
                                                    <div className="cart_item_text">{item.name}</div>
                                                </div>
                                                <div className="cart_item_name cart_info_col">
                                                    <div className="cart_item_title">חברה</div>
                                                    <div className="cart_item_text">{item.company}</div>
                                                </div>
                                                <div className="cart_item_color cart_info_col">
                                                    <div className="cart_item_title">צבע</div>
                                                    <div className="cart_item_text "><span className="cart-item-color" style={{ backgroundColor: item.realWantedColor }}></span>{item.wantedColor}</div>
                                                </div>
                                                <div className="cart_item_quantity cart_info_col">
                                                    <div className="cart_item_title">כמות</div>
                                                    <div className="cart_item_text">{item.quantity}</div>
                                                </div>
                                                <div className="cart_item_price cart_info_col">
                                                    <div className="cart_item_title">מחיר ליחידה</div>
                                                    <div className="cart_item_text">₪{item.cost}</div>
                                                </div>
                                                <div className="cart_item_price cart_info_col">
                                                    <div className="cart_item_title">סך הכל</div>
                                                    <div className="cart_item_text">₪{item.cost * item.quantity}</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        <div className="order_total">
            <div className="order_total_content text-md-center">
                <div className="order_total_amount">₪{sum}</div>
                <div className="order_total_title">  &nbsp; &nbsp;&nbsp;:סך הכל לתשלום</div>
            </div>
        </div>
        <div className="cart_buttons"> <button type="button" className="button cart_button_clear " onClick={goToPreviousPath}>להמשך הקניה</button>
            <button type="button" className="button cart_button_checkout" onClick={()=>history.push('/payment/',sum)}>לסיום הזמנה</button> </div>
    </>
    );
}

export default Cart