import { StackNavigator, TabNavigator } from 'react-navigation'

import SignIn from './Auth/SignIn.component'
import SignUp from './Auth/SignUp.component'

import { Feed, Author, Post, Comment } from './Home'
import Search from './Search/Search.component'
import Upload from './Upload/Upload.component'
import Follow from './Follow/Follow.component'
import Profile from './Profile/Profile.component'

const AuthRoutes = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
}, { headerMode: 'none' })

const HomeStack = StackNavigator({
  Feed: { screen: Feed },
  Author: { screen: Author },
  Post: { screen: Post },
  Comment: {
    screen: Comment,
    navigationOptions: { tabBarVisible: false },
  },
})

const TabRoutes = TabNavigator({
  Home: { screen: HomeStack },
  Search: { screen: Search },
  Upload: { screen: Upload },
  Follow: { screen: Follow },
  Profile: { screen: Profile },
}, { tabBarPosition: 'bottom' })

export {
  AuthRoutes,
  TabRoutes,
}
