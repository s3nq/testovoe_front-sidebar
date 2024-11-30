import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	background-color: ${props =>
		props.theme === 'dark'
			? 'var(--color-sidebar-background-dark-default)'
			: 'var(--color-sidebar-background-light-default)'};
	color: ${props =>
		props.theme === 'dark'
			? 'var(--color-text-dark-default)'
			: 'var(--color-text-light-default)'};
	box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	padding: 16px;
	border-radius: 16px;
	position: relative;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	img {
		height: 32px;
		width: 32px;
	}

	span {
		font-size: 18px;
		font-weight: bold;
		color: ${props =>
			props.theme === 'dark'
				? 'var(--color-text-logo-dark-default)'
				: 'var(--color-text-logo-light-default)'};
	}
`

export const ToggleButton = styled(motion.div)`
	position: absolute;
	cursor: pointer;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	top: 2%;
	background-color: transparent;
	color: red;
	transform: translateY(-50%);
	z-index: 1000;
	color: ${props =>
		props.theme === 'dark'
			? 'var(--color-text-dark-default)'
			: 'var(--color-text-light-default)'};
	transition: background-color 0.3s, border 0.3s;

	&:hover {
		background-color: ${props =>
			props.theme === 'dark'
				? 'var(--color-sidebar-background-dark-hover)'
				: 'var(--color-sidebar-background-light-hover)'};
	}
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 12px 16px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s;
	background-color: ${props =>
		props.isActive
			? props.theme === 'dark'
				? 'var(--color-sidebar-background-dark-active)'
				: 'var(--color-sidebar-background-light-active)'
			: 'transparent'};

	&:hover {
		background-color: ${props =>
			props.theme === 'dark'
				? 'var(--color-sidebar-background-dark-hover)'
				: 'var(--color-sidebar-background-light-hover)'};
		color: ${props =>
			props.theme === 'dark'
				? 'var(--color-text-dark-hover)'
				: 'var(--color-text-light-hover)'};
	}

	span {
		font-size: 14px;
	}
`

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`
