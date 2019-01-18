import React, { Component } from 'react'
import { ImageBackground, View, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Text, AsyncStorage, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Alert, GradientButton } from '../components'
import * as API from '../API'
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Register extends Component {
	state = {
		email: '',
		password: '',
    name: '',
		isEmailValid: true,
		isPassValid: true,
		showAlert: false,
		isLoading: false
	}

	showAlert = () => {
		this.setState({
			showAlert: true
		})
	}

	hideAlert = () => {
		this.setState({
			showAlert: false
		})
	}


  onRegister = () => {
    const { email, password } = this.state
		this.setState({ isLoading: true })
    API.register(email, password)
    .then(async (data) => {
			this.setState({ isLoading: false })
			console.log(data.token);
				await AsyncStorage.setItem('token', data.token)
				this.props.navigation.navigate('Home', { token: data.token })
    })
    .catch((error) => {
			this.setState({ isLoading: false, showAlert: true })
			console.log(error.response);
		})
  }

	validateEmail = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		console.log(email , re.test(String(email).toLowerCase()));
		if (re.test(String(email).toLowerCase())) {
			this.setState({ isEmailValid: true })
		} else {
			this.setState({ isEmailValid: false })
		}
	}

	validatePassword = (password) => {
		console.log(password);
		if (password.length >= 6) {
			this.setState({ isPassValid: true })
		} else {
			this.setState({ isPassValid: false })
		}
	}

  renderForm() {
		const { email, password, address, name, phoneNumber, isEmailValid, isPassValid } = this.state
		const { submitButton, formContainer, signUpButton, signUpText, boldText, inputContainer, inputStyle, redShadow } = styles
		return (
      <KeyboardAvoidingView style={formContainer}>

				<View>
          <View style={inputContainer}>
            <TextField
							label={'Phone Number'}
							labelFontSize={12}
							fontSize={16}
							textColor={'#FFFFFF'}
							tintColor={'#FFFFFF'}
							baseColor={'#FFFFFF'}
							characterRestriction={10}
              inputStyle={inputStyle}
              value={name}
              onChangeText={(name) => this.setState({ name })}
            />
          </View>

					<View style={[inputContainer, !isPassValid ? redShadow : null ]}>
						<TextField
						label={'Password'}
						labelFontSize={12}
						fontSize={16}
						title={'Password must be at least 8 characters'}
						textColor={'#FFFFFF'}
						tintColor={'#FFFFFF'}
						baseColor={'#FFFFFF'}
						characterRestriction={50}
						inputStyle={inputStyle}
						value={password}
						onChangeText={(password) => this.setState({ password })}
						onEndEditing={(e) => this.validatePassword(e.nativeEvent.text)}
						secureTextEntry
						autoCapitalize='none'
						/>
					</View>
					{
							!isPassValid ? <Alert text={'Password should be at least 6 characters'} /> : null
					}
				</View>


				<View style={submitButton}>
					<GradientButton
						label={'Register'}
						onClick={this.onRegister}
						isLoading={this.state.isLoading}
					/>
				</View>

        <TouchableOpacity
					style={signUpButton}
					onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={signUpText}>Already have an account? <Text style={boldText}>Login</Text></Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )
  }

	renderAlert() {
		const { showAlert } = this.state
		return (
			<AwesomeAlert
				show={showAlert}
				title={'Registeration Failed'}
				message={'Please make sure you have a good connection and try again.'}
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={true}
				showConfirmButton={true}
				confirmText="OK"
				confirmButtonColor="#1fb19c"
				onConfirmPressed={() => this.hideAlert()}
				messageStyle={{ textAlign: 'center' }}
			/>
		)
	}

	render() {
		const { logo }=styles
		return (
      <ImageBackground
        source={require('../../assets/splash.png')}
        style={{width: '100%', height: '100%' }}
      >
				<Image
					source={require('../../assets/logo.png')}
					style={logo}
				/>
        { this.renderForm() }
				{ this.renderAlert() }
      </ImageBackground>

		)
	}
}

const styles = {
	logo: {
		marginTop: '40%',
		alignSelf: 'center',
	},
  formContainer: {
    top: '8%'
  },
  submitButton: {
    marginTop: 50,
		marginBottom: 15
  },
  signUpButton: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center'
  },
  signUpText: {
    color: 'white',
    fontFamily: 'Roboto-Light',
    opacity: 1,
    fontSize: 15,
    alignSelf: 'center'
  },
  dividerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  boldText: {
    fontFamily: 'Roboto-Bold',
  },
	inputStyle: {
		color: '#464949',
		fontFamily: 'Roboto-Medium',
		height: '100%'
	},
	inputContainer: {
		width: '80%',
		height: 48,
		alignSelf: 'center',
		opacity: 0.8,
		marginBottom: 10
	},
	redShadow: {
		shadowColor: 'red',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 10,
	}
}
