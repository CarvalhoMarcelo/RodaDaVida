import React, { Component, useState } from 'react'
import { Slider, Picker, StatusBar, StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import { Container, Header, Title, Content, Text, Icon, Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left } from 'native-base'

export default class Cadastrar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        name: null,
        mobile: null,
        email:null,
        msg: null,
        isSubmited: false, 
        sliderValue: 15,
      };
    }


    


//   postMsg = (name, mobile, email, msg, nameClear, mobileClear, emailClear, msgClear) => {
//     if(this.state.msg!=null){ 
//       fetch('https://contact-form-db-133.firebaseio.com/contacts.json', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           "name": name,
//           "mobile": mobile,
//           "email": email,
//           "msg": msg,
//         }),
//       })
//       .then((response) => response.json())
//       .then((responseData) => {
//               if(responseData.name != null ){
//                 this.refs[nameClear].setNativeProps({text: ''});
//                 this.refs[mobileClear].setNativeProps({text: ''});
//                 this.refs[emailClear].setNativeProps({text: ''});
//                 this.refs[msgClear].setNativeProps({text: ''});
//                 this.setState({
//                     name: null,
//                     mobile: null,
//                     email:null,
//                     msg: null,
//                     isSubmited: true,
//                   })              
//               }
//               else{
//               Alert.alert(
//                 'Oops !',
//                 'Something went wrong',
//                 [
//                   {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//                 ],
//                 { cancelable: false }
//               )
//             }

//       })
//       .done();
//     }
//       else{
//         Alert.alert(
//           'Oops !',
//           'Press SUBMIT button after entering your Message.',
//           [
//             {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//           ],
//           { cancelable: false }
//         )        
//       }
    
//   };

//     _togglePostCard(){
//         this.setState({
//             isSubmited: false
//         })
//     }



// componentDidMount() {
//     // if the component is using the optional `value` prop, the parent
//     // has the abililty to both set the initial value and also update it
//     setTimeout(() => {
//         this.setState({
//             gradAtual: 'Escravo',
//         });
//     }, 1000);

//     // parent can also update the `items` prop
//     setTimeout(() => {
//         this.setState({
//             graduacao: this.state.graduacao.concat([{ value: 'Fugitivo', label: 'Fugitivo' }]),
//         });
//     }, 2000);
// }




    render() {
        return (           
            <Container>
                <Header androidStatusBarColor="#1362af" style={{ backgroundColor: '#1976D2' }}>
                    <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                        <Title>Capoeirista</Title>
                    </Body>
                </Header>
                <Content>
                    <Card style={styles.postCard}>
                        {this.state.isSubmited 
                        ?
                            <View>
                                <CardItem>
                                    <Item>
                                        <Icon active name="ios-checkmark-circle" style={{fontSize: 30, color: '#4CAF50', marginLeft:5, marginRight:10}} />
                                        <Text style = {{flex:1}}>Aluno cadastrado com sucesso!</Text>
                                    </Item>
                                </CardItem>
                                <CardItem>
                                    <Left></Left>
                                    <Body>
                                        {/* <TouchableOpacity success onPress={() => this._togglePostCard()}> */}
                                        <TouchableOpacity success onPress={() => this.setState({isSubmited:false})}>
                                            <Icon active name="refresh" style={{fontSize: 40, color: '#64DD17', marginLeft:10}} />
                                        </TouchableOpacity>
                                    </Body>
                                    <Right></Right>
                                </CardItem>
                            </View>
                        :
                            <View>
                                <CardItem>
                                    <Item>
                                        <Input placeholder='Nome' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
                                    </Item>
                                </CardItem>
                                <CardItem>
                                    <Text>Graduacao:</Text>
                                    <Picker style={styles.pickerStyle}
                                        selectedValue={this.state.language}  
                                        onValueChange={(itemValue, itemPosition) =>  
                                        this.setState({language: itemValue, choosenIndex: itemPosition})}>  
                                        <Picker.Item label="Escravo" value="escravo" />  
                                        <Picker.Item label="Fugitivo" value="fugitivo" />  
                                        <Picker.Item label="Quilombola" value="quilombola" />  
                                    </Picker>  
                                </CardItem>
                                <CardItem>
                                    <Item>
                                        <Text style={styles.est}>
                                            Evolucao nessa graduacao: {this.state.sliderValue}% 
                                        </Text>
                                    </Item>
                                </CardItem>                                    
                                <CardItem>                                
                                    <Item>
                                        <Slider style={styles.estiloText}
                                            maximumValue={100}
                                            minimumValue={0}
                                            step={1}
                                            value={this.state.sliderValue}
                                            onValueChange={sliderValue => this.setState({sliderValue})}
                                        />    
                                    </Item>                                                                            
                                </CardItem>

                                <CardItem>
                                    <Item>
                                        <Input placeholder='Celular' onChangeText={(mobile) => this.setState({mobile})} ref={'mobileClear'} keyboardType = {'phone-pad'}/>
                                    </Item>
                                </CardItem>
                                <CardItem>
                                    <Item>
                                        <Input placeholder='Email' onChangeText={(email) => this.setState({email})} ref={'emailClear'} keyboardType = {'email-address'}/>
                                    </Item>
                                </CardItem>
                                <CardItem>
                                    <Left></Left>
                                    <Body>
                                        {/* <Button success onPress={() => this.postMsg(this.state.name, this.state.mobile, this.state.email, this.state.msg, 'nameClear', 'mobileClear', 'emailClear', 'msgClear')}> */}
                                        <Button success onPress={() => this.setState({isSubmited:true})}>
                                            <Text>Gravar</Text>
                                        </Button>
                                    </Body>
                                    <Right></Right>
                                </CardItem>
                            </View>
                        }
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  loading:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: '#1C97F7',
  },
  alertText: {
    fontSize:12,
    color: '#ffffff',
  },
  conCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
  },
  conCardItem: {
    marginLeft: 5,
    marginTop:5,
  },
  conDetails: {
    fontSize: 15,
    color: 'black',
    marginLeft: 5,
  },
  postCard: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,     
  },

  pickerStyle:{  
    // height: 150,  
    width: "80%",  
    // color: '#344953',  
    // justifyContent: 'center',  
}  ,

estiloText: {
    width: '100%',
},

estiloSlide:{
    width: '100%',
}

});

