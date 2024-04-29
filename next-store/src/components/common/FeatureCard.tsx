import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { TbRvTruck, TbTruckDelivery, TbTruckLoading } from 'react-icons/tb'
import { FaTruckLoading } from 'react-icons/fa'
import { BsTruck } from 'react-icons/bs'


export default function FeatureCard() {
    return (
        <div>
            <Card className='shadow-none border '>
                <CardContent className='flex gap-2 py-3 px-7  font-medium'>
                    <BsTruck size={22} />
                    <span> Content </span>
                </CardContent>
            </Card>
        </div>
    )
}
