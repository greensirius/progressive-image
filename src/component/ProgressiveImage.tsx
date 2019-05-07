import React, {ComponentProps} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ImageSourcePropType,
} from 'react-native';

type ImageProps = ComponentProps<typeof Image>;
type Props = ImageProps & {
  thumbnailSource?: ImageSourcePropType;
};
class ProgressiveImage extends React.Component<Props> {
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);

  _handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
    }).start();
  };

  _onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
    }).start();
  };

  render() {
    let {thumbnailSource, source, style, ...otherProps} = this.props;
    return (
      <View style={styles.container}>
        <Animated.Image
          {...otherProps}
          source={thumbnailSource}
          style={[style, {opacity: this.thumbnailAnimated}]}
          onLoad={this._handleThumbnailLoad}
          blurRadius={2}
        />
        <Animated.Image
          {...otherProps}
          source={source}
          style={[styles.overlay, {opacity: this.imageAnimated}, style]}
          onLoad={this._onImageLoad}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E4E8',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default ProgressiveImage;
