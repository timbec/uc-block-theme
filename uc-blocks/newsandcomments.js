/**
 * News and Comments Block
 * outputs last three news posts and last three comments (Comments might become a seperate block, with custom API query)
 * 
 */

wp.blocks.registerBlockType("ucblocktheme/newsandcomments", {
    title: "News and Comments Excerpts",
    supports: {
        align: ["full"]
    },
    edit: function () {
        return wp.element.createElement("div", { className: "uc-placeholder-block" }, "This is a placeholder")
    },
    // since this will be 100% PHP
    save: function () {
        return null
    }
})