import React, { Component } from 'react';
import moize from 'moize'; 
// import Momoize from './Momoize';

class MoizeTest extends Component {
    componentDidMount() {
        const method = (a, b) => a + b;
        const memoized = moize(method);

        console.log(memoized(2,4));     // 6
        console.log(memoized(2,4));     // 6 <- 캐시에서 가져옴 
        console.log(memoized(5,10));
    }
     render() {
         return <div></div>;
     }
    //  render() {
    //      const MomoizedFoo = moize.react(Momoize, { isDeepEqual: true });

    //      return (
    //          <div>
    //              {
    //                  'I will memoize the following entry:'
    //              }
    //              <MomoizedFoo />
    //          </div>
    //      )
    //  }
}

export default MoizeTest;