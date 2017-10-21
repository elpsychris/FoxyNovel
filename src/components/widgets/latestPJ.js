import React from 'react'
import ImageInfoBox from '../common/imageInfoBox'
import {OverlayTrigger, Popover} from 'react-bootstrap'
const ava = require('../images/rezeroIco.png')

const sample_descr = "dolor sit amet, consectetur adipiscing elit.tincidunt quis erat ullamcorper blan" +
        "dit. Etiam eu metus nunc.Duis tortor felis,posuere eu tellus sit amet, convallis" +
        " lobortisenim. Aliquam luctus sem at quam venenatis, quis pulvinar arcu consequa" +
        "t."

const sample_title = "Lorem Ipsum Lorem Ipsum"

export default class WidgetLatestPJ extends React.Component {

    constructor(props) {
        super(props)

        
    }
    render() {
        const popoverBottom = (data) => {
            return (
                <Popover id="popover-positioned-top" title="Synopsis">
                    {data}
                </Popover>
            )
        }
        return (
            <div className="col-sm-4">
                <div className="widget-header">LASTEST</div>
                <div className="widget-body">

                    <div className="container widget-lastest-item">
                        <div className="row">
                            <div className="col-sm-12 title-wrapper">
                                <div className="small-title">
                                    {sample_title}
                                </div>
                            </div>
                            <ImageInfoBox imgUrl={ava} class="col-sm-12 img-wrapper"/>
                            <div className="col-sm-12 info-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-8 push-lg-4 ">
                                            <button className="button2 views">
                                                300</button>
                                            <button className="button2 rating">
                                                4.6</button>
                                            <button className="button2 mess">
                                                15</button>
                                        </div>
                                        <OverlayTrigger
                                            trigger="click"
                                            placement="bottom"
                                            overlay={popoverBottom(sample_descr)}>
                                            <button className="col-md-12 col-lg-4 pull-lg-8 more-wrapper button">
                                                <span
                                                    onClick={((e) => this.btnClickHandler(e)).bind(this)}
                                                    ref={e => this.moreBtn = e}className="button more">Giới thiệu</span>
                                            </button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row descr-wrapper">
                            <span className="small-descr">{sample_descr}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    btnClickHandler = (e) => {
        let target = e.target
        console.log(target.style)
        if (target.style.animation == "") {
            target.style.animation = "ripple 1s ease-out"
        }
    }
}