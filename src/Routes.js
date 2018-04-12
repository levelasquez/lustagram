import { StackNavigator, TabNavigator } from 'react-navigation'

import SignIn from './Auth/SignIn.component'
import SignUp from './Auth/SignUp.component'

import Home from './Home/Home.component'
import Search from './Search/Search.component'
import Upload from './Upload/Upload.component'
import Follow from './Follow/Follow.component'
import Profile from './Profile/Profile.component'

const AuthRoutes = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
}, { headerMode: 'none' })

const TabRoutes = TabNavigator({
  Home: { screen: Home },
  Search: { screen: Search },
  Upload: { screen: Upload },
  Follow: { screen: Follow },
  Profile: { screen: Profile },
})

export {
  AuthRoutes,
  TabRoutes,
}
