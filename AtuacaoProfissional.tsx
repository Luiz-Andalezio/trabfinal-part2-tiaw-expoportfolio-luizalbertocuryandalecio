// src/components/AtuacaoProfissional.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image, TouchableOpacity } from 'react-native';

const AtuacaoProfissional = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>Experiências Profissionais</Text>
                <Text style={styles.description}>Nesta seção, listo minhas experiências no meio profissional.</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Estágio em TI - 120h - Completo em 2022</Text>
                <Text style={styles.text}>UFTM/Departamento de Tecnologia da Informação - Área de Micro Informática.</Text>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    section: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    subtitle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6200ea',
        marginBottom: 4,
    },
    description: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#333333',
        marginBottom: 8,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#333333',
    },
});

export default AtuacaoProfissional;
