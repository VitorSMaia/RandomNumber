import React, { useState } from 'react';
import { StyleSheet, Image, Button, View, SafeAreaView, Text, Alert } from 'react-native';
// import Estilo from './src/style/template'

export default props =>

{

    function gerarValor(min, max)
    {
        const fator = ( max - min ) + 1;
        return parseInt(Math.random() * fator) + min;
    }
    return (
        <>
            <Button 
                title="Random"
                onPress={ function() 
                    {
                        const n = gerarValor(props.min,props.max)
                        props.funcao(n)
                    }
                }
            />
        </>
    )
}