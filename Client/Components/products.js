import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView } from 'mdbreact';
import './components.css';
import { useHistory, useLocation } from 'react-router-dom'


function ShowProductsList(props) {
  const { category} = props;
  const location = useLocation();
  const [productList, setProductList] = useState();

  useEffect(() => {
    fetch(`http://localhost:3080/${category}`, {
      method: "GET"
    }).then(res => res.json())
      .then((res) => { setProductList(res) })
      .catch(error => console.log('error', error));
  }, [location])

  return (<div className="productsList">
    {productList?.map(item => <ShowItem cartList={props.cartList} setCartProduct={props.setCartProduct} item={item} />)}
  </div>)
}

export default ShowProductsList;

function ShowItem(props) {
  const { item } = props
  const history = useHistory();


  return (<div className="cards-commponents" >

    <MDBCol className="product" onClick={() => history.push('/productPage/', item)} md='4'>
      <MDBCard narrow>

        <MDBView cascade>
          <MDBCardImage
            hover
            overlay='white-slight'
            className='card-img-top'
          />
        </MDBView>
        <img className="prodImage" src={item.link} alt=""></img>


        <MDBCardBody>
          <MDBCardTitle className='crd-ttl'>
            {item.company}
          </MDBCardTitle>

          <MDBCardText className='font-weight-reg' >
            {item.description}
          </MDBCardText>
        </MDBCardBody>

      </MDBCard>
    </MDBCol>

  </div>)
}