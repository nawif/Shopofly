import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { MainContainer, SectionWithHeader,TextInput, GradientButton } from "../components";
import AwesomeAlert from 'react-native-awesome-alerts'
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'
import * as API from '../API'

export class SecuritySettings extends Component {
  state = {
    oldPassword: '',
    newPassword: '',
    showAlert: false,
    alertMessage: '',
  }

  renderTextField(label, currentText, notifyState){
    return(
      <TextInput
        textColor={"#2B2B2B"}
        baseColor={"#858B8C"}
        tintColor={Global.SECOND_COLOR}
        value={currentText}
        label={label}
        onChangeText={notifyState}
        secureTextEntry
      />
    )
  }

  renderAlert() {
    return <AwesomeAlert
      show={this.state.showAlert}
      message={this.state.alertMessage}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showConfirmButton={true}
      confirmButtonColor="#448AFF"
      confirmText="Okay"
      onConfirmPressed={() => this.hideAlert()}
    />
  }

  showAlert(message) {
    this.setState({
      showAlert: true,
      alertMessage: message
    })
  }

  hideAlert() {
    this.setState({
      showAlert: false,
      alertMessage: ''
    })
  }

  render() {
    const { oldPassword, newPassword } = this.state

    return (
      <MainContainer  isTransparent={true} >
        <SectionWithHeader header="Security Information" >
            {this.renderTextField("Current Password", oldPassword, (newText) => {
              this.setState({oldPassword: newText})
            })}

            {this.renderTextField("New Password", newPassword, (newText) => {
              this.setState({newPassword: newText})
            })}
        </SectionWithHeader>
        <GradientButton isValid={true} label={"Change Password"} onClick={() => {
          AsyncStorage.getItem('token')
          .then((token) => {
            API.updateUserInfo(this.state, token)
            .then((response) => {
              this.showAlert(response.message)
            })
            .catch((err) => this.showAlert(err.message))
          })
        }}/>

        {this.renderAlert()}
      </MainContainer>
    )
  }
}
