import React,{Component} from 'react';
import LineGraph from './LineGraph'
import { Provider } from 'react-redux';
import store from'./store';

class ScoreTracking extends Component {
  render() {
      return (
          <div>
            <Provider store={store}>
              <LineGraph/>
            </Provider>
           </div>
      );
  }
}
;

export default ScoreTracking;