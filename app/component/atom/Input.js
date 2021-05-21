import styled from 'styled-components/native';
import { TXT_SIZE } from '../config';
const Input = styled.TextInput.attrs({
  placeholderTextColor: '#A8A8A8',
  autoCapitalize: 'none'
})`
  background-color: #f4f4f5;
  padding: 10px 10px;
  color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: ${TXT_SIZE};
`;

export default Input;