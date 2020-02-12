import React, { Component } from 'react'
import { Image, StyleSheet, View, Dimensions, StatusBar } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Markers from './Markers'
import AppMetrica from 'react-native-appmetrica';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 48.715371;
const LONGITUDE = 44.51199799999995;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class PizzeriaScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: Markers,
    };

    this.onMapPress = this.onMapPress.bind(this);
  }

  componentDidMount() {
    AppMetrica.activateWithApiKey('9a0a9709-9ff5-49d2-82fd-0463246e57b0');

    AppMetrica.reportEvent('PizzeriaScreen');

  }

  onMapPress(e) {
    // this.setState({
    //   markers: [
    //     ...this.state.markers,
    //     {
    //       coordinate: e.nativeEvent.coordinate,
    //       key: `foo${id++}`,
    //     },
    //   ],
    // });
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c10a28',
    },
    headerTitle: <Image style={{ height: '90%', width: '70%' }} resizeMode="stretch" source={require('../../assets/images/logo.png')} />
  }



  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#c10a28" barStyle="light-content" />
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
        >
          {this.state.markers.map(marker => (
            <Marker
              title={marker.key}
              key={marker.key}
              coordinate={marker.coordinate}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default PizzeriaScreenContainer