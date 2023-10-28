import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import myImage from "../../assets/logo.jpeg";
import { calcularEdad } from "../../helpers/utils";

// Define los estilos
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    image: {
      width: 200,
      height: 200,
    },
    text: {
      fontSize: 14,
      marginBottom: 10,
    },
  });
  
  // Datos de ejemplo de la persona
  const persona = {
    nombre: 'Juan Pérez',
    edad: 30,
    direccion: 'Calle Principal 123',
    ciudad: 'Ciudad Ejemplo',
  };

  const mediaCartaSize = {
    height: 5.5 * 72, // 5.5 pulgadas
    width: 8.5 * 72, // 8.5 pulgadas
  };

export const ReporteIndividual = ({record}) => {
  return (
    <Document>
      <Page size={mediaCartaSize} style={styles.page}>
        <View style={styles.section}>
          <Image source={myImage} style={styles.image} />
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Nombre: {record.name}</Text>
          <Text style={styles.text}>Apellido: {record.lastName}</Text>
          <Text style={styles.text}>Edad: {calcularEdad(record.birthDate)}</Text>
          <Text style={styles.text}>Responsable: {record.nameResponsible}</Text>
          <Text style={styles.text}>Estado Civil: {record.civilState}(a)</Text>
          <Text style={styles.text}>Dirección: {record.address}</Text>
          <Text style={styles.text}>Telefono: {record.phoneNumber}</Text>
          <Text style={styles.text}>Diagnóstico médico: {record.diagnostic}</Text>
          <Text style={styles.text}>Tipo de atención: {record.atention}</Text>
          <Text style={styles.text}>Duración: {record.duration}</Text>
          <Text style={styles.text}>Necesita operación: {record.needOperation}</Text>
          <Text style={styles.text}>Necesita medicina: {record.needMedicament}</Text>
        </View>
      </Page>
    </Document>
  );
};
