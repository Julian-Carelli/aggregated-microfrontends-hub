import styled from 'styled-components'

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const StyledButton = styled.button`
  margin-right: 4px;
  margin-left: 4px;
  background-color: #653780;
  font-weight: 800;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`
