import React from 'react';
import Input from './input';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      data: [{ count: 1 }]
    }
  }

  updateCount = () => {
    this.setState((prevState) => {
      let data = [...prevState.data, { count: prevState.data.length + 1 }]
      return { data }
    })
  }

  render() {

    return (
      <div style={{ marginTop: 20 }}>
        {this.state.data.map((val, index) =>
          <Input range={(val.count) * 100} countHandler={this.updateCount} key={index} />)}
      </div>
    );

  }
}

export default App;
