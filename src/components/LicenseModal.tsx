import {
    CloseIcon,
    Heading,
    Icon, Link, LinkText, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    Text
} from '@gluestack-ui/themed';
import React from 'react';
import { StyleSheet } from 'react-native';

export interface LicenseModalProps {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
}
export const LicenseModal = ({ isOpened, setIsOpened }: LicenseModalProps) => {
    return (
        <Modal
            isOpen={isOpened}>
            <ModalContent>
                <ModalHeader style={styles.modalHeader}>
                    <Heading>
                        О программе
                    </Heading>
                    <ModalCloseButton onPress={() => { setIsOpened(false); }}>
                        <Icon as={CloseIcon}/>
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody mt="$4">
                    <Text>
                        Изображения мышц, используемые в данном приложении распространяются по лицензии
                        <strong> Creative Commons Attribution-Share Alike 2.1 Japan</strong>. Подробную информацию о лицензии можно найти
                    </Text>
                    <Link href="https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en">
                        <LinkText>по ссылке</LinkText>
                    </Link>
                </ModalBody>
                <ModalFooter/>
            </ModalContent>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalHeader: {
        alignItems: 'flex-start'
    }
});
