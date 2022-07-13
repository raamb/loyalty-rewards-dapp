import React, { Fragment, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

import NavBar from "../NavBar";
import mobileHeaderStyles from "./styles";

type MobileHeaderProps = {
  navigationData: any;
  userActions: any;
};
const MobileHeader = ({
  navigationData,
  userActions,
}: MobileHeaderProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const classes = mobileHeaderStyles();

  const openMobileNavigation = () => {
    setShowMobileMenu(true);
  };

  const closeMobileNavigation = () => {
    setShowMobileMenu(false);
  };

  if (!showMobileMenu) {
    return (
      <div className={classes.hamburger} onClick={openMobileNavigation}>
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <Fragment>
      <div className={classes.mobileNavContainer}>
        <div className={classes.closeMenuIcon}>
          <CancelIcon onClick={closeMobileNavigation} />
        </div>
        <nav className={classes.mobileNavigation}>
          <NavBar navigationData={navigationData} type="mobile" />
          <div className={classes.mobileUserAction}>
            <ul>
              <li>
                <a
                  href={userActions[0].url}
                  title={userActions[0].name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {userActions[0].name}
                </a>
              </li>
              <li>
                <a
                  href={userActions[1].url}
                  title={userActions[1].name}
                  target="_blank"
                  className={classes.signUpLink}
                  rel="noreferrer"
                >
                  {userActions[1].name}
                  <span> {userActions[1].name_responsive}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default MobileHeader;
