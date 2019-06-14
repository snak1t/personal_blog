import styled from 'styled-components'
import { colors, centerContent, breakpoints } from '../../utils/css/mixins'

export const PostTitle = styled.h1`
    font-size: 2.2rem;
    color: ${colors.light};
    ${breakpoints.mobile} {
        font-size: 1.2rem;
    }
`

export const PostInfo = styled.div`
    ${breakpoints.mobile} {
        font-size: 0.8rem;
    }
`

export const PostContent = styled.div`
    ${centerContent({ topMargin: 2 })}
    padding: 0 1rem;
`

export const PostInfoContainer = styled.section`
    padding: 1rem 1rem;
`
