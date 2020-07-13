//components = Checkout, F1, F2, F3, Page4
//store data in db for each checkout experience

//url for posting to db w/route
const url = 'http://localhost/4568';

//Homepage class component /homepage
  //render CheckoutButton
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movingToF1: false};
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
  }
  handleCheckoutClick(e) {
    e.preventDefault();
    this.setState({movingToF1: true});
  }
  render() {
    return (
      <div class="container">
        <button onClick={this.handleCheckoutClick}>
          Checkout
        </button>
      </div>
    );
  }
}

//F1 class component
  //render F1: name, email, and password for account creation
  //render NextButton
class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      accountCreated: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value,
      email: e.target.value,
      password: e.target.value
    });
  }
  handleNextClick(e) {
    e.preventDefault();
    this.setState({accountCreated: true});
    //store data from F1 in db
  }
  render() {
    return (
      <div class="container">
        <h1 class="title">Create Your Account</h1>
        <form>
          <p style="padding: 2em 0 .5em 0">
            <label for="account-name">Name:</label>
            <input type="text" id="name" value={this.state.name} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="account-email">Email:</label>
            <input type="email" id="email" value={this.state.email} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 2em 0">
            <label for="account-password">Password:</label>
            <input type="password" id="pw" value={this.state.password} onChange={this.handleInputChange} required></input>
          </p>
        </form>
        <button onClick={this.handleNextClick}>
          Next
        </button>
      </div>
    );
  }
}

//F2 class component
  //render F2: ship to address (line 1, line 2, city, state, zip code) and phone number
  //render NextButton
class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: 0,
      phone: 0,
      contactInfoAdded: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      address1: e.target.value,
      address2: e.target.value,
      city: e.target.value,
      stateAbbr: e.target.value,
      zip: e.target.value,
      phone: e.target.value
    });
  }
  handleNextClick(e) {
    e.preventDefault();
    this.setState({contactInfoAdded: true});
    //store data from F2 in db
  }
  render() {
    return (
      <div class="container">
        <h1 class="title">Enter Contact Information</h1>
        <form>
          <p style="padding: 2em 0 .5em 0">
            <label for="contact-address1">Address (Line 1):</label>
            <input type="text" id="address-1" value={this.state.address1} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="contact-address2">Address (Line 2):</label>
            <input type="text" id="address-2" value={this.state.address2} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="contact-city">City:</label>
            <input type="text" id="city" value={this.state.city} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="contact-state">State (Abbr.):</label>
            <input type="text" id="state-abbr" value={this.state.stateAbbr} maxlength="2" onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="contact-zip">Zip Code:</label>
            <input type="number" id="zip-code" value={this.state.zip} maxlength="5" onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 2em 0">
            <label for="contact-phone">Phone Number:</label>
            <input type="tel" id="phone-number" value={this.state.phone} maxlength="10" onChange={this.handleInputChange} required></input>
          </p>
        </form>
        <button onClick={this.handleNextClick}>
          Next
        </button>
      </div>
    );
  }
}

//F3 class component
  //render F3: credit card #, expiry date, CVV, and billing zip code
  //render NextButton
class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: 0,
      expiration: '',
      ccv: 0,
      cardZip: 0,
      cardInfoAdded: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      card: e.target.value,
      expiration: e.target.value,
      ccv: e.target.value,
      cardZip: e.target.value
    });
  }
  handleNextClick(e) {
    e.preventDefault();
    this.setState({cardInfoAdded: true});
    //store data from F3 in db
  }
  render() {
    return (
      <div class="container">
        <h1 class="title">Enter Credit Card Information</h1>
        <form>
          <p style="padding: 2em 0 .5em 0">
            <label for="card-number">Credit Card #:</label>
            <input type="number" id="card-num" value={this.state.card} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="card-expiration">Expiration Date:</label>
            <input type="date" id="exp" value={this.state.expiration} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="card-ccv">CCV:</label>
            <input type="number" id="ccv" value={this.state.ccv} onChange={this.handleInputChange} required></input>
          </p>
          <p style="padding: .5em 0 .5em 0">
            <label for="card-zip">Billing Zip Code:</label>
            <input type="number" id="card-zip" value={this.state.cardZip} maxlength="5" onChange={this.handleInputChange} required></input>
          </p>
        </form>
        <button onClick={this.handleNextClick}>
          Next
        </button>
      </div>
    );
  }
}

function PurchaseButton(props) {
  return (
    <button onClick={props.onClick}>
      Purchase
    </button>
  );
}

//Page4 class component
  //render Page4: confirmation page which summarizes the data
  //render PurchaseButton
function Page4(name, email, address1, address2, city, state, zip, phone, card, expiration, ccv, cardZip, handlePurchaseClick) {
  return (
    <div class="container">
      <h1 class="title">Confirmation</h1>
      <form>
        <h3 style="padding: 2em 0 .5em 0">Click the Purchase Button to Complete Your Transaction</h3>
        <table id="confirmation">
          <tbody>
            <tr>
              <td>Name: {name}</td>
            </tr>
            <tr>
              <td>Email: {email}</td>
            </tr>
            <tr>
              <td>Address (Line 1): {address1}</td>
            </tr>
            <tr>
              <td>Address (Line 2): {address2}</td>
            </tr>
            <tr>
              <td>City: {city}</td>
            </tr>
            <tr>
              <td>State: {state}</td>
            </tr>
            <tr>
              <td>Zip Code: {zip}</td>
            </tr>
            <tr>
              <td>Phone Number: {phone}</td>
            </tr>
            <tr>
              <td>Card Number: {card}</td>
            </tr>
            <tr>
              <td>Expiration Date: {expiration}</td>
            </tr>
            <tr>
              <td>CCV: {ccv}</td>
            </tr>
            <tr>
              <td>Billing Zip Code: {cardZip}</td>
            </tr>
          </tbody>
        </table>
      </form>
      <div>
        <PurchaseButton onClick={handlePurchaseClick} />;
      </div>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.getElementById('app'));

//Link your transpiled component file from index.html

//when Checkout button clicked, takes the user to the first of several forms -> F1, F2, F3, (Page4)

//toggle next component to render

//<F1 fields={[name, email, password]} />




// function PurchaseButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Purchase
//     </button>
//   );
// }

// function NextButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Next
//     </button>
//   );
// }


//<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// class Checkout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movingToF1: false,
//       movingToNext: false,
//       movingtoHomepage: false
//     };
//     this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
//     this.handleNextClick = this.handleNextClick.bind(this);
//     this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
//   }

//   handleCheckoutClick() {
//     this.setState({movingToF1: true});
//   }

//   handleNextClick() {
//     this.setState({movingToNext: true});
//   }

//   handlePurchaseClick() {
//     this.setState({movingtoHomepage: true});
//   }

//   render() {
//     const movingToF1 = this.state.movingToF1;
//     const movingToNext = this.state.movingToNext;
//     const movingtoHomepage = this.state.movingtoHomepage;
//     let button;
//     if (movingToF1) {
//       button = <NextButton onClick={this.handleNextClick} />;
//       //if (movingToNext && !on Page4)
//     } else if (movingToNext) {
//       button = <NextButton onClick={this.handleNextClick} />;
//       //if (movingToNext && on Page4)
//     } else if () {
//       button = <PurchaseButton onClick={this.handlePurchaseClick} />;
//     } else if (movingtoHomepage) {
//       button = <CheckoutButton onClick={this.handleCheckoutClick} />;
//     }

//     return (

//     );
//   }
// }

// class Page4 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {finishedConfirmation: false};
//     this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
//   }
//   handlePurchaseClick(e) {
//     e.preventDefault();
//     this.setState({finishedConfirmation: true});
//     //store data from Page4 in db
//   }
//   render() {
//     return (
//       <div class="container">
//         <h1 class="title">Confirmation</h1>
//         <form>
//           <h3 style="padding: 2em 0 .5em 0">Click the Purchase Button to Complete Your Transaction</h3>
//           <table id="confirmation">
//             <tbody>
//               <tr>
//                 <td>Name:</td>
//                 <td></td>
//               </tr>
//             </tbody>
//           </table>
//         </form>
//       </div>
//     );
//   }
// }



  // class Checkout extends React.Component {
  //   render() {
  //     return (
  //       <div className="App">
  //         <Page4  />

  //       </div>
  //     );
  //   }
  // }
