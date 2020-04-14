import React from 'react';

function expenseOutput() {
  return(
    <div className="col-10 input field output">
      <h3>New items will be added here.</h3>
      <table className="table table-borderless table-striped">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Purchase</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td width="15%">cash</td>
          <td width="30%">food</td>
          <td width="20%">04/14/2020</td>
          <td width="25%">$165.00</td>
          <td className="to-delete" width="10%">X</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default expenseOutput;