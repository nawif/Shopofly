import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MainContainer, SectionWithHeader,TextInput, GradientButton } from "../components";
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'

export class PersonalSettings extends Component {

    renderTextField(label){
        return(
            <TextInput
                textColor="#2B2B2B"
                baseColor="#858B8C"
                tintColor={Global.SECOND_COLOR}
                label={label}/>
        )
    }
  render() {
    return (
      <MainContainer  isTransparent={true} >
        <SectionWithHeader header="Personal Information" >
            {this.renderTextField("First Name")}
            {this.renderTextField("Last Name")}
            {this.renderTextField("Email")}
        </SectionWithHeader>
        <GradientButton isValid={true} label={"Save"} />
      </MainContainer>
    )
  }
}