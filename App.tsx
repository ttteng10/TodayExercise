import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import {NavigationProvider} from './src/NavigationContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NavigationProvider>
        <Router />
      </NavigationProvider>
    </NavigationContainer>
  );
}

export default App;
