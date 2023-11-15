import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import CartModal from '../../UI/Modal/CartModal';
import CartContext from '../../../store/cart-context';
import CartItem from './CartItem';

const DUMMY_CART = [
  {
    id: 'c1',
    name: '스시',
    amount: 2,
    price: 46000,
  },
  {
    id: 'c2',
    name: '치즈버거',
    amount: 1,
    price: 12000,
  },
];

const Cart = ({ onClose }) => {
  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  const { items, totalPrice } = useContext(CartContext);

  return (
    <CartModal onClose={onClose}>
      {/* 주문내역 */}
      <ul className={cartItemStyle}>
        {items.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cart={cartItem}
          />
        ))}
      </ul>
      <div className={total}>
        <span>주문총액</span>
        <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
      </div>
      <div className={actions}>
        <button
          className={btnAlt}
          onClick={onClose}
        >
          닫기
        </button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;
