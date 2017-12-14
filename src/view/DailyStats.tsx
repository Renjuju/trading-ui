import * as React from 'react';
import * as Trading from '../services/trading';

interface State {
  dailyStats: [{
    high: string,
    last: string,
    low: string,
    open: string,
    volume: string,
    volume_30day: string
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
        volume_30day: ''
      }]
    }
  }
  componentWillMount() {
    Trading.getDayStats('BTC-USD').then((dailyStats: any) => {
      console.log(dailyStats);
        this.setState({
          dailyStats
        });
    })
  }

  render() {
    return (
      <div>
        <pre>hello</pre>
      </div>
    );
  }
}

export default DailyStats;
