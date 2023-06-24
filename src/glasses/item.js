import React, { Component } from "react";

export default class Item extends Component {
    render() {
        const { item, getDetailItem } = this.props;
        return (
            <div className="col-2 mb-4">
                <div
                    className="item"
                    onClick={() => {
                        getDetailItem(item);
                    }}
                    style={{
                        backgroundImage: `url(./glassesImage/g${item.id}.jpg)`,
                    }}
                ></div>
            </div>
        );
    }
}
