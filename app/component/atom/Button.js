import React from 'react';
import styled, {css} from 'styled-components/native';
import { COLOR_BACK } from '../config';

 

export default ({
  style,
  children,
  onPress,
  textColor,
  buttonColor,
  fontSize = '16px',
  textDecoration,
  imageMode=false,
}) => {
  return (
    <Button style={style} onPress={onPress} buttonColor={buttonColor}>
      {imageMode ? 
        children
      :
        <ButtonInnerText
            textDecoration={textDecoration}
            textColor={textColor}
            fontSize={fontSize}
            type="button"
        >
            {children}
        </ButtonInnerText>
      }
    </Button>
  );
};

const Button = styled.TouchableOpacity`
    ${({buttonColor = '#ffffff'}) =>
        buttonColor &&
        css`
          background-color: ${buttonColor};
        `
    };
    ${({border = `1px solid ${COLOR_BACK}`}) =>
        border &&
        css`
          border: ${border};
        `
    };
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

const ButtonInnerText = styled.Text`
  ${({textDecoration = 'none'}) =>
    textDecoration &&
    css`
      text-decoration-line: ${textDecoration};
    `};
  ${({fontSize}) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `};
  ${({textColor = COLOR_BACK}) =>
    textColor &&
    css`
      color: ${textColor};
    `};
`;