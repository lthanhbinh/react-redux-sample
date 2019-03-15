import React, {Component} from 'react'
import {connect} from 'react-redux'

class Customers extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const customerData = {name: 'abc', email: 'abc@gmail.com'}
        return <div>
            <div onClick={() => this.props.setInfo(customerData)}>Customer</div>
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
)(Customers);
