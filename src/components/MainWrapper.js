import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'

const BackgroundWrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ theme }) => theme.images.mainBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: scroll;
`

const SiteWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor};
  text-align: center;
  padding: 0px 50px;
`

const MainWrapper = ({ children }) => (
  <BackgroundWrapper>
    <SiteWrapper>{children}</SiteWrapper>
  </BackgroundWrapper>
)

MainWrapper.propTypes = {
  children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
}

export default MainWrapper
