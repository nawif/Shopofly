import React, { Component } from 'react'
import { ImageBackground, View, TouchableOpacity, Text, AsyncStorage } from 'react-native'

import { Alert, GradientButton, LogoSection, InputSection, ClickablesSection, TextInput } from '../components'
import * as API from '../API'
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Register extends Component {
	state = {
		phone: '',
		password: '',
		isPhoneValid: true,
		isPassValid: true,
		isConfirmValid: true,
		showAlert: false,
		alertMessage: '',
		isLoading: false,
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

	isValidInput = () => {
		const { phone, password, confirmPassword, isPhoneValid, isPassValid, isConfirmValid } = this.state

		if (!phone || !password || !confirmPassword ) {
			return false
		} else if (!isPassValid || !isConfirmValid || !isPhoneValid) {
			return false
		}  else {
			return true
		}

		return false
	}

  onRegister = () => {
    const { phone, password } = this.state

		if(!this.isValidInput()) {
			return 
		}

		this.setState({ isLoading: true })
    API.register(phone, password)
    .then(async (data) => {
			this.setState({ isLoading: false })
			console.log(data.token);
				await AsyncStorage.setItem('token', data.token)
				this.props.navigation.navigate('Home', { token: data.token })
    })
    .catch((error) => {
			this.setState({
				isLoading: false,
				showAlert: true,
				alertMessage: error.response.data['cause by']
			})

			console.log("ERROR: " + error.response.data['cause by']);
		})
  }

	validatePhone = (phone) => {
		const re = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
		console.log(phone, re.test(String(phone)));
		if (re.test(String(phone))) {
			this.setState({ isPhoneValid: true })
		} else {
			this.setState({ isPhoneValid: false })
		}
	}

	validatePassword = (password) => {
		console.log(password)
		if (password.length >= 8) {
			this.setState({ isPassValid: true })
		} else {
			this.setState({ isPassValid: false })
		}
	}

	validateConfirm = (confirmPassword) => {
		console.log(confirmPassword)
		if (confirmPassword === this.state.password) {
			this.setState({ isConfirmValid: true })
		} else {
			this.setState({ isConfirmValid: false })
		}
	}

	renderAlert() {
		const { showAlert } = this.state
		return (
			<AwesomeAlert
				show={showAlert}
				title={'Registeration Failed'}
				message={this.state.alertMessage}
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
		const { phone, password, confirmPassword } = this.state
    
		return (
			<ImageBackground
				source={require('../../assets/splash.png')}
				style={{ width: '100%', height: '100%' }}
			>
				<LogoSection />

				<InputSection>
					<TextInput
						label={'Phone Number'}
						characterRestriction={14}
						value={phone}
						onChangeText={(phone) => this.setState({ phone })}
						onEndEditing={(e) => this.validatePhone(e.nativeEvent.text)}
						error={!this.state.isPhoneValid ? 'The phone number format you entered is incorrect' : null}
					/>

					<TextInput
						label={'Password'}
						characterRestriction={50}
						value={password}
						onChangeText={(password) => this.setState({ password })}
						onEndEditing={(e) => this.validatePassword(e.nativeEvent.text)}
						secureTextEntry
						autoCapitalize='none'
						error={!this.state.isPassValid ? 'The password must be at least 8 characters.' : null}
					/>

					<TextInput
						label={'Confirm Password'}
						characterRestriction={50}
						value={confirmPassword}
						onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
						onEndEditing={(e) => this.validateConfirm(e.nativeEvent.text)}
						secureTextEntry
						autoCapitalize='none'
						error={!this.state.isConfirmValid ? 'The password and confirmation must be the same.' : null}
					/>
				</InputSection>

				<ClickablesSection
					label={'Register'}
					marginTop={'20%'}
					onClick={this.onRegister}
					isLoading={this.state.isLoading}
					anchorText="Already have an account?"
					anchorHook="Login"
					onPress={() => this.props.navigation.navigate('Login')}
				/>

				{ this.renderAlert() }
			</ImageBackground>

		)
	}
}
