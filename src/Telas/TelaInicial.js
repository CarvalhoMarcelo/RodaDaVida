import React, { Component } from 'react';
import {View, Image} from 'react-native';
import estilos from '../Estilos/estilos';

export default class TelaInicial extends Component {
    render(){
        return(
            <>
                <View style={estilos.container}>
                    <View style={estilos.principal}>
                        <View>
                            <Image style={estilos.logotipo} source={require('../Images/LogoRodaDaVida.png')} />
                        </View>
                    </View>
                </View>
            </>
        )
    }
}