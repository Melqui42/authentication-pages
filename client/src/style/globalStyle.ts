import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	* {
		margin: 0%;
		padding: 0%;
		list-style: none;
		text-decoration: none;
		font-family: "Roboto", sans-serif;

		button {
			border: none;
			display: flex;
			cursor: pointer;
			align-items: center;
			justify-content: center;
		}
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		&::-webkit-scrollbar {
			background-color: #545454;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #898989;
		}
	}
`
export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #232323;
`

export default GlobalStyle
