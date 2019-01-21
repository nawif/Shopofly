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

	renderLogo() {
		const { logo } = styles

		return 	<Image
							source={require('../../assets/logo.png')}
							style={logo}
						/>
	}

	renderInput() {
		const { phone, password } = this.state
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
					autoCapitalize='none'
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
					secureTextEntry
					autoCapitalize='none'
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
						label={'Login'}
						onClick={this.onLogin}
						isLoading={this.state.isLoading}
					/>
				</View>

				<TouchableOpacity style={signUpButton} onPress={() => this.props.navigation.navigate('Register')}>
					<Text style={signUpText}>Do not have an account? <Text style={boldText}>Sign Up</Text></Text>
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
    marginTop: '10%',
	marginBottom: '11
	
	%'
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
