import './App.css';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Setting'
import { Route } from 'react-router-dom'
import Side_bar from './components/Left_column/Side_bar'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login'
import { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import Preloader from './components/Common/Preloader/Preloader'
import { initializeApp } from './Redux/appReducer'
const AccountContainer = lazy(() => import('./components/Account/AccountContainer'))
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
class App extends Component {


  componentDidMount() {
		this.props.initializeApp()
	}
  
  render () {

    if (!this.props.initialization) return <Preloader />

    return (
      <div className="frog-box">
        <HeaderContainer />
        <div className="content-box">
          <Side_bar />
          <div className="content-box__item">
            <Route path='/dialogs' render={() => {
              return <Suspense fallback={ <Preloader /> } >
                <DialogsContainer />
              </Suspense>
              }
            }></Route>
            <Route path="/profile/:userId" render={() => {
              return <Suspense fallback={ <Preloader /> } >
		            	<AccountContainer />
		            </Suspense>
              }
            }></Route>
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/music' component={Music}></Route>
            <Route path='/news' component={News}></Route>
            <Route path='/settings' component={Settings}></Route>
            <Route path='/login' component={Login}></Route>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization
})

export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp})
)(App)
