import React, { Component } from 'react'
import { ImageBackground, View, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Text, AsyncStorage, Image, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Alert, GradientButton } from '../components'
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

	isValidInput = () => {
		const { phone, password, confirmPassword, isPhoneValid, isPassValid, isConfirmValid } = this.state

		if (!phone || !password || !confirmPassword) {
			return this.setState({
				showAlert: true,
				alertMessage: 'Sorry, you can not submit if you have empty field(s).'
			})
		} else if (!isPhoneValid) {
			return this.setState({
				showAlert: true,
				alertMessage: 'Sorry, the phone number format you entered is incorrect.'
			})
		} else if (!isPassValid) {
			// TODO: check this condition
			return this.setState({
				showAlert: true,
				alertMessage: 'Sorry, the password must be at least 8 characters.'
			})
		} else if (!isConfirmValid) {
			return this.setState({
				showAlert: true,
				alertMessage: 'Sorry, the password and confirm password fields must be the same.'
			})
		} else {
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
		if (password.length >= 6) {
			this.setState({ isPassValid: true })
		} else {
			this.setState({ isPassValid: false })
		}
	}

	validateConfirm = (confirmPassword) => {
		console.log(confirmPassword)
		if (confirmPassword.length >= 6 && confirmPassword === this.state.password) {
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

	renderLogo() {
		const { logo } = styles

		return 	<Image
							source={require('../../assets/logo.png')}
							style={logo}
						/>
	}

	renderInput() {
		const { phone, password, confirmPassword } = this.state
		const { inputContainer, inputStyle, labelTextStyle } = styles

		return (
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
					labelTextStyle={labelTextStyle}
					value={phone}
					onChangeText={(phone) => this.setState({ phone })}
					onEndEditing={(e) => this.validatePhone(e.nativeEvent.text)}
					error={!this.state.isPhoneValid ? 'The phone number format you entered is incorrect' : null}
				/>

				<TextField
					label={'Password'}
					labelFontSize={12}
					fontSize={16}
					textColor={'#FFFFFF'}
					tintColor={'#FFFFFF'}
					baseColor={'#FFFFFF'}
					characterRestriction={50}
					inputStyle={inputStyle}
					labelTextStyle={labelTextStyle}
					value={password}
					onChangeText={(password) => this.setState({ password })}
					onEndEditing={(e) => this.validatePassword(e.nativeEvent.text)}
					secureTextEntry
					autoCapitalize='none'
					error={!this.state.isPassValid ? 'The password must be at least 8 characters.' : null}
				/>

				<TextField
					label={'Confirm Password'}
					labelFontSize={12}
					fontSize={16}
					textColor={'#FFFFFF'}
					tintColor={'#FFFFFF'}
					baseColor={'#FFFFFF'}
					characterRestriction={50}
					inputStyle={inputStyle}
					labelTextStyle={labelTextStyle}
					value={confirmPassword}
					onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
					onEndEditing={(e) => this.validateConfirm(e.nativeEvent.text)}
					secureTextEntry
					autoCapitalize='none'
					error={!this.state.isConfirmValid ? 'The password and confirmation must be the same.' : null}
				/>
			</View>
		)
	}

	renderClickables() {
		const { submitButton, signUpButton, signUpText, boldText } = styles

		return (
			<View>
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
			</View>
		)
	}

	render() {
		const { logoSection, inputSection, clickablesSection } = styles
		return (
			<ImageBackground
				source={require('../../assets/splash.png')}
				style={{ width: '100%', height: '100%' }}
			>
				<View style={logoSection}>
					{ this.renderLogo() }
				</View>

				<View style={inputSection}>
					{ this.renderInput() }
				</View>

				<View style={clickablesSection}>
					{ this.renderClickables() }
				</View>

				{ this.renderAlert() }
			</ImageBackground>

		)
	}
}

const styles = {
	logoSection: {
		height: '40%',
		justifyContent: 'center'
	},
	inputSection: {
		height: '30%',
		justifyContent: 'center'
	},
	clickablesSection: {
		height: '30%',
		alignContent: 'center'
	},
	logo: {
		alignSelf: 'center'
	},
	inputContainer: {
		alignSelf: 'center',
		alignContent: 'space-around',
		width: '80%'
	},
  submitButton: {
    marginTop: '20%',
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
  boldText: {
    fontFamily: 'Roboto-Bold',
  },
	inputStyle: {
		color: '#464949',
		fontFamily: 'Roboto-Medium'
	},
	labelTextStyle: {
		opacity: 0.5
	}
}
