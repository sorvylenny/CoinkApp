import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'CoinkApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
        launchShowDuration: 1000,
        backgroundColor: '#1EEA00',
        androidSplashResourceName: 'splash',
        androidScaleType: 'CENTER_CROP',
        androidSpinnerStyle: 'small',
        splashFullScreen: true,
        splashImmersive: true,
    },
  },
};

export default config;
