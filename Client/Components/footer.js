import React from "react";
import { MDBIcon, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';



const FooterPage = () => {
  const history = useHistory();
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="footer-links">

          <MDBCol md="6 icons-list">
              <a className="footerWordsLinks" href="/about">אודות</a>

            <ul>
              <a className="list-unstyled">
                <a href="/tips" tooltip="טיפים"><MDBIcon fab icon="gratipay" className="icon-footer" tooltip="טיפים" /></a>
              </a>
              <a className="space-footer" />
              <a className="list-unstyled">
                <a href="/" tooltip="בית"><MDBIcon icon="home" className="icon-footer" tooltip="בית" onClick={() => history.push('/about/')} /></a>
              </a>
              <a className="space-footer" />

              <a className="list-unstyled">
                <a href="/cart" tooltip="עגלת קניות" ><MDBIcon icon="shopping-cart" className="icon-footer" tooltip="עגלת קניות" /></a>
              </a>
            </ul>
          </MDBCol>



          {/* <MDBCol md="6 products-list">
             <ul>
            <a
            className="title-footer">מוצרים:
            </a>
            <a className="space-footer"/>
              <a className="list-unstyled">
                <a href="/face">פנים</a>
              </a>
            <a className="space-footer"/>
              <a className="list-unstyled">
                <a href="/eyes">עיניים</a>
              </a>
              <a className="space-footer"/>
              <a className="list-unstyled">
                <a href="/lips">שפתיים</a>
              </a>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      {/* <div className="footer-copyright text-center py-3">
       
      </div> */}
    </MDBFooter>
  );
}

export default FooterPage;