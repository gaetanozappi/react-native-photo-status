import React, { Component } from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PhotoStatus extends Component {
  render() {
    const {
      colors,
      dim,
      image,
      isIcon,
      isStatus,
      colorStatus,
      icon,
      iconSize,
      iconColor,
    } = this.props;
    return (
      <View>
        <LinearGradient
          colors={colors}
          style={{
            width: dim,
            height: dim,
            borderRadius: dim / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

          {isStatus === true &&
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 26 / 2,
                backgroundColor: 'white',
                position: 'absolute',
                top: dim * 0.1,
                right: dim * 0.16,
                zIndex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {isIcon === false
                ? <View
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 18 / 2,
                      margin: 10,
                      backgroundColor: colorStatus,
                    }}
                  />
                : <Ionicons name={icon} size={iconSize} color={iconColor} />}
            </View>}

          <Image
            source={image}
            style={{
              width: dim - 30,
              height: dim - 30,
              borderRadius: (dim - 30) / 2,
            }}
          />
        </LinearGradient>
      </View>
    );
  }
}
