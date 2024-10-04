'use client'

import { error } from "console"
import PropertyListItem from "./PropertyListItem"
import { useState, useEffect } from "react"
import apiService from "@/app/services/apiService"

export type PropertyType = {
    id: string,
    title: string,
    image_url: string,
    price_per_night: number,
}

const PropertyList = () => {
    const [properties,setProperties] = useState<PropertyType[]>([])

    const getProperties = async() => {
        const tmpProperties = await apiService.get('/api/properties')

        setProperties(tmpProperties.data)
    }

    useEffect(() => {
        apiService.get('/api/properties')

        getProperties()
    },[])

    return(
        <>
            {properties.map((property) => {
                return (
                    <PropertyListItem
                    key={property.id}
                    property={property}
                    />
                )
            })}

        </>
    )
}

export default PropertyList