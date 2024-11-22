import { formatSpecifications } from "./ProductRight.utils";
import { mockProducts } from '../../test/product.test';

const expectedSpecifications = [
    {
        title: 'Brand',
        value: 'Philips'
    },
    {
        title: 'Item Weight (g)',
        value: 77
    },
    {
        title: 'Dimension (cm)',
        value: '12.6 x 6.2 x 6.2'
    },
    {
        title: 'Item Model number',
        value: "E27 ES"
    },
    {
        title: 'Colour',
        value: "Cool daylight"
    },
]

describe('formatSpecifications tests', () => {
    it('Should return the expect specifications', () => {
        const specifications = formatSpecifications(mockProducts.allProducts[0])
        expect(specifications).toStrictEqual(expectedSpecifications)
    })
})