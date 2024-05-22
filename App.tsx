import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://mercanlar.com/' }} // Web sitesinin URL'sini buraya girin
        style={{ flex: 1 }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        startInLoadingState={true}
        renderLoading={() => <LoadingIndicator />} // Yükleme göstergesi
      />
    </SafeAreaView>
  );
}

function LoadingIndicator() {
  return (
    <ActivityIndicator
      size="large"
      color="#0000ff"
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
