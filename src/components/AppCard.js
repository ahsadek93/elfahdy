import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class AppCard extends Component {
  render() {
    return (
      <div className="p-4 text-center h-100">
        <div className="card p-3 border-primary h-100">
          <div className="cardImgWrapper">
            <img
              className="card-img-top"
              src={this.props.cardData.cardImg}
            ></img>
            {this.props.cardData.isVideo ? (
              <FontAwesomeIcon
                className="playIcon fa-4x"
                icon={faPlay}
              ></FontAwesomeIcon>
            ) : (
              ""
            )}
          </div>
          <div className="card-header align-items-center justify-content-center border-0 pb-0 ">
            <h5>{this.props.cardData.cardTitle}</h5>
            <h6>{this.props.cardData.cardSubtitle}</h6>
          </div>
          <div className="cardBodyWrapper">
            <div className="card-body align-items-center justify-content-center p-0 border-0 ">
              <p className="text-muted ">{this.props.cardData.cardText}</p>
            </div>
          </div>

          {this.props.cardData.isVideo ? (
            ""
          ) : (
            <div className="card-footer p-0 border-0">
              <p className="text-danger ">{this.props.cardData.cardGrade}</p>
              <a className="text-primary h6" href="#">
                {this.props.cardData.cardLinkText}
                <span className="mx-1">
                  <FontAwesomeIcon className="fa-rotate-90 mx-2 align-self-center" icon={faLevelUpAlt}></FontAwesomeIcon>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AppCard;
