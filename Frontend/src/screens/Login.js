import React, { Component } from 'react'
import { ImageBackground, View, SafeAreaView, TouchableOpacity, Text, AsyncStorage, Spinner,Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TextField } from 'react-native-material-textfield';
import { Button, GradientButton } from '../components'
import * as API from '../API'
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Login extends Component {
	state = {
		phone: '0504444444',
		password: '123456',
		loading: false,
		showAlert: false,
		alertTitle: '',
		alertMessage: '',
	}

	isValidInput = () => {
		const { phone, password } = this.state

		if (!phone || !password) {
			this.setState({
				showAlert: true,
				alertMessage: 'Sorry, you can not submit without filling all the required fields.'
			})

			return false
		}

		return true
	}

  onLogin = () => {
		const { phone, password } = this.state

		if(!this.isValidInput()) {
			return
		}

		this.setState({ loading: true })

    API.login(phone, password)
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
			this.showAlert('Login Failed', 'Please make sure you submitted the correct phone and password')
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
		const { phone, password } = this.state
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
							value={phone}
							onChangeText={(phone) => this.setState({ phone })}
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

				<TouchableOpacity
					style={signUpButton}
					onPress={this.onRegister}
				>
          <Text style={signUpText}>Do not have an account? <Text style={boldText}>Sign Up</Text></Text>
        </TouchableOpacity>

				<View style={submitButton}>
					<GradientButton
						label={'Login'}
						onClick={this.onLogin}
						isLoading={this.state.isLoading}
					/>
				</View>



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
					<ScrollView>
						<Image
						source={require('../../assets/logo.png')}
						style={logo}
						/>
						{ this.renderForm() }
						{ this.renderAlert() }
					</ScrollView>
	      </ImageBackground>

		)
	}
}

const styles = {
	logo: {
		marginTop: '35%',
		alignSelf: 'center'
	},
  formContainer: {
    top: '8%'
  },
  submitButton: {
    marginTop: '15%',
		marginBottom: 15
  },
  signUpButton: {
    alignItems: 'center',
    height: 50,
		justifyContent: 'center',
		marginTop: '4%'
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
		alignSelf: 'center',
		opacity: 0.8,
		marginBottom: 20
	},
}
