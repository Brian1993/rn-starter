import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import Test from './src/screens/Test'
import List from './src/screens/ListScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    // List: List
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
