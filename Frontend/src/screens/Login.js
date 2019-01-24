import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import { FormContainer, LogoSection, LoginFormInputs, ClickablesSection } from '../components'
import * as API from '../API'
import AwesomeAlert from 'react-native-awesome-alerts'

export default class Login extends Component {
	state = {
		phone: '',
		password: '',
		loading: false,
		showAlert: false,
		alertMessage: '',
	}

	isValidInput = () => {
		const { phone, password } = this.state

		if (!phone || !password) {
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
			this.showAlert('Please make sure you submitted the correct phone and password')
			this.setState({ loading: false })
		})
  }

	onRegister = () => {
		this.props.navigation.navigate('Register')
	}

	showAlert = (alertMessage) => {
		this.setState({
			alertMessage,
			showAlert: true
		})
	}

	hideAlert = () => {
		this.setState({
			showAlert: false
		})
	}

	renderAlert() {
		const { showAlert, alertMessage } = this.state
		return (
			<AwesomeAlert
				show={showAlert}
				title={'Login Failed'}
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

	render() {
		const { phone, password } = this.state
		const isValid = this.isValidInput()

		return (
	      <FormContainer>

					<LogoSection />

					<LoginFormInputs
						phone={phone}
						password={password}
						onChangePhone={(phone) => this.setState({ phone })}
						onChangePassword={(password) => this.setState({ password })}
					/>

					<ClickablesSection
						label={'Login'}
						marginTop={'10%'}
						onClick={this.onLogin}
						isLoading={this.state.isLoading}
						anchorText="Don't have an account?"
						anchorHook="Sign Up"
						onPress={() => this.props.navigation.navigate('Register')}
						isValid={isValid}
					/>

					{ this.renderAlert() }
	      </FormContainer>

		)
	}
}
