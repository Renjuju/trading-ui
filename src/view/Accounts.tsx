import * as React from 'react';
import * as Trading from '../services/trading';
import './Accounts.css';
import DailyStats from './DailyStats';

interface State {
  accounts: [{
    currency: string,
    balance: string,
    available: string,
    hold: string
  }];
}

interface Props {

}

class Accounts extends React.Component<Props, State> {

  public tradingData: number;
  public state: State = {
    accounts: [{
      currency: '',
      balance: '',
      available: '',
      hold: ''
    }]
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      accounts: [{
        currency: '',
        balance: '',
        available: '',
        hold: ''
      }]
    };
  }

  componentWillMount() {
    Trading.getAccounts().then((response: any) => {

      this.setState({
        accounts: response.data
      });
    });
  }

  render() {
    return (

      <div>
      <h2 className="initial align-center">Current holding</h2>
      <table className="table">
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
        <DailyStats/>
      </div>

    );
  }
}

export default Accounts;
