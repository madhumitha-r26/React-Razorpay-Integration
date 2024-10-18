import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [amount,setamount]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(amount==="")
    {
      alert("Please Enter Amount");
    }
    else{
      // alert(amount);

      var options={
        key:"rzp_test_vi0K9LUKIN7uBI",          // this is deactivated
        key_secret:"YUsOdR8peqbv8oU4NxYztFWp", // this is deactivated
        amount:amount*100,
        currency:"INR",
        name:"MADHU",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill:{
          name:"Madhu",
          email:"madhumitha@gmail.com",
          contact:123456789
        },
        notes:{
          address:"Razorpay Corporate Office"
        },
        theme:{
          color:"#52196d"
        }
      };

      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="App">
        <h1>RAZORPAY INTEGRATION USING REACT</h1>
        <center>
      <div class="make_pay">
        <input type='number' placeholder='Enter Amount' value={amount} onChange={(e)=>setamount(e.target.value)} /> <br/>
        <button onClick={handleSubmit}>MAKE PAYMENT</button>
      </div>
      </center>
    </div>
  );
}

export default App;
