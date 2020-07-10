//components = Checkout, F1, F2, F3, Page4
//store data in db for each checkout experience

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
      <div>
        <button onClick={props.onClick}>
         Checkout
        </button>
      </div>
    );
  }
}

//F1 class component
  //render F1
  //render NextButton

//F2 class component
  //render F2
  //render NextButton

//F3 class component
  //render F3
  //render NextButton

//Page4 class component
  //render Page4
  //render PurchaseButton

ReactDOM.render(<Homepage />, document.getElementById('app'));

//Link your transpiled component file from index.html

//when Checkout button clicked, takes the user to the first of several forms -> F1, F2, F3, (Page4)




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

//const url = 'http://localhost/4568';


//<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


