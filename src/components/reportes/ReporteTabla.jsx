import React from 'react';
import { Document, Page, View, Image, Text, StyleSheet } from '@react-pdf/renderer';
import myImage from "../../assets/logo.jpeg";
import { calcularEdad } from "../../helpers/utils";

// Define los estilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center"
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1,
  },
  cell: {
    width: '20%',
    padding: 8,
  },
  text: {
    fontSize: 10
  }
});

export function ReporteTabla({personas, titulo}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image source={myImage} style={styles.logo} />
          <Text>Fecha: {new Date().toLocaleDateString()}</Text>
        </View>
        <Text style={styles.title}>{titulo}</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.text}>Nombre</Text></View>
            <View style={styles.cell}><Text style={styles.text}>Edad</Text></View>
            <View style={styles.cell}><Text style={styles.text}>Responsable</Text></View>
            <View style={styles.cell}><Text style={styles.text}>Dirección</Text></View>
            <View style={styles.cell}><Text style={styles.text}>Teléfono</Text></View>
          </View>
          {personas.map((persona, index) => (
            <View style={styles.row} key={index}>
              <View style={styles.cell}><Text style={styles.text}>{persona.name} {persona.lastName}</Text></View>
              <View style={styles.cell}><Text style={styles.text}>{calcularEdad(persona.birthDate)}</Text></View>
              <View style={styles.cell}><Text style={styles.text}>{persona.nameResponsible}</Text></View>
              <View style={styles.cell}><Text style={styles.text}>{persona.address}</Text></View>
              <View style={styles.cell}><Text style={styles.text}>{persona.phoneNumber}</Text></View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}