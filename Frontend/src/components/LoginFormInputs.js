// <InputSection>
//   <TextInput
//     label={'Phone Number'}
//     characterRestriction={10}
//     value={phone}
//     onChangeText={(phone) => this.setState({ phone })}
//     autoCapitalize='none'
//   />
//
//   <TextInput
//     label={'Password'}
//     characterRestriction={15}
//     value={password}
//     onChangeText={(password) => this.setState({ password })}
//     secureTextEntry
//     autoCapitalize='none'
//   />
// </InputSection>
import React, { Component } from 'react'
import { InputSection, TextInput } from './'
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'

export default class LoginFormInputs extends Component {
		state = {
			isPhoneValid: true,
			isPassValid: true
		}

		render() {
			const { phone, password } = this.props

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
				</InputSection>
			)
		}
}

export { LoginFormInputs }
