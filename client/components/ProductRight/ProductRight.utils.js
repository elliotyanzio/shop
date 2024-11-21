export const formatSpecifications = (productData) => ([
    {
        title: 'Brand',
        value: productData.brand
    },
    {
        title: 'Item Weight (g)',
        value: productData.weight
    },
    {
        title: 'Dimension (cm)',
        value: `${productData.height} x ${productData.length}`
    },
    {
        title: 'Item Model number',
        value: productData.model_code
    },
    {
        title: 'Colour',
        value: productData.colour
    },
])