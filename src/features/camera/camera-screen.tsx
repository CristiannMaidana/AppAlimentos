import { BarcodeScanFreeIcons, ScanIcon, ShoppingBag01FreeIcons, Tick02FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';

import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SCANNER_FRAME_WIDTH = 280;
const SCANNER_FRAME_HEIGHT = 220;
const SCANNER_CORNER_RADIUS = 12;

function createRoundedRectPath(x: number, y: number, width: number, height: number, radius: number) {
  return [
    `M${x + radius} ${y}`,
    `H${x + width - radius}`,
    `A${radius} ${radius} 0 0 1 ${x + width} ${y + radius}`,
    `V${y + height - radius}`,
    `A${radius} ${radius} 0 0 1 ${x + width - radius} ${y + height}`,
    `H${x + radius}`,
    `A${radius} ${radius} 0 0 1 ${x} ${y + height - radius}`,
    `V${y + radius}`,
    `A${radius} ${radius} 0 0 1 ${x + radius} ${y}`,
    'Z',
  ].join(' ');
}

export default function CameraScreen() {
  const [facing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  // State to track if a barcode has been scanned
  const [scanned, setScanned] = useState(false);
  const { width, height } = useWindowDimensions();

  const scannerLeft = (width - SCANNER_FRAME_WIDTH) / 2;
  const scannerTop = (height - SCANNER_FRAME_HEIGHT) / 2.35 - 70;
  const scannerOverlayPath = [
    `M0 0 H${width} V${height} H0 Z`,
    createRoundedRectPath(
      scannerLeft,
      scannerTop,
      SCANNER_FRAME_WIDTH,
      SCANNER_FRAME_HEIGHT,
      SCANNER_CORNER_RADIUS
    ),
  ].join(' ');

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
      <View pointerEvents="none" style={styles.scannerOverlay}>
        <Svg width="100%" height="100%" style={StyleSheet.absoluteFillObject}>
          <Path d={scannerOverlayPath} fill="rgba(0, 0, 0, 0.55)" fillRule="evenodd" />
        </Svg>
        <View style={[styles.scannerFrame, { left: scannerLeft, top: scannerTop }]}>
          <View style={[styles.corner, styles.cornerTopLeft]} />
          <View style={[styles.corner, styles.cornerTopRight]} />
          <View style={[styles.corner, styles.cornerBottomLeft]} />
          <View style={[styles.corner, styles.cornerBottomRight]} />
        </View>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.textStyle}>Escanear producto</Text>
        <Text style={styles.textStyle}>Alinea el código de barras dentro del marco</Text>
      </View>
      {/*TODO: hide message and show only when the data is detected*/}
      <View style={styles.successfullyScanned}>
        <HugeiconsIcon icon={Tick02FreeIcons} size={24} color="#FFFFFF" strokeWidth={1.8} />
        <Text style={styles.textStyle}>Código detectado</Text>
      </View>
      <View style={styles.instructionContainer}>
        <HugeiconsIcon icon={ScanIcon} size={24} color="#125618" strokeWidth={1.8} />
        <Text style={styles.textStyle}>Asegúrate de que el código de barras esté bien iluminado y no esté borroso.</Text>
      </View>
      {/* TODO: hide button and show only when the data is detected and change between info and button */}
      <View style={styles.buttonInfoContainer}>
        <View style={styles.iconContainer}>
          <HugeiconsIcon icon={BarcodeScanFreeIcons} size={40} color="green" strokeWidth={1.8} />
        </View>
        <Text style={styles.textStyle}>Escaneá un producto para ver detalle</Text>
      </View>
      <Pressable 
      style={styles.buttonContainer} 
      onPress={() => router.replace({
        pathname: '/products/[code]',
        params: { code: 100000 },
      })}>
        <HugeiconsIcon icon={ShoppingBag01FreeIcons} size={24} color="black" strokeWidth={1.8} />
        <Text>Ver producto</Text>
      </Pressable>
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
  scannerOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  scannerFrame: {
    width: SCANNER_FRAME_WIDTH,
    height: SCANNER_FRAME_HEIGHT,
    position: 'absolute',
  },
  corner: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderColor: '#FFFFFF',
  },
  cornerTopLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 12,
  },
  cornerTopRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 12,
  },
  cornerBottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 12,
  },
  cornerBottomRight: {
    right: 0,
    bottom: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 12,
  },
  buttonContainer: {
    padding: 16,
    position: 'absolute',
    gap: 20,
    bottom: 60,
    left: 80,
    right: 80,
    flexDirection: 'row',
    backgroundColor: 'green',
    borderRadius: 36,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  topContainer: {
    padding: 16,
    position: 'absolute',
    top: 0,
    left: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  instructionContainer: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    bottom: 270,
    left: 40,
    right: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 18,
    zIndex: 2,
  },
  successfullyScanned: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    bottom: 610,
    left: 125,
    right: 125,
    backgroundColor: 'green',
    borderRadius: 22,
    zIndex: 2,
  },
  buttonInfoContainer:{
    paddingHorizontal: 15,
    position: 'absolute',
    gap: 10,
    bottom: 60,
    left: 135,
    right: 135,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: 'white',
  }
});
