import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const BiometricAuth = () => {
  useEffect(() => {
    FingerprintScanner
      .authenticate({ description: 'Scan your fingerprint to proceed' })
      .then(() => {
        // User authenticated successfully, proceed with the operation
        Alert.alert('Authenticated successfully');
      })
      .catch((error) => {
        // Authentication failed, handle the error
        Alert.alert('Authentication failed', error.message);
      });

    return () => {
      FingerprintScanner.release();
    };
  }, []);

  return (
    <View>
      <Text>Biometric Authentication</Text>
    </View>
  );
};

export default BiometricAuth;