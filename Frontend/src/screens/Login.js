import React, { Component } from 'react'
import { ImageBackground, View, SafeAreaView, TouchableOpacity, Text, AsyncStorage, Spinner,Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextField } from 'react-native-material-textfield';
import { Button, GradientButton } from '../components'
import * as API from '../API'
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Login extends Component {
	state = {
		email: 'osamalfaify@gmail.com',
		password: '123456',
		loading: false,
		showAlert: false,
		alertTitle: '',
		alertMessage: '',
	}

  onLogin = () => {
		const { email, password } = this.state
		this.setState({ loading: true })

    API.login(email, password)
    .then(async (token) => {
			if(token){
				await AsyncStorage.setItem('token', token)
				this.props.navigation.navigate('Scan', { token })
				this.setState({ loading: false })
			} else {
				alert('Could not get token, please check your connection and try again.')
			}
    })
    .catch((error) => {
			this.showAlert('Login Failed', 'Please make sure you submitted the correct email and password')
			this.setState({ loading: false })
		})
  }

	onRegister = () => {
		this.props.navigation.navigate('Register')
	}

	showAlert = (alertTitle, alertMessage) => {
		this.setState({
			alertMessage,
			alertTitle,
			showAlert: true
		})
	}

	hideAlert = () => {
		this.setState({
			showAlert: false
		})
	}

	renderAlert() {
		const { showAlert, alertTitle, alertMessage } = this.state
		return (
			<AwesomeAlert
				show={showAlert}
				title={alertTitle}
				message={alertMessage}
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

  renderForm() {
		const { email, password } = this.state
		const { submitButton, formContainer, signUpButton, signUpText, boldText, inputContainer, inputStyle, redBg } = styles
    return (
      <View style={formContainer}>

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
							value={email}
							onChangeText={(email) => this.setState({ email })}
							autoCapitalize='none'
						/>
					</View>

					<View style={inputContainer}>
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
							secureTextEntry
							autoCapitalize='none'
						/>
					</View>
				</View>

				<View style={submitButton}>
					<GradientButton
						label={'Login'}
						onClick={this.onLogin}
						isLoading={this.state.isLoading}
					/>
				</View>

        <TouchableOpacity
					style={signUpButton}
					onPress={this.onRegister}
				>
          <Text style={signUpText}>Do not have an account? <Text style={boldText}>Sign Up</Text></Text>
        </TouchableOpacity>

      </View>
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
		marginTop: '35%',
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
		fontFamily: 'Roboto-Medium'
	},
	inputContainer: {
		width: '80%',
		height: 48,
		alignSelf: 'center',
		opacity: 0.8,
		marginBottom: 10
	},
}
