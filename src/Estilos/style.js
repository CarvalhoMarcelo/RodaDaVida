import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#d6faeb',
        backgroundColor: '#ffffff',
        padding: 10
    },
    principal: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
        // backgroundColor: 'red',
    },
    formulario: {
        width: '100%',
        paddingTop: '7%',
        // height: '100%',
        // justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logotipo: {
        width: 200,
        height: 200,
        marginVertical: 15,
        borderRadius: 25,
    },
    campoTXT: {
        height: 50,
        width: '90%',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        fontSize: 20,
        // backgroundColor: 'blue',
        color: 'white',
        opacity: 0.8,
        borderRadius: 25,
        borderColor: '#90b6ea',
        borderWidth: 3,


    },
    botaoLogin: {

        height: 50,
        width: '90%',
        marginTop: '20%',
        padding: 5,
        // backgroundColor: '#dc9872',
        borderRadius: 25,
        borderColor: '#90b6ea',
        borderWidth: 3,
        alignItems: 'center',

    },
    textoLogin: {
        color: '#90b6ea',
        fontSize: 25,
    },
    textoCabecalho: {
        color: '#dc9872',
        textAlign: 'center',
        fontSize: 30,
    },
    corBotoes: {
        backgroundColor: '#dc9872',
    },

});