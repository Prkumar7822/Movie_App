import { createStackNavigator } from '@react-navigation/stack';
import NetflixHomePage from '../screens/homepage';
import MovieDetailsScreen from '../screens/movieDetails';
import BottomNavigation from './BottomNavigation';

export type Model= {
    homepage:undefined,
    movieDetails:{movie:any} |undefined,   
  }
const Stack = createStackNavigator<Model>();

const AppNavigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="homepage" component={BottomNavigation} options={{headerShown:false}} />
            <Stack.Screen name="movieDetails" component={MovieDetailsScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}
export default AppNavigation;