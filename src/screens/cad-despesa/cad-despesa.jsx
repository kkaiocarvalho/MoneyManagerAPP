import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONT_SIZE} from "../../constants/theme.js";
import {useState} from "react";
import icons from '../../constants/icons.js';
import {Picker} from '@react-native-picker/picker';

const CadDespesa = (props) => {

    const [id, setId] = useState(0);
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleSalvar = () => {
        // Salvar a despesa na API...

        props.navigation.navigate("home");
    }

    const handleExcluir = () => {
        // Excluir a despesa na API...
        
        props.navigation.navigate("home");
    }

    return (
        <View style={styles.container}> 
            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Valor</Text>
                <TextInput placeholder="0,00" style={styles.inputValor} defaultValue="" /*{valor.toString()}*/ keyboardType='decimal-pad'></TextInput>
            </View>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Descrição</Text>
                <TextInput placeholder="Ex: Aluguel" style={styles.inputText} defaultValue='' /*{descricao}*/ ></TextInput>
            </View>

            <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Categoria</Text>
                <View style={styles.inputPicker}>
                    <Picker selectedValue={categoria} onValueChange={(itemValue, itemIndex) => { setCategoria(itemValue);}}>
                        <Picker.Item label="Carro" value="Carro" />
                        <Picker.Item label="Casa" value="Casa" />
                        <Picker.Item label="Lazer" value="Lazer" />
                        <Picker.Item label="Mercado" value="Mercado" itemStyle={{padding: 0}} />
                        <Picker.Item label="Educação" value="Educação" />
                        <Picker.Item label="Viagem" value="Viagem" />
                    </Picker>
            </View>
                
            </View>

            <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn} onPress={handleSalvar}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.containerDelete}>
            <TouchableOpacity onPress={handleExcluir}>
                <Image source={icons.remove} style={styles.btnDelete} />
            </TouchableOpacity>
        </View>
        </View>
)};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,        
        padding: 20,
        marginTop: 50
    },
    containerField:{
        marginBottom: 40
    },
    inputLabel: {
        fontSize: FONT_SIZE.xsm,
        color: COLORS.medium_gray        
    },
    inputValor: {
        fontSize: FONT_SIZE.xl,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
        padding: 5,
        fontWeight: "bold"
    },
    inputText: {
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
        padding: 5
    },
    containerBtn: {
        alignItems: "flex-end"
    },
    btn:{
        backgroundColor: COLORS.blue,
        padding: 10,
        borderRadius: 6,
        width: 150,        
    },
    btnText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    },
    containerDelete: {        
        alignItems: "center",
        marginTop: 50
    },
    btnDelete: {        
        width: 50,
        height: 50
    },
    inputPicker: {
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2        
    }
})

export default CadDespesa;