import styled, {css} from 'styled-components/native';
import { BTN_SIZE, SUB_SIZE, TIT_SIZE_L, TIT_SIZE_M, TXT_SIZE } from '../config';
export function getLineHeight(fontSize) {
  const multiplier = 1.45;
  return parseInt(fontSize * multiplier, 10);
}

const Text = styled.Text`
    ${({type}) => {
        let size = `15px`;
        type == 'titleL' && (size = TIT_SIZE_L);
        type == 'titleM' && (size = TIT_SIZE_M);
        type == 'button' && (size = BTN_SIZE);
        type == 'textM' && (size = TXT_SIZE);
        type == 'textS' && (size = SUB_SIZE);
        
        return css`font-size: ${size}`
            
        }
    };
    ${({fontSize}) =>
        fontSize &&
        css`
        line-height: ${getLineHeight(fontSize)}px;
        ` 
    };  
    ${({fontWeight}) =>
        fontWeight &&
        css`
        text-weight: ${fontWeight}px;
        `
    };
    letter-spacing: -1px;
`;

export default Text;