"use client";
import { Badge, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="bg-white p-3 rounded-3">
       {[...Array(3).keys()].map((index) => (
        <div className="my-2 list-group list-group-flush-wrap list-group-horizontal-xxl" key={index}>
          <div className="list-group-item w-xl-25">
            <div className="mb-2">Date</div>
            <div className="text-muted d-flex gap-2 align-items-center">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
                  fill="#1474FB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 3C7.77614 3 8 3.22386 8 3.5V8.70984L11.2481 10.5659C11.4878 10.7029 11.5711 11.0083 11.4341 11.2481C11.2971 11.4878 10.9917 11.5711 10.7519 11.4341L7.25193 9.43412C7.09614 9.3451 7 9.17943 7 9V3.5C7 3.22386 7.22386 3 7.5 3Z"
                  fill="#1474FB"
                />
              </svg>
              12-04-2024
            </div>
          </div>
          <div className="list-group-item flex-1">
            <div className="mb-2">Jobs Done</div>
            <div className="text-muted d-flex flex-wrap gap-2 align-items-center">
              <Badge bg="light" className="fw-normal rounded-ai fs-6">
              Break Service
              </Badge>
              <Badge bg="light" className="fw-normal rounded-ai  fs-6">
              Break Service
              </Badge>
              <Badge bg="light" className="fw-normal rounded-ai  fs-6">
              Break Service
              </Badge>
              <Badge bg="light" className="fw-normal rounded-ai  fs-6">
              Break Service
              </Badge>
            </div>
          </div>
          <div className="list-group-item w-xl-25">
          <div className="mb-2">Mechanic</div>
            <div className="text-muted d-flex gap-2 align-items-center">
              Mechanic Name Here
            </div>
          </div>
        </div>
       ))}
    </div>
  );
};

export default NavBar;
