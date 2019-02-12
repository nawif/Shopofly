import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TitleWithIconAndDescription, ButtonWithIcon } from "./";
import Images from "../../assets/images";


export class AddressBox extends Component {
    
  renderHeader(){
    return (
      <View style={[styles.titleContainer,this.props.style]} >
        <View style={styles.titleWhiteSpace}/>
        <View style={styles.titleLine} />
        <Text style={styles.title} >{this.props.title}</Text>
        <View style={styles.titleLine} />

        <View style={styles.titleWhiteSpace} />
      </View>
    )
  }

  renderItems(){
    return (
      <View>
        <TitleWithIconAndDescription icon={Images.location} title="Address" subtitle="4043 Algamh Al Wadi." />
        <TitleWithIconAndDescription icon={Images.phone} title="Phone Number" subtitle="+966568484248" />
        <TitleWithIconAndDescription icon={Images.name} title="Name" subtitle="Osama Aloqaily" />
      </View>
    )
  }

  renderButtons(){
    return(
      <View style={styles.buttonsContainer} >
        <ButtonWithIcon icon={Images.edit} title={"Edit"} />
        <View style={styles.verticalLineBreak} />
        <ButtonWithIcon icon={Images.cancel} title={"Remove"} />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container} >
        {this.renderHeader()}
        {this.renderItems()}
        {this.renderButtons()}
      </View>
    )
  }
}

const styles ={

  container:{
    padding:20,
    alignSelf:'center',
    justifyContent:'space-evenly',
    borderRadius: 20,
    borderWidth: 2,
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
    // marginTop:30,
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
    // backgroundColor:'black',
    width:'100%',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'flex-end',
    marginTop:30,
    // marginBottom:30
  },
  dataContainer:{
    flex:3
  },
  verticalLineBreak:{
    height:'100%',
    width:2,
    backgroundColor:'#E2E2E2'
  },
  buttonTitle:{
    flex:1,
    textAlign:'center'
    // backgroundColor:'black'
  }
}