import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {HomeTwoTone} from '@ant-design/icons'
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({color, size}) => (
            <HomeTwoTone color={color} size={size}/>
        )
      }} />
    </Tab.Navigator>
  );
}