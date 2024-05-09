import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONT_SIZE} from '../../constants/theme'


const Despesa = (props) => {
    return(
        <TouchableOpacity onPress={() => props.onClick(0)}>

        <View style={styles.despesa}>
            <View style={styles.containerIcon}>
                <Image source={{uri: props.icon}} style={styles.icon}/>
            </View>

            <View style={styles.containerCategoria}>
                <Text style={styles.despesaCategoria}>{props.categoria}</Text>
                <Text style={styles.despesaDescricao}>{props.descricao}</Text>
            </View>

            <View style={styles.containerValor}>
                <Text style={styles.despesaValor}>{props.valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Text>
            </View>

        </View>
        </TouchableOpacity>
    )
}

export default Despesa;

const styles = StyleSheet.create({
    despesa: {
        width: "100%",
        backgroundColor: COLORS.gray,       
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon:{
        width: 35,
        height: 35
    },
    containerIcon:{
        flex:3
    },
    containerCategoria:{
        flex:10
    },
    containerValor:{
        flex:4
    },
    despesaCategoria:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold"
    },
    despesaDescricao:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
    },
    despesaValor:{
        fontSize: FONT_SIZE.lg,
        color: COLORS.dark_gray,
        fontWeight: "bold",
        textAlign: "right"
    },
})