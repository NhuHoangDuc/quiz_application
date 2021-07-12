import React,{Component} from 'react';
import QuestionBox from './QuestionBox';
import { Provider } from 'react-redux';
import store from'./store';

class Play extends Component {
  render() {
      return (
          <div>
            <Provider store={store}>
              <QuestionBox/>
            </Provider>
           </div>
      );
  }
}

export default Play;


