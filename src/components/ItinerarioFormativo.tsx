import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Disciplina from '../models/disciplina';

const ItinerarioFormativo = () => {
  const formacoes: Disciplina[] = [
    new Disciplina(
      'Educação Básica ao Ensino Fundamental - Completo em 2018',
      'Colégio Nossa Senhora das Graças - Particular;',
      '',
      ''
    ),
    new Disciplina(
      'Ensino Médio - Completo em 2021',
      'Escola Estadual Minas Gerais - Pública;',
      '',
      ''
    ),
    new Disciplina(
      'Curso Técnico em Informática - Completo em 2023',
      'Universidade Federal do Triângulo Mineiro - Federal;',
      '',
      ''
    ),
    new Disciplina(
      'Atirador Reservista de 2° Categoria - Completo em 2023',
      'Tiro de Guerra 11-003 - Instituição Militar;',
      '',
      ''
    ),
    new Disciplina(
      'Curso de Análise e Desenvolvimento de Sistemas - Cursando',
      'Instituto Federal do Triângulo Mineiro - Federal - 3° Período.',
      '',
      ''
    ),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Itinerário Formativo</Text>
        <Text style={styles.description}>Aqui eu compartilho minha jornada educacional.</Text>
      </View>

      {formacoes.map((formacao, index) => (
        <View style={styles.section} key={index}>
          <Text style={styles.subtitle}>{formacao.nome}</Text>
          <Text style={styles.text}>{formacao.conteudo}</Text>
        </View>
      ))}
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
  },
});

export default ItinerarioFormativo;

/*
// src/components/ItinerarioFormativo.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ItinerarioFormativo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Itinerário Formativo</Text>
        <Text style={styles.description}>Aqui eu compartilho minha jornada educacional.</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Educação Básica ao Ensino Fundamental - Completo em 2018</Text>
        <Text style={styles.text}>Colégio Nossa Senhora das Graças - Particular;</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.su
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

export default ItinerarioFormativo;
*/