import React, { Component, PropTypes } from 'react'
import { NativeModules, Dimensions, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import RTMPStreamingView from '../../common/RTMPStreamingView.js'

const NativeRTMPModule = NativeModules.RTMPModule;

export default class SampleApp extends Component {
  constructor(props) {
    super(props);
    this.publishing = false;
    this.state = {
      publishButtonState: 'Start',
      rtmpURL: 'rtmp://live.us.picarto.tv/testptv/ptv_350434_d278efca5f0c'
    }
  }

  async startPublish(rtmpUrl) {
    const success = await NativeRTMPModule.startStream(rtmpUrl);
    return success;
  }

  async stopPublish() {
    const success = await NativeRTMPModule.stopStream();
    return success;
  }

  onSettingButtonPressed() {
    //
  }

  onSwitchButtonPressed() {
    //
  }

  onPublishButtonPressed() {
    this.publishing = !this.publishing;
    this.setPublishButtonState();

    if (this.publishing) {
      const rtmpURL = this.state.rtmpURL;
      this.startPublish(rtmpURL);
    } else {
      this.stopPublish();
    }
  }

  setPublishButtonState() {
    if (this.publishing) {
      this.setState({ publishButtonState: 'Stop' })
    } else {
      this.setState({ publishButtonState: 'Start' })
    }
  }

  renderTopButtons() {
    return (
      <View style={styles.topButtons}>
        {this.renderSettingButton()}
        {this.renderSwitchButton()}
      </View>
    )
  }

  renderBottomButtons() {
    return (
      <View style={styles.bottomButtons}>
        {this.renderPublishButton()}
      </View>
    )
  }

  renderSettingButton() {
    return (
      <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => this.onSettingButtonPressed()}>
        <Image style={{ flex: 1, justifyContent: 'center' }}
          source={this.props.settingButtonImage}
          resizeMode={Image.resizeMode.contain} />
      </TouchableOpacity>
    )
  }

  renderSwitchButton() {
    return (
      <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => this.onSwitchButtonPressed()}>
        <Image style={{ flex: 1, justifyContent: 'center' }}
          source={this.props.switchButtonImage}
          resizeMode={Image.resizeMode.contain} />
      </TouchableOpacity>
    )
  }

  renderPublishButton() {
    return (
      <View style={styles.publishButtonContainer}>
        <TouchableOpacity onPress={() => this.onPublishButtonPressed()}>
          <Image style={styles.publishButton}
            source={this.props.publishButtonImage}
            resizeMode={'contain'}>
          </Image>
          <Text style={styles.publishButtonText}>
            {this.state.publishButtonState}
          </Text>
        </TouchableOpacity>
      </View >
    )
  }

  renderCamera() {
    return (
      //<View style={styles.container}>
      <RTMPStreamingView style={StyleSheet.absoluteFill} />
      //</View>
    )
  }

  renderGap() {
    return (
      <View style={{ flex: 10, flexDirection: 'column' }} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        {this.renderCamera()}
        {this.renderTopButtons()}
        {this.renderGap()}
        {this.renderBottomButtons()}
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  topButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 0
  },
  bottomButtons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14
  },
  publishButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  publishButtonText: {
    justifyContent: 'center',
    color: 'black',
    backgroundColor: 'transparent'
  },
  publishButton: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 10,
    flexDirection: 'column'
  },
  //container: StyleSheet.absoluteFillObject
})