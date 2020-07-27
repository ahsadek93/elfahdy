import React, { Component } from "react";
import HeaderNav from "./../components/HeaderNav";
import AppCarousel from "./../components/AppCarousel";
import AppFooter from "./../components/AppFooter";

import card101 from "./../assets/card101.png";
import card102 from "./../assets/card102.png";
import card103 from "./../assets/card103.png";
import card104 from "./../assets/card104.png";
import card201 from "./../assets/card201.png";
import card202 from "./../assets/card202.png";
import card203 from "./../assets/card203.png";
import card204 from "./../assets/card204.png";
import card301 from "./../assets/card301.png";
import card302 from "./../assets/card302.png";
import card303 from "./../assets/card303.png";
import card304 from "./../assets/card304.png";

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cardDataSection1: [
            {
              cardImg: card101,
              cardTitle: "Class Cancelled This Sunday!",
              cardSubtitle: "",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "Read More",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card102,
              cardTitle: "Ramadan Schedule",
              cardSubtitle: "",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "Read More",
              cardLink: "",
              isVideo: false,
            },
    
            {
              cardImg: card103,
              cardTitle: "Next Week Quiz",
              cardSubtitle: "",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "Read More",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card104,
              cardTitle: "Online Session Next Sunday!",
              cardSubtitle: "",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "Read More",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card102,
              cardTitle: "Ramadan Schedule",
              cardSubtitle: "",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "Read More",
              cardLink: "",
              isVideo: false,
            },
          ],
          cardDataSection2: [
            {
              cardImg: card201,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "70/100",
              cardLinkText: "View Results",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card202,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "Expire 20/08/2020",
              cardLinkText: "Start Homework",
              cardLink: "",
              isVideo: false,
            },
    
            {
              cardImg: card203,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "50/100",
              cardLinkText: "View Results",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card204,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "Expire 05/09/2020",
              cardLinkText: "Start Homework",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card202,
              cardTitle: "Ramadan Schedule",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "Expire 05/01/2020",
              cardLinkText: "Start Homework",
              cardLink: "",
              isVideo: false,
            },
          ],
          cardDataSection3: [
            {
              cardImg: card201,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "70/100",
              cardLinkText: "View Results",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card202,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "Expire 20/08/2020",
              cardLinkText: "Start Quizz",
              cardLink: "",
              isVideo: false,
            },
    
            {
              cardImg: card203,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "50/100",
              cardLinkText: "View Results",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card204,
              cardTitle: "Title!",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "Expire 05/09/2020",
              cardLinkText: "Start Quizz",
              cardLink: "",
              isVideo: false,
            },
            {
              cardImg: card202,
              cardTitle: "Ramadan Schedule",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "Expire 05/01/2020",
              cardLinkText: "Start Quizz",
              cardLink: "",
              isVideo: false,
            },
          ],
          cardDataSection4: [
            {
              cardImg: card301,
              cardTitle: "Title",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "",
              cardLink: "",
              isVideo: true,
            },
            {
              cardImg: card302,
              cardTitle: "Title",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "",
              cardLink: "",
              isVideo: true,
            },
            {
              cardImg: card303,
              cardTitle: "Title",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "",
              cardLink: "",
              isVideo: true,
            },
            {
              cardImg: card304,
              cardTitle: "Title",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "",
              cardLink: "",
              isVideo: true,
            },
            {
              cardImg: card302,
              cardTitle: "Title",
              cardSubtitle: "Subtitle",
              cardText:
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              cardGrade: "",
              cardLinkText: "",
              cardLink: "",
              isVideo: true,
            },
          ],
        };
      }



  render() {
    return (
      <div className="overview">
        <HeaderNav />
        <div className="headerMargin"></div>
        <AppCarousel
          carouselTitle="Announcement"
          cardData={this.state.cardDataSection1}
        />
        <AppCarousel
          carouselTitle="Recent Homeworks"
          cardData={this.state.cardDataSection2}
        />
        <AppCarousel
          carouselTitle="Recent Quizzes"
          cardData={this.state.cardDataSection3}
        />
        <AppCarousel
          carouselTitle="Recent Videos"
          cardData={this.state.cardDataSection4}
        />
        <AppFooter />
      </div>
    );
  }
}

export default Overview;
