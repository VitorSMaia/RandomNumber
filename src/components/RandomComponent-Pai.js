import React, { useState } from 'react';
import { StyleSheet, Image, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import RandomFilho from './RandomComponent';
import Estilo from '../style/template';

export default () => 
{
    const [num, setNumero] = useState(0)

    function exibeValor(numero)
    {
        setNumero(numero)
    }    


  return (
    <>
      <View style={Estilo.container}>
        <View style={Estilo.header}>
          <Text>Voltar</Text>
          <Text>Menu</Text>
          <Text>Abrir</Text>
        </View>
        <Image source={require('../assets/screenApk2.jpg')}/>
        <View style={Estilo.box1}>
          <Text style={Estilo.valor}>{ num }</Text>
        </View>
        <View style={Estilo.boxButon}>
          <Button style={Estilo.Buton}
            title="-"
          />
          <RandomFilho style={Estilo.Buton}
              min={1}
              max={100}
              funcao={exibeValor}
          />
          <Button style={Estilo.Buton}
            title="+"
          />
        </View>
      </View>
    </>
  )
}