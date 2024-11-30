import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import {
	Footer,
	Header,
	Logo,
	Menu,
	MenuItem,
	SidebarContainer,
	ToggleButton,
} from './styles'

const routes = [
	{ title: 'Home', icon: ['fas', 'house'], path: '/' },
	{ title: 'Sales', icon: ['fas', 'chart-line'], path: '/sales' },
	{ title: 'Costs', icon: ['fas', 'chart-column'], path: '/costs' },
	{ title: 'Payments', icon: ['fas', 'wallet'], path: '/payments' },
	{ title: 'Finances', icon: ['fas', 'chart-pie'], path: '/finances' },
	{ title: 'Messages', icon: ['fas', 'envelope'], path: '/messages' },
]

const bottomRoutes = [
	{ title: 'Settings', icon: ['fas', 'sliders'], path: '/settings' },
	{ title: 'Support', icon: ['fas', 'phone-volume'], path: '/support' },
]

export const Sidebar = ({ theme = 'light' }) => {
	const [isOpened, setIsOpened] = useState(true)
	const [activeItem, setActiveItem] = useState(null)

	const toggleSidebar = () => {
		setIsOpened(prev => !prev)
	}

	const handleMenuItemClick = index => {
		setActiveItem(index)
	}

	const sidebarVariants = {
		open: { width: '250px', transition: { duration: 0.00005 } },
		closed: { width: '80px', transition: { duration: 0.00005 } },
	}

	const toggleButtonVariants = {
		open: { right: '1205px', rotate: 0 },
		closed: { right: '1372px', rotate: 180, duration: 0.8 },
	}

	const itemVariants = {
		open: i => ({
			opacity: 1,
			x: 0,
			transition: { delay: i * 0.1 },
		}),
		closed: { opacity: 0, x: -20 },
	}

	return (
		<>
			<SidebarContainer
				as={motion.div}
				variants={sidebarVariants}
				animate={isOpened ? 'open' : 'closed'}
				theme={theme}
			>
				<Header>
					<Logo>
						<img src={logo} alt='Logo' />
						{isOpened && <span>Technifly</span>}
					</Logo>
				</Header>

				<Menu>
					{routes.map((route, index) => (
						<MenuItem
							as={motion.div}
							key={route.title}
							custom={index}
							variants={itemVariants}
							animate={isOpened ? 'open' : 'closed'}
							onClick={() => handleMenuItemClick(index)}
							isActive={activeItem === index}
						>
							<FontAwesomeIcon icon={route.icon} />
							{isOpened && <span>{route.title}</span>}
						</MenuItem>
					))}
				</Menu>

				<Footer>
					{bottomRoutes.map((route, index) => (
						<MenuItem
							as={motion.div}
							key={route.title}
							custom={index + routes.length}
							variants={itemVariants}
							animate={isOpened ? 'open' : 'closed'}
							onClick={() => handleMenuItemClick(index + routes.length)}
							isActive={activeItem === index + routes.length}
						>
							<FontAwesomeIcon icon={route.icon} />
							{isOpened && <span>{route.title}</span>}
						</MenuItem>
					))}
				</Footer>
			</SidebarContainer>
			<ToggleButton
				as={motion.div}
				variants={toggleButtonVariants}
				animate={isOpened ? 'open' : 'closed'}
				theme={theme}
				onClick={toggleSidebar}
				isOpened={isOpened}
			>
				<FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
			</ToggleButton>
		</>
	)
}

Sidebar.propTypes = {
	theme: PropTypes.oneOf(['light', 'dark']),
}
