import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { colors, breakpoints } from '../../utils/css/mixins'
import { CenterContent } from '../CenterContent'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.light};
    color: ${colors.shade} !important;
    overflow-x: hidden;
    font-kerning: initial;
    letter-spacing: 0;
  }
`

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.light};
`

export const Header = styled.header`
    flex-shrink: 0;
    padding: 0.4rem 1rem;
    z-index: 2;
`

export const Main = styled.main`
    flex-grow: 1;
    z-index: 1;
`

export const Footer = styled.footer`
    flex-shrink: 0;
    padding: 0.6rem 0;
    font-size: 0.7rem;
    color: ${colors.secondary};
    background-color: ${colors.fullDark};
`

export const FooterContent = styled(CenterContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > * {
        ${breakpoints.mobile} {
            flex: 1;
        }
    }
`

export const FooterIssueContent = styled.span`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    ${breakpoints.mobilePlus} {
        display: inline;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.light};
    &:hover {
        color: ${colors.secondary};
    }
`
