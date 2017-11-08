'use strict';

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import COLORS from '../config/colors.config';

/**
 * Loader Screen with opacity to block user activity
 */

type _t_loaderOverlay = {
    whiteBackGround: boolean,
};

const LoaderOverlay = (props: _t_loaderOverlay): React.Element<*> => {
    let whiteBackGround = props.whiteBackGround ? {backgroundColor: COLORS.white} : {};
    let hideLoader = {height: 0};
    return (
        <View style={props.showOverlay ? [styles.spinner, whiteBackGround] : hideLoader} />
    );
};

export default LoaderOverlay;

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.transparent_grey,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


