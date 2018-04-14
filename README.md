# React Native: PhotoStatus

[![github home](https://img.shields.io/badge/gaetanozappi-react--native--photo--status-blue.svg?style=flat-square)](https://github.com/gaetanozappi/react-native-photo-status)
[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-photo-status.svg?style=flat-square)](https://github.com/gaetanozappi/react-native-photo-status/issues)

![PNG](screenshot/react-native-photo-status.png)

-   [Usage](#usage)
-   [License](#license)

## Usage

```javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import PhotoStatus from './PhotoStatus';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <PhotoStatus
          colors={['#FFFFFF', '#FFFFFF']}
          dim={300}
          image={{
            uri: 'http://www.prettydesigns.com/wp-content/uploads/2013/12/Megan-Gale-Long-Hairstyle-Layered-Hair.jpg',
          }}
          isStatus={true}
          isIcon={true}
          icon={'md-checkmark-circle'}//Use the Ionicons icons.
          iconSize={25}
          iconColor={'#26C6DA'}
        />
        <PhotoStatus
          colors={['#80DEEA', '#26C6DA', '#00ACC1']}
          dim={300}
          image={{
            uri: 'http://www.prettydesigns.com/wp-content/uploads/2013/12/Megan-Gale-Long-Hairstyle-Layered-Hair.jpg',
          }}
          isStatus={true}
          isIcon={false}
          colorStatus={'#00E676'}
        />
      </View>
    );
  }
}

```

## License
The MIT License
