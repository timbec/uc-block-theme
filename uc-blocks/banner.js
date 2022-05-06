import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useEffect } from "@wordpress/element"


registerBlockType("ucblocktheme/banner", {
    title: "Banner",
    supports: {
        align: ["full"]
    },
    attributes: {
        align: { type: "string", default: "full" },
        imgID: { type: "number" },
        imgURL: { type: "string" }
    },
    edit: EditComponent,
    save: SaveComponent
})


function EditComponent(props) {

    useEffect(
        function () {
            if (props.attributes.imgID) {
                console.log(props.attributes.imgID);
                async function go() {
                    const response = await apiFetch({
                        path: `/wp/v2/media/${props.attributes.imgID}`,
                        method: "GET"
                    })
                    console.log(response);
                    props.setAttributes({ imgURL: response.media_details.sizes.medium_large.source_url })
                }
                go()
            }
        }, [props.attributes.imgId])

    function onFileSelect(x) {
        props.setAttributes({ imgID: x.id })
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload onSelect={onFileSelect}
                                value={props.attributes.imgID}
                                render={({ open }) => {
                                    return <Button onClick={open}>Choose Image</Button>
                                }} />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <header className="page-banner">
                <h1>Edit Component function in banner block</h1>

                <div className="page-banner__bg-image" style={{ backgroundImage: `url('${props.attributes.imgURL}')` }}></div>
                <div className="page-banner__content container t-center c-white">
                    <InnerBlocks allowedBlocks={["ucblocktheme/genericheading", "ourblocktheme/genericbutton"]} />
                </div>
            </header>
        </>
    )

}


function SaveComponent() {
    return <InnerBlocks.Content />

}