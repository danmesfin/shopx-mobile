import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Add signup logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.signIn}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#e76f51',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signIn: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signInLink: {
    color: '#e76f51',
  },
});

export default SignupScreen;
