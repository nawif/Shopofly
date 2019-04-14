import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MainContainer, SectionWithHeader,TextInput, GradientButton } from "../components";
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'

export class PersonalSettings extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
  }

  componentWillMount() {
    AsyncStorage.getItem('token')
    .then((token) => {
      API.getUserInfo(token)
      .then((response) => {
        debugger;
      })
      .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
  }

  renderTextField(label, notifyState){
    return(
      <TextInput
        textColor="#2B2B2B"
        baseColor="#858B8C"
        tintColor={Global.SECOND_COLOR}
        label={label}
        onChangeText={(newText) => notifyState(newText)}
      />
    )
  }

  render() {
    return (
      <MainContainer  isTransparent={true} >
        <SectionWithHeader header="Personal Information" >
            {this.renderTextField("First Name", (newText) => {
              this.setState({firstName: newText})
            })}

            {this.renderTextField("Last Name", (newText) => {
              this.setState({lastName: newText})
            })}

            {this.renderTextField("Email", (newText) => {
              this.setState({email: newText})
            })}
        </SectionWithHeader>
        <GradientButton isValid={true} label={"Save"} />
      </MainContainer>
    )
  }
}
