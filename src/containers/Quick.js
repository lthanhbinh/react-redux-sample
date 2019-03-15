import React, {Component} from 'react'
import {connect} from 'react-redux'

import Customers from './Customers'
import Products from './Products'

class QuickPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tabName: 'Customers',
          info: {}
        }
        this.clickHandle = this.clickHandle.bind(this)
    }
    componentDidMount() {
    }
    clickHandle(e) {
      this.setState({
        tabName: e.target.id
      })
    }
    setInfo(currentData) {
      console.log(currentData)
    }
    render() {
        return <div>
            <a id="Customers" href="javascript:void(0)" onClick={this.clickHandle}>Customers</a>
            <a id="Products" href="javascript:void(0)" onClick={this.clickHandle}>Products</a>
            {this.state.tabName === 'Customers' ? <Customers setInfo={this.setInfo}/>: <Products setInfo={this.setInfo}/>}

        </div>
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuickPage);
