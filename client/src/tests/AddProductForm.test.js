import React from "react";
import { mount } from "enzyme";

import AddProductForm from "../components/AddProductForm";

describe("AddProductForm", () => {
  let wrapper;

  describe("empty form inputs", () => {
    beforeEach(() => {
      wrapper = mount(<AddProductForm />);
    });

    it("has title input", () => {
      expect(wrapper.find('[name="title"]').length).toBe(1);
    });

    it("has price input", () => {
      expect(wrapper.find('[name="price"]').length).toBe(1);
    });

    it("has quantity input", () => {
      expect(wrapper.find('[name="quantity"]').length).toBe(1);
    });

    describe("then fill in inputs", () => {
      const title = "Fancy Gentlemans Jacket";
      const price = "150.00";
      const quantity = "2";

      it("state reflects `onChange` for `title` input", () => {
        let input = wrapper.find('[name="title"]').first();
        input.simulate("change", {
          target: {
            name: "title",
            value: "Fancy Gentlemans Jacket",
          },
        });
        expect(wrapper.find('[name="title"]').props().value).toEqual(title);
      });

      it("state reflects `onChange` for `price` input", () => {
        let input = wrapper.find('[name="price"]').first();
        input.simulate("change", {
          target: {
            name: "price",
            value: "150.00",
          },
        });
        expect(wrapper.find("[name='price']").prop("value")).toEqual(price);
      });

      it("state reflects `onChange` for `quantity` input", () => {
        let input = wrapper.find('[name="quantity"]').first();
        input.simulate("change", {
          target: {
            name: "quantity",
            value: "2",
          },
        });
        expect(wrapper.find("[name='quantity']").prop("value")).toEqual(
          quantity
        );
      });

      describe("then submit form", () => {
        it("`onAddProduct` is called", () => {
          const func = jest.fn();
          wrapper = mount(<AddProductForm onAddProduct={func} />);
          wrapper
            .find(".button")
            .last()
            .simulate("click", { preventDefault: () => {} });
          expect(func.mock.calls.length).toBe(1);
        });

        it("`onAddProduct` is passed new product", () => {
          const func = jest.fn();
          wrapper = mount(<AddProductForm onAddProduct={func} />);
          wrapper
            .find(".button")
            .last()
            .simulate("click", { preventDefault: () => {} });
          const product = {
            title: wrapper.find("[name='title']").prop("value"),
            price: wrapper.find("[name='price']").prop("value"),
            quantity: wrapper.find("[name='quantity']").prop("value"),
          };
          expect(func.mock.calls[0][0]).toEqual(product);
        });

        it("state is emptied", () => {
          const fields = { title: "", price: "", quantity: "" };
          wrapper = mount(<AddProductForm onAddProduct={() => {}} />);
          wrapper.find(".button").first().simulate("click");
          const product = {
            title: wrapper.find("[name='title']").prop("value"),
            price: wrapper.find("[name='price']").prop("value"),
            quantity: wrapper.find("[name='quantity']").prop("value"),
          };
          expect(product).toEqual(fields);
        });
      });
    });
  });
});
