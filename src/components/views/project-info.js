import React from "react"
import ImageInfoBox from "../common/imageInfoBox";

const ava = require('../images/rezeroIco.png')
const sample_name = "Dolor sit amet, consectetur adipiscing elit.tincidunt quis erat ullamcorper blan" +
        "dit. Etiam eu metus nunc.Duis tortor felis,posuere eu tellus sit amet, convallis"
const sample_author = "Dolor sit. Amet"
const sample_desr = "Dolor sit amet, consectetur adipiscing elit.tincidunt quis erat ullamcorper blan" +
        "dit. Etiam eu metus nunc.Duis tortor felis,posuere eu tellus sit amet, convallis" +
        " lobortisenim. Aliquam luctus sem at quam venenatis, quis pulvinar arcu consequa" +
        "t."
const sample_vol_prefix = "Volume "
const sample_vol = [{
    volumeNum: "1",
    volumeName: "Dolor sit amet, consectetur adipiscing elit.",
    chapters: [
        "Interlude: Dolor sit amet, consectetur adipiscing elit.",
        "Chapter 1: Etiam eu metus nunc",
        "Chapter 2: Aliquam luctus sem at quam venenatis"
    ]
}]
const sample_chapter = [
    
]
export default class ProjectInfo extends React.Component {
    render() {
        return (
            <div className="project-info">
                <div className="project-header">
                    <div className="project-info-attr project-ava">
                        <ImageInfoBox imgUrl={ava}></ImageInfoBox>
                    </div>
                    <div className="project-info-attr project-name">{sample_name}</div>
                    <div className="project-info-attr project-author">{sample_author}</div>
                    <div className="project-info-attr project-desr">{sample_desr}</div>
                </div>
                <div className="project-body">
                    {sample_vol.map(volume => (
                        <div key={volume.volumeNum} className="volume">
                            <div className="volume-name">
                                <span className="volume-short-name">{sample_vol_prefix.concat(volume.volumeNum)}</span>
                                <span className="volume-long-name">{volume.volumeName}</span>
                            </div>
                            <div className="volume-chapters">
                                {volume.chapters.map(chapter => (
                                    <div className="chapter"></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
