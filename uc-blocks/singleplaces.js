wp.blocks.registerBlockType("ucblocktheme / singleplaces", {
    title: "Single Place Block",
    edit: function () {
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Place Placeholder")
    },
    save: function () {
        return null
    }
})
