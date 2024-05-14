"use client";
import { useEffect, useState } from "react";
import UserContent from "./user-content/user-content";
import { usePathname } from "next/navigation";
import { linksMap, rolesMap } from "@/constants/user";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const PreHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const pathName = usePathname();
  // pathName', pathName);

  const { user: currentUser } = useCurrentUser();

  useEffect(() => {
    // currentUser', currentUser);
    for (const key in linksMap) {
      if (linksMap[key].link == pathName && pathName != "/profile") {
        // here', linksMap[key].title)
        setPageTitle(linksMap[key].title);
      } else if (currentUser?.roles.includes("SUPER_ADMIN")) {
        setPageTitle(
          `Welcome ${currentUser?.firstName} ${currentUser?.lastName}`
        );
      } else if (
        pathName == "/profile" &&
        !currentUser?.roles.includes("SUPER_ADMIN")
      ) {
        setPageTitle(
          `Welcome ${currentUser?.firstName} ${currentUser?.lastName}`
        );
      }
    }

    if (sidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [sidebarOpen, currentUser, pathName]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <button className="btn btn-link p-0 pe-2" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="30px"
            height="30px"
          >
            <g
              fill="#010101"
              fillRule="nonzero"
              stroke="none"
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              strokeDasharray=""
              strokeDashoffset={0}
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.33333,5.33333)">
                <path d="M6,22h36v4h-36zM6,10h36v4h-36zM6,34h36v4h-36z" />
              </g>
            </g>
          </svg>
        </button>
        <div className="fs-1 fw-bold">{pageTitle}</div>
      </div>
      <UserContent />
    </div>
  );
};

export default PreHeader;
