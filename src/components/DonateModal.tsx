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

export type DonateModalProps = {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
}
export const DonateModal = ({ isOpened, setIsOpened }: DonateModalProps) => {
    return (
        <Modal
            isOpen={isOpened}>
            <ModalContent>
                <ModalHeader style={styles.modalHeader}>
                    <Heading>
                        Спасибо за использование MuscleQuiz!
                    </Heading>
                    <ModalCloseButton onPress={() => setIsOpened(false)}>
                        <Icon as={CloseIcon}/>
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody mt="$4">
                    <Text>
                        Если вам понравилось приложение и вы хотите поддержать автора, можете сделать это отправив
                        донат.
                    </Text>
                    <Link href="https://donatty.com/isfield" mt="$4">
                        <LinkText>Отправить донат</LinkText>
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
