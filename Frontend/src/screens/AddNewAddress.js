import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MainContainer, SectionWithHeader,TextInput } from "../components";
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'

export class AddNewAddress extends Component {

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
        <SectionWithHeader header="LOCATION INFORMATION" >
            {this.renderTextField("Address 1")}
            {this.renderTextField("Address 2")}
            {this.renderTextField("City")}
            {this.renderTextField("Label")}
        </SectionWithHeader>
        <SectionWithHeader header="LOCATION INFORMATION" >
            {this.renderTextField("First Name")}
            {this.renderTextField("Last")}
            {this.renderTextField("City")}
        </SectionWithHeader>
      </MainContainer>
    )
  }
}