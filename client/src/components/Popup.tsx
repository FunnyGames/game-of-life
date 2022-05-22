import styled, { keyframes } from "styled-components";

interface IProps {
    show?: boolean;
}

const Popup = ({
    text,
    show,
    onPress,
}: {
    text: string;
    show: boolean;
    onPress: () => void;
}) => {
    return (
        <Container show={show} onClick={onPress}>
            <PopupTitle>{text}</PopupTitle>
            <PopupSubTitle>Press "Reset" to restart the game.</PopupSubTitle>
            <PopupPressText>(Press on the on popup to close it)</PopupPressText>
        </Container>
    );
};

export default Popup;

const PopupTitle = styled.div`
    font-size: xxx-large;
`;

const PopupSubTitle = styled.div`
    font-size: xx-large;
`;

const PopupPressText = styled.div`
    margin-top: 1rem;
    font-size: medium;
`;

const Container = styled.div<IProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  width: 70%;
  margin: 15%;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: white;
  padding: 50px;
`;