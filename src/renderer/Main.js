import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

class Main extends React.Component {
  handleClick() {
    console.log('hello')
  }
  render() {
    return (<div>
      <Button type="primary" onClick={this.handleClick}>
        Test
      </Button>
    </div>)
  }
}

export default Main