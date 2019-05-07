import React from 'react';
import {View, StyleSheet, Image, ComponentProps} from 'react-native';

type Props = ComponentProps<typeof Image>;

class ProgressiveImage extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E4E8',
  },
});
export default ProgressiveImage;
