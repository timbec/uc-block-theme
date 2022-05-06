
import { ToolbarGroup, ToolbarButton } from "@wordpress/components"
import { RichText, BlockControls } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { handle } from "@wordpress/icons/build-types"


registerBlockType("ucblocktheme/genericheading",
    {
        title: "Main Heading",
        attributes: {
            text: { type: "string" },
            size: { type: "string", default: "large" }
        },
        edit: EditComponent,
        save: SaveComponent
    })

function EditComponent(props) {
    function handleTextChange(x) {
        props.setAttributes({ text: x })
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        isPressed={props.attributes.size = "large"}
                        onClick={() => props.setAttribute({ size: "large" })}>
                        Large
                    </ToolbarButton>
                    <ToolbarButton
                        isPressed={props.attributes.size = "medium"}
                        onClick={() => props.setAttribute({ size: "medium" })}>
                        Medium
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText allowedFormats={[]} tagName="h1" className={`headline headinline--${props.attributes.size}`} value={props.attributes.text} onChange={handleTextChange} />
        </>
    )

}

function SaveComponent(props) {
    function createTagName() {
        switch (props.attributes.size) {
            case "large":
                return "h1"
            case "medium":
                return "h2"
            case "small":
                return "h3"
        }
    }

    return <RichText.Content tagName={createTagName()} value={props.attributes.text} className={`headline headline--${props.attributes.size}`} />
}