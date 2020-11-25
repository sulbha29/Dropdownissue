import React,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import {DropDownPicker} from 'react-native-dropdown-picker' 
export default class Requestscreen extends Component{
    constructor(){
        super();
        this.state={
            dropdown:"",
            details:"",
            
        }
    }
    render(){
        return(
            <View>
                <DropDownPicker 
                items={[
                    {label: "Clothes"},
                    {label: "books"},
                    {label: "stationary"},

                ]}

                value={this.state.dropdown}
                containerStyle={{height:40}}
                itemStyle={{justifyContent:'flex-start'}}
                onChangeItem={item=> this.setState({dropdown:item.value})}
                />
                <TextInput placeholder="More details" onChangeText={(text)=>{
                    this.setState({text:this.state.details})
                }}/>
                <TouchableOpacity onPress={()=>{
                  
                }}><Text>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}