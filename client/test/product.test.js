import { render, fireEvent, waitFor } from "@testing-library/react";
import Product from "../pages/product";
import React from 'react'
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const mockProducts = {
  "allProducts": [
    {
      "id": "1",
      "name": "Energy saving light bulb",
      "power": "25W",
      "description": "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
      "price": 1299,
      "quantity": 4,
      "brand": "Philips",
      "weight": 77,
      "height": 12.6,
      "length": 6.2,
      "colour": "Cool daylight",
      "img_url": "https://i.ibb.co/2nzwxnQ/bulb.png",
      "model_code": "E27 ES"
    }
  ]
}

describe('Product component tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          data: mockProducts
        }),
      })
    );
  })

  test("should be able to increase and decrease product quantity", async () => {
    const { getByText, getByTitle } = render(<ThemeProvider theme={theme}><Product /></ThemeProvider>);

    const increaseQuantity = await waitFor(() => getByText("+"));

    const currentQuantity = getByTitle("Current quantity");
    expect(currentQuantity).toHaveTextContent("1");

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent("2");

    const decreaseQuantity = getByText("-");

    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent("1");
  });

  test("should be able to add items to the basket", async () => {
    const { getByText, getByTitle } = render(<ThemeProvider theme={theme}><Product /></ThemeProvider>);

    const increaseQuantity = await waitFor(() => getByText("+"));

    const currentQuantity = getByTitle("Current quantity");

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent("4");

    const addToBasketElement = getByText("Add to cart");
    fireEvent.click(addToBasketElement);

    const basketItems = getByTitle("Basket items");
    expect(basketItems).toHaveTextContent("4");
  });
})

