import {Dimensions, Platform, PixelRatio} from 'react-native';

export default (size: number): number => {
  const density = PixelRatio.get();
  switch (density) {
    case 3.5:
      return size;
    case 3:
      return size;
    case 2.5:
      return size - 1.5;
    case 2:
      return size - 2.5;
    case 1.5:
      return size - 3;
    case 1:
      return size - 4;
    default:
      return size;
  }
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export {SCREEN_WIDTH, SCREEN_HEIGHT};
