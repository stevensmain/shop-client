enum DeviceSize {
  MOBILE = "767px",
  TABLET = "768px",
  TABLET_L = "900px",
  LAPTOP = "1024px",
  DESKTOP = "1200px",
  DESKTOP_L = "1800px",
}

const size = {
  mobile: DeviceSize.MOBILE,
  tablet: DeviceSize.TABLET,
  tabletL: DeviceSize.TABLET_L,
  laptop: DeviceSize.LAPTOP,
  desktop: DeviceSize.DESKTOP,
  desktopL: DeviceSize.DESKTOP_L,
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
