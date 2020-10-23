import React, { Component } from 'react';
import moize from 'moize'; 
import Momoize from './Momoize';

class MoizeTest extends Component {
     render() {
         const MomoizedFoo = moize.react(Momoize, { isDeepEqual: true });

         return (
             <div>
                 {
                     'I will memoize the following entry:'
                 }
                 <MomoizedFoo />
             </div>
         )
     }
}

export default MoizeTest;