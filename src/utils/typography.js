import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'a': {
        ...styles.a,
        color: `#50A`
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
