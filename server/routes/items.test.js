const { Item } = require("../models")
const { sequelize } = require("../db");
import 'regenerator-runtime/runtime'
import renderer from 'react-test-renderer';
import Nav from "../../public/react/components/Nav";
import React from "react"
import WelcomeMessage from "../../public/react/components/WelcomeMessage";
import Form from "../../public/react/components/Form";

describe("Model Test", () => {

    beforeEach( async () => {
        await sequelize.sync({ force: true });
        await Item.create({
            title: "Test Item",
            description: "An item to test the funcitonality of this App.",
            price: 67.89,
            category: "Project Tests",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        })
    })

    test("Should Create New Entry", async () => {
        const receivedItem = await Item.findByPk(1);
        expect(receivedItem.title).toBe("Test Item");
    })

    test("Should Update New Entry", async () => {
        const receivedItem = await Item.findByPk(1);
        await receivedItem.update({ category: "New Category" });
        const updatedItem = await Item.findByPk(1)
        expect(updatedItem.category).toBe("New Category");
    })

    test("Should Delete New Entry", async () => {
        const receivedItem = await Item.findByPk(1);
        await receivedItem.destroy();
        const foundItem = await Item.findAll();
        expect(foundItem).toEqual([]);
    })

    test("Should Read New Entry", async () => {
        const receivedItem = await Item.findByPk(1);
        expect(receivedItem.title).toBe("Test Item")
    })
})

describe("React Tests", () => {

    test("Should Render Nav Component", () => {
        const component = renderer.create(<Nav
          />)
          console.log(component)
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot()
    })

    test("Should Render WelcomeMessage Component", () => {
        const component = renderer.create(<WelcomeMessage
          />)
          console.log(component)
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot()
    })

    // test("Should Render Form Component", () => {
    //     const component = renderer.create(<Form
    //       />)
    //       console.log(component)
    //       let tree = component.toJSON();
    //       expect(tree).toMatchSnapshot()
    // })
})