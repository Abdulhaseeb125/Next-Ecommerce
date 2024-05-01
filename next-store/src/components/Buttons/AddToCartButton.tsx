"use client";
import React from 'react'
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartWithButton } from '@/store/Slices/CartSlice';
import { useSession } from 'next-auth/react';

export default function AddToCartButton({ product }: any) {
    const products = useSelector((state: any) => state.cart)
    const session = useSession();
    const dispatch = useDispatch();
    return (
        <div>
            <Button size="lg"
                onClick={() => {
                    dispatch(addToCartWithButton({ product: product, userID: session.data?.user?.id }))
                }}
            >Add to Cart</Button>
        </div>
    )
}
