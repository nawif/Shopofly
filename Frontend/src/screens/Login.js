import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { AddressBook } from "./";
import { MainContainer, LogoSection, LoginFormInputs, ClickablesSection } from '../components'
import * as API from '../API'
import AwesomeAlert from 'react-native-awesome-alerts'

export class Login extends Component {
	state = {
		phone: '0504244460',
		password: '12345678',
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
				this.props.navigation.navigate('Item', { token })
			} else {
				this.showAlert('Could not get token, please check your connection and try again.')
			}
			this.setState({ loading: false })
    })
    .catch((error) => {
			console.log(error.response);
			this.showAlert(error.response.data['error'])
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
	      <AddressBook/>

		)
	}
}
