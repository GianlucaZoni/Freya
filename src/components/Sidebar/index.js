import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="ourfocus" onClick={toggle}>
                      our focus
                  </SidebarLink>
                  <SidebarLink to="trend" onClick={toggle}>
                      trend
                  </SidebarLink>
                  <SidebarLink to="community" onClick={toggle}>
                      community
                  </SidebarLink>
                  <SidebarLink to="shop" onClick={toggle}>
                      shop
                  </SidebarLink>
                  <SidebarRoute to="/signin" onClick={toggle}>
                      you.
                  </SidebarRoute>
              </SidebarMenu>
              {/*<SideBtnWrap>
                  <SidebarRoute to='/signin'>sign in</SidebarRoute>
              </SideBtnWrap>*/}
          </SidebarWrapper>
      </SidebarContainer>
  );
};

export default Sidebar;