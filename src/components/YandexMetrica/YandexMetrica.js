import {
    YandexMetrica,
  } from 'react-native-yandex-metrica';
   
  // The yandex metrica must be activated
  YandexMetrica.activateWithApiKey('app key');
   
  // Event reporting
  YandexMetrica.reportEvent('Hello from roosters app');
   
  // Disables reporting (must be called before activation)
  YandexMetrica.setDryRun(true);