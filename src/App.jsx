import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (cart.length > 8) {
            return alert('장바구니에 담을 수 있는 상품은 최대 8개입니다.');
        }
        setCart([...cart, product]);
    };

    return (
        <>
            <div className="container">
                <ProductList addToCart={addToCart} />
            </div>
            <Cart cart={cart} setCart={setCart} />
        </>
    );
};

export default App;
