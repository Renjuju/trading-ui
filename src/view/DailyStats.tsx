import * as React from 'react';
import * as Trading from '../services/trading';

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
      <h2>Daily stats</h2>
        <div className="row">
        {
          this.state.dailyStats.map((stat) => {
            return (
              <div className = "col-md-4">
                <div>{stat.type}</div>
                <div>high - {stat.high}</div>
                <div>low - {stat.low}</div>
                <div>open - {stat.open}</div>
                <div>volume - {stat.volume}</div>
                <div>volume_30day - {stat.volume}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default DailyStats;
