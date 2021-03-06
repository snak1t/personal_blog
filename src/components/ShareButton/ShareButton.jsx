import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import canUseDom from 'can-use-dom'
import { colors } from '../../utils/css/mixins'

const ActualShareButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ShareIcon = styled(FontAwesomeIcon)`
    color: ${colors.main};
    font-size: 1rem;
`
let url = canUseDom ? window.document.location.href : ''
const canonicalElement = canUseDom ? window.document.querySelector('link[rel=canonical]') : 'https://roabramov.com'
if (canonicalElement !== null) {
    url = canonicalElement.href
}

export function ShareButton({ slug, title }) {
    if (!canUseDom || !navigator.share) {
        return null
    }

    const handleShare = () =>
        navigator.share({
            title,
            // text: 'Check out Web Fundamentals — it rocks!',
            url: url + slug,
        })
    return (
        <ActualShareButton title="share" onClick={handleShare}>
            <ShareIcon icon={faShareAlt} />
        </ActualShareButton>
    )
}
