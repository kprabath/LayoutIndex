import React from 'react'
import {Text , StyleSheet , View} from 'react-native'


export const BottomTriangle = _=><View style={styles.bottomTriangle} />

export const TopTriangle = _=>    <View style={styles.topTriangle} />


const styles = StyleSheet.create({
    topTriangle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftWidth: 10,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderLeftColor: 'transparent',
        transform: [{rotate: '180deg'}],
      },
      bottomTriangle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftWidth: 10,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderLeftColor: 'transparent',
      },
})