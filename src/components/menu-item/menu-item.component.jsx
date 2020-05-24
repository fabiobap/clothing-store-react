import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, id, history, linkUrl, match }) => (
    <MenuItemContainer size={size} key={id} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer imageUrl={imageUrl} className='background-image' />
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)
export default withRouter(MenuItem);