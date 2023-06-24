import React, { Component } from "react";
import data from "./dataGlasses.json";
import Item from "./item";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listGlasses: data,
            chooseItem: data[0],
        };
    }

    // Nhận item từ Item
    handleDetailItem = (item) => {
        this.setState({ chooseItem: item });
    };

    renderList() {
        const { listGlasses } = this.state;
        return listGlasses.map((item) => {
            return (
                <Item
                    item={item}
                    key={item.id}
                    getDetailItem={this.handleDetailItem}
                />
            );
        });
    }

    renderFace() {
        const { chooseItem } = this.state;
        return (
            <div className="row render-glasses">
                <div className="col-6">
                    <div className="face-glasses">
                        <img src="./glassesImage/model.jpg" alt="" />
                        <div className="overlay">
                            <img src={chooseItem.url} alt="" />
                            <div className="label">
                                <h3 className="title">{chooseItem.name}</h3>
                                <p className="desc">{chooseItem.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="face">
                        <img src="./glassesImage/model.jpg" alt="" />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="content container mt-5">
                {/* Render Face */}
                {this.renderFace()}

                <div className="list-glasses mt-5">
                    {/* List Glasses  */}
                    <div className="row">{this.renderList()}</div>
                </div>
            </div>
        );
    }
}
