import React from 'react'
import {
  StyleProp,
  ViewStyle
} from 'react-native';
import { Portal, Modal as PaperModal, ModalProps } from "react-native-paper"

export const Modal = ({ children, ...rest }: ModalProps) => {
  const containerStyle: StyleProp<ViewStyle> = { paddingHorizontal: 16, backgroundColor: '#212121', flex: 1 };

  return (
    <Portal>
      <PaperModal contentContainerStyle={containerStyle} {...rest}>
        {children}
      </PaperModal>
    </Portal>
  )
}