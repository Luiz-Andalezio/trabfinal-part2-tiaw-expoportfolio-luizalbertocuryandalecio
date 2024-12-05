import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image, TouchableOpacity } from 'react-native';
import Pessoa from '../models/pessoa';

const pessoa = new Pessoa(
    'Luiz Alberto Cury Andalécio',
    'luizcury19@gmail.com',
    20,
    'Mais ou menos 1,82 😮',
    'Uberaba-MG 🔺',
    'Melhor não falar... 💀',
    'Análise e Desenvolvimento de Sistemas (ADS) no IFTM 👨🏻‍💻',
    'Flamengo! ❤️🖤'
);

const Home = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/Foto 1.png')} style={styles.profilePhoto} />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Bem-vindo ao meu Portfólio!</Text>
                <Text style={styles.description}>Meu nome é {pessoa.nome} e aqui você encontrará informações sobre minha formação acadêmica, experiência profissional, projetos e interesses pessoais.</Text>
                <Text style={styles.text}>Idade: {pessoa.idade}</Text>
                <Text style={styles.text}>Altura: {pessoa.altura}</Text>
                <Text style={styles.text}>Cidade: {pessoa.cidade}</Text>
                <Text style={styles.text}>Peso: {pessoa.peso}</Text>
                <Text style={styles.text}>Faculdade: {pessoa.faculdade}</Text>
                <Text style={styles.text}>Time do coração: {pessoa.timeDoCoracao}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Entre em contato: {pessoa.email} | Siga-me nas redes sociais:</Text>
                <View style={styles.socialMediaContainer}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/thiss_andaz/')}>
                        <Image source={require('../../assets/instagram.png')} style={styles.socialMediaIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/luiz-alberto-367a8b2b7/')}>
                        <Image source={require('../../assets/linkedin.png')} style={styles.socialMediaIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    profilePhoto: {
        width: 100,
        height: 133,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    section: {
        alignItems: 'center',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        color: '#333333',
    },
    footer: {
        marginTop: 32,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 8,
    },
    socialMediaContainer: {
        flexDirection: 'row',
    },
    socialMediaIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 8,
    },
});

export default Home;
