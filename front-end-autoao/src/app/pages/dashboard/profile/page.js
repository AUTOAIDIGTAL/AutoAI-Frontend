"use client";
import PreHeader from "@/app/components/PreHeader/PreHeader";
import NavBar from "../../../components/SideNavBar/NavBar";
import EditProfile from "./editProfile/editProfile";
import ChangePassword from "./changePassword/changePassword";
import ChangePasswordNew from "./changePassword/changePasswordNew";
import OTP from "./changePassword/OTP";
import { Button, ListGroup } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <PreHeader />
        <div className="ai-box min-screen-layout mt-3 p-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fs-3 fw-medium">Profile Information</div>
            <EditProfile />
          </div>
          <div className="flex-1 my-4  overflow-auto">
            <ListGroup variant="flush">
              <ListGroup.Item className="px-0 py-3 d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Full Name</div>
                <div className="fs-6 fw-medium text-dark">
                  Raul Jaskolski IV
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3 d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Email Address</div>
                <div className="fs-6 fw-medium text-muted d-flex align-items-center gap-2">
                  <svg
                    width={16}
                    height={12}
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5938 0.375H1.40625C0.632438 0.375 0 1.00466 0 1.78125V10.2188C0 10.9956 0.632844 11.625 1.40625 11.625H14.5938C15.3676 11.625 16 10.9953 16 10.2188V1.78125C16 1.00447 15.3673 0.375 14.5938 0.375ZM14.3778 1.3125C13.9232 1.76866 8.58266 7.12656 8.36325 7.34669C8.18 7.5305 7.82009 7.53062 7.63675 7.34669L1.62219 1.3125H14.3778ZM0.9375 10.0464V1.95359L4.97078 6L0.9375 10.0464ZM1.62219 10.6875L5.63263 6.664L6.97278 8.00853C7.52197 8.5595 8.47825 8.55928 9.02725 8.00853L10.3674 6.66403L14.3778 10.6875H1.62219ZM15.0625 10.0464L11.0292 6L15.0625 1.95359V10.0464Z"
                      fill="#1474FB"
                    />
                  </svg>
                  Abbie_Mitchell47@gmail.com
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3 d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Number</div>
                <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5146 16C8.70972 16 5.71444 14.9693 3.3725 12.6275C1.03447 10.2894 0 7.29613 0 4.48541C0 2.00825 2.00413 0 4.48541 0C4.67709 0 4.84944 0.116687 4.92063 0.294656L6.92897 5.3155C7.02513 5.55587 6.90822 5.82866 6.66787 5.92481L4.46172 6.80725C4.61778 9.34531 6.65509 11.3825 9.19275 11.5383L10.0752 9.33219C10.1712 9.09222 10.4438 8.97487 10.6845 9.07106L15.7053 11.0794C15.8833 11.1506 16 11.3229 16 11.5146C16 13.9918 13.9959 16 11.5146 16ZM4.17344 0.950938C2.37819 1.10628 0.9375 2.61172 0.9375 4.48541C0.9375 7.31066 2.03769 9.96681 4.03544 11.9645C6.03316 13.9623 8.68931 15.0625 11.5146 15.0625C13.3877 15.0625 14.8936 13.6226 15.0491 11.8266L10.7716 10.1156L9.94147 12.1908C9.87031 12.3687 9.69794 12.4854 9.50625 12.4854C6.20222 12.4854 3.51459 9.79778 3.51459 6.49425C3.51459 6.30259 3.63128 6.12969 3.80925 6.05853L5.88444 5.22844L4.17344 0.950938Z"
                      fill="#1474FB"
                    />
                  </svg>
                  968-885-5212
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3 d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Address</div>
                <div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00016 0C4.805 0 2.20557 2.59944 2.20557 5.79456C2.20557 9.75981 7.39116 15.581 7.61194 15.8269C7.81932 16.0579 8.18138 16.0575 8.38838 15.8269C8.60916 15.581 13.7948 9.75981 13.7948 5.79456C13.7947 2.59944 11.1953 0 8.00016 0ZM8.00016 14.679C6.25494 12.606 3.24907 8.516 3.24907 5.79462C3.24907 3.17481 5.38038 1.0435 8.00016 1.0435C10.6199 1.0435 12.7513 3.17481 12.7513 5.79459C12.7512 8.51609 9.74582 12.6053 8.00016 14.679Z"
                      fill="#1474FB"
                    />
                    <path
                      d="M7.99985 2.87918C6.39229 2.87918 5.08447 4.18702 5.08447 5.79459C5.08447 7.40215 6.39232 8.70999 7.99985 8.70999C9.60738 8.70999 10.9152 7.40215 10.9152 5.79459C10.9152 4.18702 9.60738 2.87918 7.99985 2.87918ZM7.99985 7.66649C6.96766 7.66649 6.12797 6.82677 6.12797 5.79459C6.12797 4.7624 6.96769 3.92268 7.99985 3.92268C9.032 3.92268 9.87172 4.7624 9.87172 5.79459C9.87172 6.82677 9.032 7.66649 7.99985 7.66649Z"
                      fill="#1474FB"
                    />
                  </svg>
                  Address Here
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3 d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Password</div>
                <div className="fs-6 fw-medium text-dark">
                  <ChangePassword />
                </div>
              </ListGroup.Item>
            </ListGroup>
            <div className="bg-primary-subtle gap-2 py-3 px-4 rounded d-flex justify-content-center align-items-center">
              <OTP />
              <ChangePasswordNew />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center top-white-shadow">
            <Button variant="outline-secondary" className="py-2">
              Go Back
            </Button>
            <Button variant="outline-danger" className="py-2">
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
