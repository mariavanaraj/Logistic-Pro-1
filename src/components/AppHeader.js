import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import Title from './Title'

const AppHeader = () => {

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-3 p-0 pt-3">
      <CContainer fluid>
        <CHeaderToggler
          className=""
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <h3>Logistics Pro</h3>
        </CHeaderBrand>
        {/* <h3 className="text-white d-md-block d-none"> {name}</h3> */}
        <Title />

        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  )
}

export default AppHeader
