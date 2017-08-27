import React, {Component} from 'react';
import{
    FlatList,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

const DATA_LIST = [
    { nome: "Eu sou Douglas" },
    { nome: "Eu nao sou Douglas" },
    { nome: "Douglas" },
    { nome: "Gustavo" },
    { nome: "Marcelo" },
        
]

class ListScreen extends Component{

    onItemPress = (item) => {
        console.log("Clicou item:");
        console.log(item);
        alert("Clicou no item:" +item.nome);

    }

    renderItem = (record) => {
        const { item, index} = record;
        return(
            <TouchableOpacity
             onPress={() => this.onItemPress(item)}>

            <View style={{
                backgroundColor: '#FFF',
                marginHorizontal: 16,
                marginVertical: 8,
                padding: 16,
                borderRadius: 5,
                elevation: 4,
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowColor: '#333'
            }}>
                <Text>{item.nome}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    render(){
        return (

            <FlatList
            data={DATA_LIST}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.nome}//funcao keyextrator vai chamar e dizer quem e a chave do objeto
            />
        )
    }
}

export default ListScreen;