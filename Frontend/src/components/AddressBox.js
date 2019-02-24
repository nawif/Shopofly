import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { TitleWithIconAndDescription, ButtonWithIcon } from "./";
import Images from "../../assets/images";
import { LinearGradient } from 'expo'
import * as Global from '../Global'


export class AddressBox extends Component {
    state={
      isSelected:false,
      value:0
    }

    renderGradient(){
        return(
            <LinearGradient
            colors={[Global.FIRST_COLOR,Global.SECOND_COLOR]}
            start={[1.0, 0]}
            end={[0.0, 0]}
            style={styles.circleStyle} />
        )
    }
    
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
        <TitleWithIconAndDescription icon={Images.location} title="Address" subtitle={this.props.address} />
        <TitleWithIconAndDescription icon={Images.phone} title="Phone Number" subtitle={this.props.phone} />
        <TitleWithIconAndDescription icon={Images.name} title="Name" subtitle={this.props.name} />
      </View>
    )
  }

  renderButtons(){
    return(
      <View style={styles.buttonsContainer} >
        <ButtonWithIcon onPress={this.props.editOnPress} icon={Images.edit} title={"Edit"} />
        <View style={styles.verticalLineBreak} />
        <ButtonWithIcon onPress={this.props.removeOnPress} icon={Images.cancel} title={"Remove"} />
      </View>
    )
  }
  _handelPress = () =>{
    if(this.props.canBeSelected ){
      this.setState({isSelected: !this.state.isSelected})
    }
  }
  render() {
    return (
        <TouchableWithoutFeedback onPress={this._handelPress}>
          <View style={{alignItems:'center',justifyContent:'center',margin:5,alignSelf:'center',}} >
            {this.state.isSelected?this.renderGradient():null}
            <View style={styles.container} >
              {this.renderHeader()}
              {this.renderItems()}
              {this.props.hasOptions?this.renderButtons():null}
            </View>
          </View>
        </TouchableWithoutFeedback>
    )
  }
}

const styles ={

  container:{
    padding:20,
    margin:5,
    alignSelf:'center',
    justifyContent:'space-evenly',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#CFCFCF',
    width:'88%',
    backgroundColor:'white'
  },
  titleContainer:{
    flexDirection:'row',
    // marginTop:20,
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
    // marginTop:10,
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
  },
  circleStyle:{
    position:'absolute',
    height:'98%',
    width:'98%',
    borderRadius: 33,
    alignSelf:'center',

  }
}