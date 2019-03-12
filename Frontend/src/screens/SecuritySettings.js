import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MainContainer, SectionWithHeader,TextInput, GradientButton } from "../components";
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'

export class SecuritySettings extends Component {

    renderTextField(label){
        return(
            <TextInput
                textColor="#2B2B2B"
                baseColor="#858B8C"
                tintColor={Global.SECOND_COLOR}
                label={label}
                secureTextEntry
                />
                
        )
    }
  render() {
    return (
      <MainContainer  isTransparent={true} >
        <SectionWithHeader header="Security Information" >
            {this.renderTextField("Current Password")}
            {this.renderTextField("New Password")}
        </SectionWithHeader>
        <GradientButton isValid={true} label={"Change Password"} />
      </MainContainer>
    )
  }
}