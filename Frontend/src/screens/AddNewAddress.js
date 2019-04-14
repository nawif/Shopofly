import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { MainContainer, SectionWithHeader,TextInput, GradientButton } from "../components";
import * as Utility from '../Utility.js'
import * as Global from '../Global.js'

export class AddNewAddress extends Component {

    renderTextField(label){
        return(
            <TextInput
                textColor="#2B2B2B"
                baseColor="#858B8C"
                tintColor={Global.SECOND_COLOR}
                label={label}
            />
        )
    }
  render() {
    return (
      <MainContainer  isTransparent={true} >
        <ScrollView>
          <SectionWithHeader header="LOCATION INFORMATION" >
              {this.renderTextField("Address 1")}
              {this.renderTextField("Address 2")}
              {this.renderTextField("City")}
              {this.renderTextField("Label")}
          </SectionWithHeader>
          <SectionWithHeader header="PERSONAL INFORMATION" >
              {this.renderTextField("First Name")}
              {this.renderTextField("Last Name")}
              {this.renderTextField("Phone Number")}
          </SectionWithHeader>
          <GradientButton isValid={true} label={"ADD ADDRESS"} />
        </ScrollView>
      </MainContainer>
    )
  }
}
