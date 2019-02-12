import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TitleWithIconAndDescription } from "../components";
import Images from "../../assets/images";

export class AddressBook extends Component {
  renderHeader(){
    return (
      <View style={styles.titleContainer} >
        <View style={styles.titleWhiteSpace}/>

        <View style={styles.titleLine} />
        <Text style={styles.title} >Home</Text>
        <View style={styles.titleLine} />

        <View style={styles.titleWhiteSpace} />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container} >
        {this.renderHeader()}
        <TitleWithIconAndDescription icon={Images.location} title="Address" subtitle="4043 Algamh Al Wadi." />
        <TitleWithIconAndDescription icon={Images.phone} title="Phone Number" subtitle="+966568484248" />
        <TitleWithIconAndDescription icon={Images.name} title="Name" subtitle="Osama Aloqaily" />
        
        <View style={styles.buttonsContainer} >
          <Text style={styles.buttonTitle} >Edit</Text>
          <View style={styles.verticalLineBreak} />
          <Text style={styles.buttonTitle} >Edit</Text>
        </View>
      
      </View>
    )
  }
}

const styles ={

  container:{
    marginTop:50,
    alignSelf:'center',
    justifyContent:'space-evenly',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#CFCFCF',
    width:'90%'
  },
  titleContainer:{
    flexDirection:'row',
    marginTop:20,
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    marginBottom:20,
    marginTop:30,
  },
  titleLine:{
    flex:3,
    height:2,
    backgroundColor:'#E2E2E2'
  },
  title:{
    flex:3,
    color:'#535353',
    fontFamily:'Cairo-Bold',
    textAlign:'center'
  },
  titleWhiteSpace:{
    flex:1
  },
  buttonsContainer:{
    backgroundColor:'black',
    flex:1,
    width:'100%',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    marginTop:50,
    marginBottom:30
  },
  dataContainer:{
    flex:3
  },
  verticalLineBreak:{
    flex:1,
    width:5,
    backgroundColor:'black'
  },
  buttonTitle:{
    flex:1,
    // backgroundColor:'black'
  }
}