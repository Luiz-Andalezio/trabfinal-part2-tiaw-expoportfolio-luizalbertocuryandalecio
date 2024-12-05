import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FamiliaAmigosHobby = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>Família, Amigos e Hobby</Text>
                <Text style={styles.description}>Aqui eu compartilho um pouco dos meus gostos e relações pessoais... mas nem tanto.</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Família</Text>
                <Text style={styles.text}>Sou muito feliz como filho único, não possuo muitas fotos com meus pais, mas podem apostar que possuo uma família muito linda! ❤️</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Amigos</Text>
                <Text style={styles.text}>Tenho muitos amigos por aí, porém, aqui destaco meus amigos na faculdade! Pessoas mais maduras, entretanto, não perdem a essência de uma boa turma de estudantes.</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Hobby</Text>
                <Text style={styles.text}>Como um bom "nerd", meus amores são jogar e consumir culturas do mundo geek. Músicas de qualquer natureza também me agradam bastante, sou muito eclético! 😁</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    section: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6200ea',
        marginBottom: 4,
    },
    description: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 8,
    },
});

export default FamiliaAmigosHobby;
