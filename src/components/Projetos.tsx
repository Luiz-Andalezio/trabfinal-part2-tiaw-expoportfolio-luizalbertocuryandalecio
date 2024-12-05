import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Linking } from 'react-native';
import Projeto from '../models/projeto';

const projetos = [
    new Projeto('Meu GitHub com meus projetos', 'Destaco os meus jogos — Asteroids 🚀 e Snake 🐍 — feitos em C com a biblioteca Raylib! Clique aqui para visitar o meu Git.'),
    new Projeto('Uma calculadora usando TypeScript e React Native', '')
];

const Projetos = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Projetos</Text>
            <View style={styles.section}>
                <Text>Aqui destaco alguns dos projetos mais relevantes em que fiz.</Text>
            </View>
            {projetos.map((projeto, index) => (
                <View key={index} style={styles.section}>
                    <Text style={styles.subtitle}>{projeto.titulo}</Text>
                    {projeto.descricao.includes('Clique aqui para visitar o meu Git') ? (
                        <Text>
                            {projeto.descricao.split('Clique')[0]}
                            <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/Luiz-Andalezio')}>
                                Clique aqui
                            </Text>
                            {projeto.descricao.split('para visitar o meu Git')[1]}
                        </Text>
                    ) : (
                        <Text>{projeto.descricao}</Text>
                    )}
                    {projeto.titulo.includes('calculadora') && <Calculadora />}
                </View>
            ))}
        </ScrollView>
    );
};

const Calculadora = () => {
    const [display, setDisplay] = React.useState('');

    const addToDisplay = (value: string) => {
        setDisplay(display + value);
    };

    const calculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch {
            setDisplay('Erro');
        }
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    const calculateSquareRoot = () => {
        try {
            setDisplay(Math.sqrt(eval(display)).toString());
        } catch {
            setDisplay('Erro');
        }
    };

    const calculatePercentage = () => {
        try {
            setDisplay((eval(display) / 100).toString());
        } catch {
            setDisplay('Erro');
        }
    };

    const renderButton = (value: string, onPress: () => void) => (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.calculatorContainer}>
            <TextInput style={styles.display} value={display} editable={false} />
            <View style={styles.row}>
                {renderButton('C', clearDisplay)}
                {renderButton('√', calculateSquareRoot)}
                {renderButton('%', calculatePercentage)}
                {renderButton('/', () => addToDisplay('/'))}
            </View>
            <View style={styles.row}>
                {renderButton('7', () => addToDisplay('7'))}
                {renderButton('8', () => addToDisplay('8'))}
                {renderButton('9', () => addToDisplay('9'))}
                {renderButton('*', () => addToDisplay('*'))}
            </View>
            <View style={styles.row}>
                {renderButton('4', () => addToDisplay('4'))}
                {renderButton('5', () => addToDisplay('5'))}
                {renderButton('6', () => addToDisplay('6'))}
                {renderButton('-', () => addToDisplay('-'))}
            </View>
            <View style={styles.row}>
                {renderButton('1', () => addToDisplay('1'))}
                {renderButton('2', () => addToDisplay('2'))}
                {renderButton('3', () => addToDisplay('3'))}
                {renderButton('+', () => addToDisplay('+'))}
            </View>
            <View style={styles.row}>
                {renderButton('0', () => addToDisplay('0'))}
                {renderButton('.', () => addToDisplay('.'))}
                {renderButton('=', calculate)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    section: {
        marginBottom: 16,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6200ea',
        marginBottom: 8,
    },
    link: {
        color: '#0000EE',
        textDecorationLine: 'underline',
    },
    calculatorContainer: {
        width: '100%',
        alignItems: 'center',
    },
    display: {
        width: '100%',
        fontSize: 32,
        borderWidth: 1,
        padding: 8,
        marginBottom: 8,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 8,
    },
    button: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        backgroundColor: '#b4b4b4',
    },
    buttonText: {
        fontSize: 18,
    },
});

export default Projetos;
