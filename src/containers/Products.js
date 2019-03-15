import React, {Component} from 'react'
import {connect} from 'react-redux'

class Products extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
      const productData = {'product': [name: 'abc', email: 'abc@gmail.com']}

        return <div>
            Products
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
)(Products);
