import './tips.css'
import React, { useState ,useEffect} from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem, MDBView } from
  "mdbreact";



function Tips() {

  const[tips, setTips]=useState()
  
  useEffect(() => {
    debugger
  fetch(`http://localhost:3080/tips`, {
    method: "GET"
  }).then(res => res.json())
    .then((res) => { setTips(res);console.log(tips) })
    .catch(error => console.log('error', error));
},[])

      return(<>
      {tips && <MDBCarousel
      activeItem={1}
      length={10}
      showControls={true}
      className="z-depth-1"
    >
        <MDBCarouselItem itemId="1">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[0].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[0].id}
                <br/><br/>
                {tips[0].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[0].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[1].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[1].id}
                <br/><br/>
                {tips[1].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[1].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[2].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[2].id}
                <br/><br/>
                {tips[2].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[2].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[3].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[3].id}
                <br/><br/>
                {tips[3].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[3].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[4].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[4].id}
                <br/><br/>
                {tips[4].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[4].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[5].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[5].id}
                <br/><br/>
                {tips[5].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[5].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[6].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[6].id}
                <br/><br/>
                {tips[6].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[6].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="8">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[7].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[7].id}
                <br/><br/>
                {tips[7].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[7].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="9">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[8].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption>
                <h2 className="h2-responsive">{tips[8].id}
                <br/><br/>
                {tips[8].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[8].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="10">
          <MDBView>
           
                <img
                  className="d-block w-100"
                  src={tips[9].img}
                  alt=""
                />
               
          </MDBView>
          <MDBCarouselCaption >
                <h2 className="h2-responsive">{tips[9].id}
                <br/><br/>
                {tips[9].title}</h2>
                <br/> <br/>
                <p className="p-responsive">{tips[9].content}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
       
    </MDBCarousel> }
    </>);
  

}

export default Tips;