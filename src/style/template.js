import { StyleSheet } from "react-native";

const width_proportion = '10%';
const height_proportion = '10%';

export default StyleSheet.create({

    container: 
    {
        flex: 1,
        backgroundColor: '#CCC',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // flexDirection:  'row',
        // // alignItems:'center',
        // // justifyContent: 'space-around',
        // alignContent: 'space-between',
        // flexWrap: 'wrap'

    },
    box1:
    {
        margin: 10,
        flexDirection:  'row',
        // backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-around',
        // fontSize: 30,
        // maxHeight:  'column',
        // flex: 1,
        // height: 100,
        // minWidth: 100,
        // paddingVertical: 10,
    },
    valor:
    {
        fontSize: 75,
        // maxHeight:  'column',
        // flexDirection:  'row',
        // flex: 1,
        // height: 100,
        // minWidth: 100,
        // backgroundColor: '#FFF',
        // // borderWidth: 5,
        // paddingHorizontal: 20,
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // paddingVertical: 10,
    },
    boxButon:
    {
        flexDirection:  'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
        margin:10,
        // backgroundColor: '#FFF',
        // maxHeight:  'column',
        // flex: 1,
        // height: 100,
        // minWidth: 100,
        // borderWidth: 5,
        // flexWrap: 'wrap',
        // alignContent: 'space-around',
    },
    Buton:
    {
        paddingHorizontal: 20,
        // paddingVertical: 100,
        // maxHeight:  'column',
        // flex: 1,
        // alignItems: 'center',
        // ustifyContent: 'center',
        // height: height_proportion,
        // width: width_proportion,
        // // backgroundColor: '#666',
        // // borderWidth: 5,
        // margin: 10
    },
    box12:
    {
        // flexDirection:  'row',
        // flex: 1,
        // height: 200,
        // minWidth: 100,
        // backgroundColor: '#98eb34',
        // borderWidth: 5,
        // margin: 10
    },
    box:
    {
        // flexDirection:  'row',
        // flex: 1,
        // // alignSelf: 1,
        // height: 100,
        // width: 100,
        // backgroundColor: '#666',
        // borderWidth: 5,
        // margin: 10
    },
    header:
    {
        height: 60,
        backgroundColor:'#FFF',
        paddingHorizontal: 20,
        paddingTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // alignSelf: 'flex-start',
    },
    innerText:
    {
        // alignSelf: 'center',
        // // height: 60,
        // // backgroundColor: '#CCC',
        // color: 'red',
        // fontSize: 100,
        // flex: 1,
        // justifyContent: 'space-around',
        // margin: 10,
        // backgroundColor:'#FFF',
        // paddingHorizontal: 20,
        // paddingTop:20,
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    }

})