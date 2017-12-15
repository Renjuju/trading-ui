import * as React from 'react';
import * as Trading from '../services/trading';
import '../App.css';

interface State {
  dailyStats: [{
    high: string,
    last: string,
    low: string,
    open: string,
    volume: string,
    volume_30day: string,
    type: string
  }];
}

interface Props {

}

class DailyStats extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dailyStats: [{
        high: '',
        last: '',
        low: '',
        open: '',
        volume: '',
        volume_30day: '',
        type: ''
      }]
    }
  }
  componentWillMount() {
    Trading.getDayStats().then((dailyStats: any) => {
        this.setState({
          dailyStats
        });
    })
  }

  render() {
    return (
      <div>
        <h2 className="align-center">Daily stats</h2>
        <table className="table table-dark table-hover">
          <tbody>
            <tr>
              <th>Type</th>
              <th className="bg-primary">High</th>
              <th className="bg-danger">Low</th>
              <th>Open</th>
              <th>Volume</th>
              <th>30 day</th>
            </tr>
              {
                this.state.dailyStats.map((stat) => {
                  return (
                    <tr>
                      <th>{stat.type}</th>
                      <th>${stat.high}</th>
                      <th>${stat.low}</th>
                      <th>${stat.open}</th>
                      <th>${stat.volume}</th>
                      <th>${stat.volume}</th>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
      </div>
    );
  }
}

export default DailyStats;
