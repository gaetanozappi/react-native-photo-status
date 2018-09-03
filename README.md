# React Native: react-native-photo-status

[![github home](http://img.shields.io/npm/v/react-native-photo-status.svg?style=flat)](https://www.npmjs.com/package/react-native-photo-status)
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--photo--status-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-photo-status)
[![npm](https://img.shields.io/npm/dm/react-native-photo-status.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-photo-status)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-photo-status.svg?style=flat)](https://github.com/gaetanozappi/react-native-photo-status/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-photo-status.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-photo-status/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-photo-status.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-photo-status/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-photo-status.svg)]()

![PNG](screenshot/react-native-photo-status.png)

-   [Usage](#usage)
-   [License](#license)

## 📖 Getting started

`$ npm install react-native-photo-status --save`

## Usage

```javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import PhotoStatus from 'react-native-photo-status';

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

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `color`      | `array`   |  | We need to pass an array of the colors, as in the example.
| `dim`       | `number`   |    | Circle size.
| `image`      | `object`   |  | We need to pass an image, as in the example.
| `isStatus`      | `bool`   |  | Indicates whether to have the status icon.
| `isIcon`      | `bool`   |  | Indicates whether to have the status icon.
| `icon`      | `Ionicons`   |  | Indicates what kind of icon to use.
| `iconSize`      | `number`   |  | Icon size.
| `iconColor`      | `string`   |  | Icon color.
| `colorStatus`      | `string`   |  | Indicates the background color of the status.

## License
This library is provided under the Apache License.
