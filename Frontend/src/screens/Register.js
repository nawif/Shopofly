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
				alertMessage: 'Sorry, the password must be at least 6 characters.'
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

  renderForm() {
		const { phone, password, confirmPassword, isPhoneValid, isPassValid, isConfirmValid } = this.state
		const { submitButton, formContainer, signUpButton, signUpText, boldText, inputContainer, inputStyle, redShadow } = styles

		return (
      <KeyboardAvoidingView style={formContainer}>

				<View>
          <View style={[inputContainer, !isPhoneValid ? redShadow : null ]}>
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
							onEndEditing={(e) => this.validatePhone(e.nativeEvent.text)}
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

					<View style={[inputContainer, !isConfirmValid ? redShadow : null]}>
						<TextField
						label={'Confirm Password'}
						labelFontSize={12}
						fontSize={16}
						textColor={'#FFFFFF'}
						tintColor={'#FFFFFF'}
						baseColor={'#FFFFFF'}
						characterRestriction={50}
						inputStyle={inputStyle}
						value={confirmPassword}
						onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
						onEndEditing={(e) => this.validateConfirm(e.nativeEvent.text)}
						secureTextEntry
						autoCapitalize='none'
						/>
					</View>
					{
							//TODO: Campare the Password field with the confirm password
							//TODO: Error Massage, Should be fit with the whole app style.
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
		const { logo }=styles
		return (
      <ImageBackground
        source={require('../../assets/splash.png')}
        style={{width: '100%', height: '100%' }}
      >
				<ScrollView style={{flex: 1}}>
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
		alignSelf: 'center',
	},
  formContainer: {
    top: '8%'
  },
  submitButton: {
    marginTop: '5%',
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
		fontFamily: 'Roboto-Medium',
		height: '100%'
	},
	inputContainer: {
		width: '80%',
		alignSelf: 'center',
		opacity: 0.8,
		marginBottom: 20
	},
	redShadow: {
		shadowColor: 'red',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 10,
	}
}
