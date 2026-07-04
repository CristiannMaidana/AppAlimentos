import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CameraScreen() {
  const [facing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  // State to track if a barcode has been scanned
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    // Set scanned to true to prevent multiple scans
    setScanned(true);
    // You can handle the scanned barcode data here, e.g., navigate to a product details screen
    // TODO: with the data use for search the product in api.
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing} 
        onBarcodeScanned={
          scanned ? undefined : handleBarCodeScanned
        } 
        barcodeScannerSettings={{
          barcodeTypes: ['ean13', 'ean8', 'upc_e', 'upc_a', 'code128', 'code39'],
        }} 
      />
      <View style={styles.topContainer}>
        <Text style={styles.textStyle}>Escanear producto</Text>
        <Text style={styles.textStyle}>Alinea el código de barras dentro del marco</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text>Escanee un producto para ver detalles.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    position: 'absolute',
    bottom: 64,
    left: 30,
    right: 30,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 24,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    padding: 16,
    position: 'absolute',
    top: 0,
    left: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
  }
});
