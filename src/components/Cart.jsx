import React, { useState } from 'react';

const Cart = ({ cart, setCart }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

    const priceFormatted = (price) => {
        return price.toLocaleString();
    };

    const handlePurchase = () => {
        alert('결제가 완료되었습니다.');
        setCart([]);
    };

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>장바구니</h2>
                <div onClick={toggleCart}>{isOpen ? '▲' : '▼'}</div>
            </div>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                isOpen &&
                cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.img} alt={item.name} />
                        <span>{item.name}</span>
                        <span>₩{priceFormatted(item.price}</span>
                    </div>
                ))
            )}
            {totalPrice > 0 && <div className="price-item">합계 금액 : {priceFormatted(totalPrice)} 원</div>}
            <button onClick={handlePurchase} disabled={cart.length === 0}>
                결제하기
            </button>
        </div>
    );
};

export default Cart;
