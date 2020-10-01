import React from "react";
import { shallow } from "enzyme";

import ShoppingCart from "../components/ShoppingCart";

describe("ShoppingCart", () => {
  let wrapper;
  describe("single item in cart", () => {
    const product = {
      _id: 1,
      title: "Fancy Gentlemans Jacket",
      quantity: 1,
      price: 150,
    };

    beforeEach(() => {
      wrapper = shallow(<ShoppingCart cart={[product]} />);
    });

    it("renders 1 `CartItem` per item in cart", () => {
      expect(wrapper.find("tbody CartItem").length).toBe(1);
    });

    it("has correct total", () => {
      let total = wrapper.find(".total").first();
      expect(total.text()).toEqual("Total: $" + product.price.toFixed(2));
    });

    describe("then adds another item to cart", () => {
      const product2 = {
        _id: 1,
        title: "Fancy Gentlemans Hat",
        quantity: 1,
        price: 95.0,
      };

      beforeEach(() => {
        wrapper = shallow(<ShoppingCart cart={[product, product2]} />);
      });

      it("renders 1 `CartItem` per item in cart", () => {
        expect(wrapper.find("tbody CartItem").length).toBe(2);
      });

      it("has correct total", () => {
        let total = wrapper.find(".total").first();
        expect(total.text()).toEqual(
          "Total: $" + (product.price + product2.price).toFixed(2)
        );
      });
    });
  });
});
