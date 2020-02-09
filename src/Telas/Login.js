
import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import estilos from '../Estilos/style';

export default class Login extends Component {    
    render() {                
        const {navigate} = this.props.navigation;
        return (
            <>
            <View style={estilos.container}>
                <View style={estilos.principal}>
                    <Image style={estilos.logotipo} source={require('../Images/LogoRodaDaVida.png')} />

                    {/* <Text style={estilos.textoCabecalho}>
                            Roda da Vida
                    </Text>                         */}

                    <View style={estilos.formulario}>
                        <TextInput placeholderTextColor="grey" style={estilos.campoTXT} placeholder="Usuario"></TextInput>
                        <TextInput placeholderTextColor="grey" style={estilos.campoTXT} placeholder="Senha" secureTextEntry></TextInput>
                        <TouchableOpacity style={estilos.botaoLogin}>
                            <Text style={estilos.textoLogin} 
                                onPress = {() => {navigate('Cadastro')}}>
                                Entrar</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
            </>
        );
    }
};