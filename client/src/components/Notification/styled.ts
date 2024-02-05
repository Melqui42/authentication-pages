import styled from 'styled-components'

export const NotificationRoot = styled.div`
  top: 40px;
  gap: 1rem;
  right: 30px;
  width: 300px;
  display: flex;
  position: fixed;
  transition: 0.3s;
  align-items: center;
  border-radius: 0.4rem;
  padding: 1.5rem 0.8rem;
  background-color: #313131;
  border: 2px solid #3c3c3c;

  .icon {
    padding: 0.2rem;
    font-size: 1rem;
    border-radius: 100%;
    background-color: red;
  }

  &.hide {
    right: -500px;
  }

  &.show {
    right: 30px;
  }
`
export const NoticationMessage = styled.p`
  color: #ffffff;
  font-size: 1rem;
`
export const NotificationAction = styled.button`
  top: 8px;
  right: 8px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  .iconAction {
    color: #ffffff;
    font-size: 1.2rem;
  }
`
