'use client';

import { useContext } from 'react';
import Sidebar from '../sidebar/sidebar';
import SidebarMini from '../sidebarMini/sidebarMini';
import { VisibilityContext } from '../../context/visibilityContext';

const RenderSidebar = (): React.JSX.Element => {
  const { sidebarIsActive } = useContext(VisibilityContext);

  return <>{sidebarIsActive ? <Sidebar /> : <SidebarMini />}</>;
};

export default RenderSidebar;
