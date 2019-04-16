import React, { Component } from 'react'
import { Text, View, ScrollView, AsyncStorage } from 'react-native'
import { MainContainer, SectionWithHeader,TextInput, GradientButton } from "../components";
import AwesomeAlert from 'react-native-awesome-alerts'
import * as Global from '../Global.js'
import * as API from '../API'

export class AddNewAddress extends Component {
  state = {
    Address1: '',
    Address2: '',
    City: '',
    Label:'',
    FirstName:'',
    LastName:'',
    PhoneNumber:'',
    showAlert: false,
    alertMessage: '',
  }
  componentWillMount() {
    AsyncStorage.getItem('token')
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
    const { country, city, district, street, house_number, Label, FirstName, LastName, PhoneNumber } = this.state
    return (
      <MainContainer  isTransparent={true} >
        <ScrollView>
          <SectionWithHeader header="LOCATION INFORMATION" >
              {this.renderTextField("country", country, (newText) => {
                this.setState({country: newText})
              })}
              {this.renderTextField("City", city, (newText) => {
                this.setState({city: newText})
              })}
              {this.renderTextField("District", district, (newText) => {
                this.setState({district: newText})
              })}
              {this.renderTextField("Street", street, (newText) => {
                this.setState({street: newText})
              })}
              {this.renderTextField("House Number", house_number, (newText) => {
                this.setState({house_number: newText})
              })}
              {this.renderTextField("Label", Label, (newText) => {
                this.setState({Label: newText})
              })}
          </SectionWithHeader>
          <SectionWithHeader header="PERSONAL INFORMATION" >
              {this.renderTextField("First Name", FirstName, (newText) => {
                this.setState({FirstName: newText})
              })}
              {this.renderTextField("Last Name", LastName, (newText) => {
                this.setState({LastName: newText})
              })}
              {this.renderTextField("Phone Number", PhoneNumber, (newText) => {
                this.setState({PhoneNumber: newText})
              })}
          </SectionWithHeader>
          <GradientButton isValid={true} label={"ADD ADDRESS"} onClick={() => {
            AsyncStorage.getItem('token')
            .then((token) => {
              API.addnewaddress(this.state, token)
              .then((response) => {
                this.showAlert(response.message)
              })
              .catch((err) => this.showAlert(err.message))
            })
          }} />
          {this.renderAlert()}
        </ScrollView>
      </MainContainer>
    )
  }
}
