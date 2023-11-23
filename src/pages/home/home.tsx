import React, { useState } from "react";
import styles from "./home.module.scss";
import logoSmall from "../../assets/png/logo-small.png";
import headerCar from "../../assets/png/header.png";
import person from "../../assets/png/person.png";
import car from "../../assets/png/car.png";
import framethickbox from "../../assets/png/Frame_Content.png";
import divider from "../../assets/png/divider.png";
function Home() {
  const [members, setMembers] = useState([
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
    {
      name: "Someone name",
      title: "someone title",
      profileImage: person,
    },
  ]);

  return (
    //For now mobile view in progress

    <div className={`gx-0 ${styles.background} `}>
      <div className={`row`}>
        <div className={`col-12`}>
          {
            <div className={`${styles.logoSmall}`}>
              <img alt="" src={logoSmall} />
            </div>
          }

          <div className="w-100 mt-5">
            <img alt="" src={headerCar} className="responsiveImage" />
          </div>
        </div>
      </div>
      <div className={`container-fluid`}>
        <div
          className={`row  ${styles.BlueBg} ${styles.ContainerPadding} ${styles.Margin}`}
        >
          <div className={`col-12 col-sm-12 col-md-6`}>
            <h3>WHAT IS SUPER NODE RACING?</h3>
            <div className="d-flex justify-content-center ">
              <img alt="" src={divider} className={`titleUnderline`} />
            </div>
            <div className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident,sunt in culpa qui officia deserunt mollit
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-6 ${styles.MiddleContent}`}>
            <img alt="" src={car} className="responsiveImage" />
          </div>
        </div>

        <div
          className={`row ${styles.RedBg} ${styles.ContainerPadding} ${styles.Margin} mt-4`}
        >
          <div
            className={`col-12 col-sm-12 col-md-6 ${styles.Chart} ${styles.MiddleContent}`}
          >
            <div className={`${styles.desktopView}`}>
              <img alt="" src={framethickbox} className={`responsiveImage`} />
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-6`}>
            <h3 className="text-center">HOW IS IT DIFFERENT?</h3>
            <div className="d-flex justify-content-center">
              <img alt="" src={divider} className={`titleUnderline`} />
            </div>
            <div className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident,sunt in culpa qui officia deserunt mollit
            </div>
          </div>
          <div
            className={`col-12 col-sm-12 col-md-6 ${styles.Chart}  ${styles.MiddleContent}`}
          >
            <div className={`${styles.mobileView}`}>
              <img alt="" src={framethickbox} className={`responsiveImage`} />
            </div>
          </div>
        </div>

        <div className={`${styles.TeamBg}  ${styles.ContainerPadding} `}>
          <div className={`row ${styles.Margin}`}>
            <div className={`col-12 col-sm-12`}>
              <h3>MEET THE TEAM</h3>
              <div className="d-flex justify-content-center">
                <img alt="" src={divider} className={`titleUnderline`} />
              </div>
            </div>
          </div>

          {
            <div className={`${styles.Team} row `}>
              {members.map((res) => {
                return (
                  <div className={`col-12 col-sm-12 col-md-2 mb-5 `}>
                    <img
                      alt=""
                      src={res.profileImage}
                      className={`responsiveImage ${styles.TeamMemberPhoto}`}
                    />
                    <div className={`${styles.TeamMemberInfo}`}>
                      <p className={`${styles.TeamMemberName}`}>{res.name}</p>
                      <p className={`${styles.TeamMemberTitle}`}>{res.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
