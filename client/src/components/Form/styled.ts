import styled from 'styled-components'

export const FormRoot = styled.form`
  width: 570px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const FormTitle = styled.h1`
  width: 100%;
  color: #ffffff;
  text-align: left;
`
export const FormDescription = styled.p`
  width: 100%;
  color: #919191;
  text-align: left;
`
export const FormContent = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
`
export const FormAction = styled.button`
  padding: 1rem;
  color: #ffffff;
  transition: 0.3s;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 2rem;
  background-color: #3c96ff;
`
export const FormLink = styled.a`
  color: #919191;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  span {
    color: #3c96ff;
    text-decoration: underline;
  }
`
export const FormCheckBox = styled.button`
  gap: 0.5rem;
  border: none;
  display: flex;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  align-items: center;
  background-color: transparent;

  div {
    width: 20px;
    height: 20px;
    display: flex;
    transition: 0.3s;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;

    .icon {
      color: #ffffff;
    }
  }

  span {
    color: #3c96ff;
  }
`
export const FormColumn = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
