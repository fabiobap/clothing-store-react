import React from 'react'

import {CartItemContainer, ItemDetailsContainer, NameContainer, ImageContainer} from './cart-item.styles';
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span className='price'>${price}</span>
            <span className='quantity'>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;