import React from 'react';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {useCheckAndroid} from '../../hooks';

interface GradientContainerType {
  children: React.ReactNode;
  color: string;
  keyboardVerticalOffset?: number;
}

export default ({
  children,
  color,
  keyboardVerticalOffset = 0,
}: GradientContainerType) => {
  const behavior = useCheckAndroid() ? 'height' : 'padding';
  const styleSafeArea = {
    backgroundColor: color,
    flex: 1,
  };
  const styleScreen = {
    flex: 1,
    padding: 0,
  };
  return (
    <>
      <SafeAreaView style={styleSafeArea}>
        <KeyboardAvoidingView
          behavior={behavior}
          style={styleScreen}
          keyboardVerticalOffset={keyboardVerticalOffset}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};
