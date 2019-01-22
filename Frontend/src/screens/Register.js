import React, { Component } from 'react'
import { ImageBackground, View, TouchableOpacity, Text, AsyncStorage } from 'react-native'

import { Alert, GradientButton, LogoSection, InputSection, ClickablesSection, TextInput, RegisterFormInputs } from '../components'
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
		const isValid = this.isValidInput()

		return (
			<ImageBackground
				source={require('../../assets/splash.png')}
				style={{ width: '100%', height: '100%' }}
			>
				<LogoSection />

				<RegisterFormInputs
					phone={phone}
					password={password}
					confirmPassword={confirmPassword}
					onChangePhone={(phone) => this.setState({ phone })}
					onChangePassword={(password) => this.setState({ password })}
					onChangeConfirmPassword={(confirmPassword) => this.setState({ confirmPassword })}
				/>

				<ClickablesSection
					label={'Register'}
					marginTop={'20%'}
					onClick={this.onRegister}
					isLoading={this.state.isLoading}
					anchorText="Already have an account?"
					anchorHook="Login"
					onPress={() => this.props.navigation.navigate('Login')}
					isValid={isValid}
				/>

				{ this.renderAlert() }
			</ImageBackground>

		)
	}
}
