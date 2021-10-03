import Paypal from "./paypal";
import './paymentPage.css';
import { useState ,useEffect} from "react"
import {
  nameValidation, creditcardSecurityValidation, passwordValidation
  , creditcardNumberValidation, phonenumberValidation, emailValidation, password2Validation, addressValidation
} from "./validations";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['פרטי חשבון', 'מידע אישי', 'פרטי תשלום'];
}



export default function HorizontalLabelPositionBelowStepper() {

  const [state1, setstate1] = useState({ firstName: '', lastName: '', contactNo: '', address: '' });
  const [errorState1, seterrorState1] = useState({ errorFirstName: '', errorLastName: '', errorContactNo: '', errorAddress: '' });

  const [state2, setstate2] = useState({ email: '', password: '', password2: '' });
  const [errorState2, seterrorState2] = useState({ errorEmail: '', errorPassword: '', errorPassword2: '' });

  const [state3, setstate3] = useState({ ownNumber: '', cardNumber: '', month: '', year: '', cvc: '' });
  const [errorState3, seterrorState3] = useState({ errorOwnNumber: '', errorCardNumber: '', errorMonth: '', errorExpiryDate: '', errorCVC: '' });

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 3) {; emailjs.send('service_6wk4chl', 'template_pg3u68e', { coustomer_email: state2.email, f_name: state1.firstName, l_name: state1.lastName }, 'user_Zg7exmoqGeoXAu5zXzExy')   
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalInfo state1={state1} setstate1={setstate1} errorState1={errorState1} seterrorState1={seterrorState1} />;
    case 1:
      return <AccountInfo state2={state2} setstate2={setstate2} errorState2={errorState2} seterrorState2={seterrorState2} />;
    case 2:
      return <Payment state3={state3} setstate3={setstate3} errorState3={errorState3} seterrorState3={seterrorState3} />;
    case 3:
      return <Finish />
    default:
      return 'Unknown stepIndex';
  }
}

return (
  <div className={classes.root}>
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    <div>
      <Typography className={classes.instructions}>
        {getStepContent(activeStep)}
      </Typography>
      {activeStep !== 3 && <div className="mooving-btns" >
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.backButton}>
          חזרה
              </Button>
        <Button variant="contained" color="primary" onClick={() => {
          if (errorState1.errorFirstName === "" && errorState1.errorLastName === "" && errorState1.errorContactNo === "" && errorState1.errorAddress === ""
            && errorState2.errorEmail === "" && errorState2.errorPassword === "" && errorState2.errorPassword2 === ""
            && errorState3.errorCardNumber === "" && errorState3.errorOwnNumber === "" && errorState3.errorCVC === "")
          handleNext()
        }}>
          {activeStep === steps.length - 1 ? 'סיום' : 'הבא'}
        </Button>
      </div>}
    </div>
  </div>
);
}


function AccountInfo(props) {
  console.log('props', props);
  const { state2, setstate2, errorState2, seterrorState2 } = props
  sessionStorage.setItem('acountInfo', JSON.stringify(state2))
  return (<>
    <fieldset className="form-card">
      <h2 className="fs-title">Account Information</h2>
      <input type="email" name="email" placeholder="Email Id" onChange={(event) => {
        setstate2({ ...state2, email: event.target.value });
        var isCorrect = emailValidation(state2.email);
        seterrorState2({ ...errorState2, errorEmail: isCorrect });
      }} />
      <h6 className="errorMessage">{errorState2.errorEmail}</h6>
      <input type="password" name="pwd" placeholder="Password" onChange={(event) => {
        setstate2({ ...state2, password: event.target.value });
        var isCorrect = passwordValidation(state2.password);
        seterrorState2({ ...errorState2, errorPassword: isCorrect });
      }} />
      <h6 className="errorMessage">{errorState2.errorPassword}</h6>
      <input type="password" name="cpwd" placeholder="Confirm Password" onChange={(event) => {
        setstate2({ ...state2, password2: event.target.value });
        var isCorrect = password2Validation(state2.password, state2.password2);
        seterrorState2({ ...errorState2, errorPassword2: isCorrect });
      }} />
      <h6 className="errorMessage">{errorState2.errorPassword2}</h6>
    </fieldset ></>
  )
}

function PersonalInfo(props) {
  const { state1, setstate1, errorState1, seterrorState1 } = props
  sessionStorage.setItem('user', JSON.stringify(state1))
  return (<fieldset className="form-card">
    <div >
      <h2 className="fs-title">Personal Information</h2>
      <input type="text" name="fname" placeholder="First Name" onChange={(event) => {
        setstate1({ ...state1, firstName: event.target.value });
        var isCorrect = nameValidation(state1.firstName)
        seterrorState1({ ...errorState1, errorFirstName: isCorrect });
      }} />
      <h6 className="errorMessage">{errorState1.errorFirstName}</h6>
      <input type="text" name="lname" placeholder="Last Name" onChange={(event) => {
        setstate1({ ...state1, lastName: event.target.value });
        var isCorrect = nameValidation(state1.lastName)
        seterrorState1({ ...errorState1, errorLastName: isCorrect });
      }} />
      <h6 className="errorMessage">{errorState1.errorLastName}</h6>
      <input type="text" name="phno" placeholder="Contact No." onChange={(event) => {
        setstate1({ ...state1, contactNo: event.target.value });
        var isCorrect = phonenumberValidation(state1.contactNo)
        seterrorState1({ ...errorState1, errorContactNo: isCorrect });
      }} />
      <h6 className="errorMessage">{errorState1.errorContactNo}</h6>
      <input type="text" name="address" placeholder="Address" onChange={(event) => {
        setstate1({ ...state1, address: event.target.value });
        var isCorrect = addressValidation(state1.address)
        seterrorState1({ ...errorState1, errorAddress: isCorrect });
      }} />
      <h6 className="errorMessage">{errorState1.errorAddress}</h6>
    </div>
  </fieldset>)
}

function Payment(props) {
  const { history, state3, setstate3, errorState3, seterrorState3, sum } = props
  sessionStorage.setItem('paymentDetails', JSON.stringify(state3))
  return (
    <fieldset className="form-card">
      <div >
        <h2 className="fs-title t">Payment Information</h2>
        <div className="radio-group">
          <div className='radio radio-payment credit' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" /></div>
          <div className='radio radio-payment paypal' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" onClick={() => { <Paypal history={history} total={sum} /> }} /></div> <br />
        </div>
        <input className="holdername" type="text" name="holdername" placeholder="Card Holder Name*" onChange={(event) => {
          setstate3({ ...state3, ownNumber: event.target.value });
          var isCorrect = creditcardNumberValidation(state3.ownNumber)
          seterrorState3({ ...errorState3, errorOwnNumber: isCorrect });
        }} />
        <h6 className="errorMessage">{errorState3.errorOwnNumber}</h6>
        <div className="row">
          <div className="col-9 cardnumber"> <input type="text" name="cardno" placeholder="Card Number*" onChange={(event) => {
            setstate3({ ...state3, cardNumber: event.target.value });
            var isCorrect = creditcardNumberValidation(state3.cardNumber)
            seterrorState3({ ...errorState3, errorCardNumber: isCorrect });
          }} />
            <h6 className="errorMessage">{errorState3.errorCardNumber}</h6> </div>
          <div className="col-3 cvc"> <label className="pay"></label> <input type="password" name="cvcpwd" placeholder="CVC*" onChange={(event) => {
            setstate3({ ...state3, cvc: event.target.value });
            var isCorrect = creditcardSecurityValidation(state3.cvc)
            seterrorState3({ ...errorState3, errorCVC: isCorrect });
          }} />
            <h6 className="errorMessage">{errorState3.errorCardNumber}</h6> </div>
        </div>
        <div className="row">
          <div className="col-3"> <label className="pay">Expiry Date*</label> </div>
          <div className="col-9 date"> <select className="list-dt" id="month" name="expmonth" onChange={(event) =>{
            setstate3({ ...state3, month: event.target.value});
          }}>
            <option selected>Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select> <select className="list-dt" id="year" name="expyear" onChange={(event) =>{
            setstate3({ ...state3, year: event.target.value});
          }}>
              <option selected>Year</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
              <option>2033</option>
              <option>2034</option>
              <option>2035</option>
              <option>2036</option>
              <option>2037</option>
              <option>2038</option>
              <option>2039</option>
              <option>2040</option>
            </select> </div>
        </div>
      </div>
    </fieldset>
  )
}

function Finish() {
  const classes = useStyles();
  const [orderSuccesed, setOrderSuccesed]=useState(true)
  const [orderDetails, setOrderDetails]=useState([
    {"cart": JSON.parse(sessionStorage.getItem('cart'))},
    {"user":JSON.parse(sessionStorage.getItem('user'))},
    {"account":JSON.parse(sessionStorage.getItem('acountInfo'))},
    {"payment":JSON.parse(sessionStorage.getItem('paymentDetails'))}]
  );
  
  useEffect(()=>{
    addRespond(); 
    if (orderDetails){sendingSuccessEmail()}
  },[])
  
  const addRespond = async () => {
    await fetch("http://localhost:3080/payment", {
      method: "POST",
       headers: {
       "Content-Type": "application/json"
       },
      body: JSON.stringify(orderDetails)
      
      })
      .then(res=>{setOrderSuccesed(true);
      })
    }

  const sendingSuccessEmail= () => {
    const response =  fetch("http://localhost:3080/payment/email", {
     method: "POST",
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify(orderDetails)
   })
  }
 

  return (
    <div>
      {orderSuccesed&&<Typography className={classes.instructions}> <fieldset className="form-card">
        <div >
          <h2 className="fs-title text-center">הזמנתך התקבלה בהצלחה</h2> <br /><br />
          <div className="row justify-content-center">
            <div className="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image" /> </div>
          </div> <br /><br />
          <div className="row justify-content-center">
            <div className="col-7 text-center">
              <h5>בדקות הקרובות ישלח אליך מייל עם פרטי ההזמנה</h5>
            </div>
          </div>
        </div>
      </fieldset></Typography>}
    </div>
  )
}