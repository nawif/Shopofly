import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import { MainContainer, SectionWithHeader,TextInput, GradientButton } from "../components";
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'
import * as API from '../API'

export class PersonalSettings extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    showAlert: false,
    alertMessage: ''
  }

  componentWillMount() {
    AsyncStorage.getItem('token')
    .then((token) => {
      this.loadPersonalInfo(token)
    })
    .catch((err) => console.log(err))
  }

  loadPersonalInfo(token) {
    API.getUserInfo(token)
    .then((response) => {
      const fullname = response.name ? response.name.split(" ") : ""

      const firstName = fullname[0]
      const lastName = fullname[1]

      const email = response.email ? response.email : ""

      this.setState({firstName, lastName, email})
    })
    .catch((err) => console.log(err))
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
    const { firstName, lastName, email } = this.state
    return (
      <MainContainer  isTransparent={true} >
        <SectionWithHeader header="Personal Information" >
            {this.renderTextField("First Name", firstName, (newText) => {
              this.setState({firstName: newText})
            })}

            {this.renderTextField("Last Name", lastName, (newText) => {
              this.setState({lastName: newText})
            })}

            {this.renderTextField("Email", email, (newText) => {
              this.setState({email: newText})
            })}
        </SectionWithHeader>
        <GradientButton isValid={true} label={"Save"} onClick={() => {
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
