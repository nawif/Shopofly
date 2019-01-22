import React, { Component } from 'react'
import { InputSection, TextInput } from './'

import * as Utility from '../Utility.js'
import * as Global from '../Global.js'

export default class RegisterFormInputs extends Component {
		state = {
			isPhoneValid: true,
			isPassValid: true,
			isConfirmValid: true
		}

		render() {
			const { phone, password, confirmPassword } = this.props

			return (
				<InputSection>
					<TextInput
						label={'Phone Number'}
						characterRestriction={Global.MAX_PHONE_LENGTH}
						value={phone}
						onChangeText={this.props.onChangePhone}
						onEndEditing={(e) => {
							this.setState({
								isPhoneValid: Utility.validatePhone(e.nativeEvent.text)
							})
						}}
						error={!this.state.isPhoneValid ? 'Oh no! Please enter a valid phone number.' : null}
					/>

					<TextInput
						label={'Password'}
						characterRestriction={Global.MAX_PASSWORD_LENGTH}
						value={password}
						onChangeText={this.props.onChangePassword}
						onEndEditing={(e) => {
							this.setState({
								isPassValid: Utility.validatePassword(e.nativeEvent.text)
							})
						}}
						secureTextEntry
						autoCapitalize='none'
						error={!this.state.isPassValid ? 'Hold up, this field requiers at least 8 characters.' : null}
					/>

					<TextInput
						label={'Confirm Password'}
						characterRestriction={Global.MAX_PASSWORD_LENGTH}
						value={confirmPassword}
						onChangeText={this.props.onChangeConfirmPassword}
						onEndEditing={(e) => {
							this.setState({
								isConfirmValid: Utility.validateConfirm(password, e.nativeEvent.text)
							})
						}}
						secureTextEntry
						autoCapitalize='none'
						error={!this.state.isConfirmValid ? 'The password and confirmation aren\'t the same.' : null}
					/>
				</InputSection>
			)
		}
}

export { RegisterFormInputs }
