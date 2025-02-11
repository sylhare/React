import { styled } from 'styled-components';
import { Link as RemixLink } from '@remix-run/react';

export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  background-color: ${(props) => (props?.name === 'intent' && props?.value === 'clear' ? '#ccc' : '#7ad')};
  color: ${(props) => (props?.name === 'intent' && props?.value === 'clear' ? 'black' : 'white')};
  border: none;
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled(RemixLink)`
  padding: 10px;
  background-color: #7ad;
  color: white;
  border-radius: 4px;
  text-decoration: none;
`;