import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {signInUser} from '../../../reducers/authSlice';

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await dispatch(signInUser({username: email, password}));
      // navigation.navigate('Home');
    } catch (err) {
      console.log('Sign in failed:', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSignIn}
        style={styles.button}
        loading={isLoading}
        disabled={isLoading}>
        Sign In
      </Button>
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.signUp}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#e76f51',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  signUp: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpLink: {
    color: '#e76f51',
  },
});

export default SignInScreen;
