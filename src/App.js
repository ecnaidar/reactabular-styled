import React, {
 Component
}
from 'react';
import styled from 'styled-components'

import {
 DeclarativeStyled,
 FormatterStyled
}
from './styled-tables'

import './App.css';

const columns = [{
 property: 'name',
 header: {
  label: 'Name'
 }
}, {
 property: 'dad',
 header: {
  label: 'Dad'
 }
}];


const rows = [{
 id: 100,
 name: 'Adam',
 dad: 'John',
 lovesBeeGees: true
}, {
 id: 101,
 name: 'Brian',
 dad: 'George',
 lovesBeeGees: false
}, {
 id: 102,
 name: 'Jack',
 dad: 'Karl',
 lovesBeeGees: false
}, ];

class App extends Component {
 render() {

  const FlexContainer = styled.div `
    display: flex;
    flex-direction: row;
    `

  const FlexKid = styled.div `
    flex:1;
    `



  const styledTableComponents = {}
  return ( 
  <div className="App">
    <div className="App-header">
      <h2> Reactabular X styled - components example < /h2> 
    </div> 
    <div>
      <FlexContainer>
        <FlexKid>
          <DeclarativeStyled columns = {columns} rows={rows}/> 
        </FlexKid>
        <FlexKid>
          <FormatterStyled columns={columns} rows={rows}/> 
        </FlexKid>
      </FlexContainer> 
    </div> 
  </div>
  );
 }
}

export default App;