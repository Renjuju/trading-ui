import * as React from 'react';
import * as Trading from '../services/trading';

interface State {
  accounts: [{
    currency: string,
    balance: string,
    available: string,
    hold: string
  }]
}

interface Props {

}

class Accounts extends React.Component<Props, State> {

  public tradingData: number;
  public state: State = {
    accounts: [{
      currency: '0',
      balance: '',
      available: '',
      hold: ''
    }]
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      accounts: [{
        currency: '0',
        balance: '',
        available: '',
        hold: ''
      }]
    }
  }

  componentWillMount() {
    Trading.getAccounts().then((response: any) => {

      this.setState({
        accounts: response.data
      });
    });
  }

  render() {
    let tradingData: any;

    if (this.state.accounts) {
      this.state.accounts.map(account => {

      tradingData += (
          <tr>
            <td>account.currency</td>
            <td>account.balance</td>
            <td>account.available</td>
            <td>account.hold</td>
          </tr>
        );
      });

    } else {
      tradingData = <pre>Data not loaded yet..</pre>
    }

    return (

      <div>
      <table>
        <tbody>
        <tr>
          <th>Currency</th>
          <th>Balance</th>
          <th>Available</th>
          <th>Hold</th>
        </tr>
        {
          this.state.accounts.map((account) => {
            return (
              <tr>
                <td>{account.currency}</td>
                <td>{account.balance}</td>
                <td>{account.available}</td>
                <td>{account.hold}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
      </div>

    );
  }
}

export default Accounts;
