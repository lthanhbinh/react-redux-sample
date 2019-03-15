import React, {Component} from 'react'
import {connect} from 'react-redux'
import {excuteGetUsers} from '../actions/users'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
      console.log('this.props.users')
        console.log(this.props.users)
        return <div>
          {
            this.props.users ? this.props.users.map((user) =>{
              return <div>{user.name}</div>
            }): null
          }
        </div>
    }
}

const mapStateToProps = state => {
    return {
      users: state.getUsers.users.list
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(excuteGetUsers())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
