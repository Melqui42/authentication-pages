import styled from 'styled-components'

export const FieldRoot = styled.div`
  gap: 0.5rem;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  .icon {
    top: 41px;
    left: 12px;
    color: #919191;
    font-size: 0.8rem;
    position: absolute;
  }
`
export const FieldLabel = styled.label`
  color: #ffffff;
`
export const FieldAction = styled.button`
  top: 40px;
  right: 15px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  .iconAction {
    color: #919191;
    font-size: 1.2rem;
  }
`
export const FieldInput = styled.input`
  outline: none;
  color: #ffffff;
  border-radius: 2rem;
  background-color: #313131;
  border: 2px solid #3c3c3c;
  padding: 0.8rem 2.8rem 0.8rem 2rem;

  &::placeholder {
    color: #ffffff;
  }
`
export const FieldErrorMessage = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #f56161;
  font-size: 0.8rem;
`
