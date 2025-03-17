import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: '무선 블루투스 이어폰',
        price: 59000,
        img: '/01.png',
    },
    { id: 2, name: '게이밍 키보드', price: 79000, img: '/02.png' },
    { id: 3, name: '스마트 워치', price: 129000, img: '/03.png' },
    { id: 4, name: '핸디 청소기', price: 89000, img: '/04.png' },
    { id: 5, name: 'LED 스탠드', price: 35000, img: '/05.png' },
    { id: 6, name: '무선 마우스', price: 29000, img: '/06.png' },
    { id: 7, name: '아이폰 충전 케이블', price: 12000, img: '/07.png' },
    { id: 8, name: 'USB 허브 4포트', price: 22000, img: '/08.png' },
    { id: 9, name: '커피 원두 1kg', price: 45000, img: '/09.png' },
    { id: 10, name: '무드등 가습기', price: 69000, img: '/10.png' },
    { id: 11, name: '라면 5개입', price: 5500, img: '/11.png' },
    { id: 12, name: '고양이 사료 2kg', price: 29000, img: '/12.png' },
];

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
