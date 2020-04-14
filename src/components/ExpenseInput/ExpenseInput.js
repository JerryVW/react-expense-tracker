import React from 'react';


const ExpenseInput = props => {
  return (
    <div className="col-12 coll-sm-4 input-field">
      <h2>Keep track of your finances with this simple</h2>
      <h1>Exspense Tracker</h1>
      <form className="form-inline">
        <div className="form-group col-lg-6">
          <label name="type">Type:</label>
            <button type="button" className="btn btn-default dropdown-toggle  input-shadow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Type used for purchase<span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>Cash</li>
              <li>Credit Card</li>
              <li>Check</li>
              <li>Other</li>
            </ul>
        </div>

        <div className="form-group col-lg-6">
          <label name="purchase">Purchase:</label>
          <input type="text" className="input-shadow" placeholder="Purchase" aria-describedby="basic-addon1" />
        </div>

          <div className="form-group col-lg-6">
            <label className="control-label" name="date">Date:</label>
            <input className="input-shadow" id="date" name="date" placeholder="MM/DD/YYY" type="date" />
          </div>
          <div className="form-group col-lg-6">
            <label name="amount">Amount:</label>
            <input type="text" className="input-shadow" id="amount" placeholder="Amount" />
          </div>
          <button className="btn btn-success">Add Item</button>
      </form>
    </div>
  );
}

export default ExpenseInput;