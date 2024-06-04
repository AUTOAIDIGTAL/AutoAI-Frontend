"use client";
import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const CommentInput = () => {
  return (
    <>
      <div className="comment-input ">
        <input
          className="form-control"
          type="text"
          placeholder="Type Comment"
          aria-label="Type Comment"
        />
        <button type="button" className="btn text-primary border-0">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9912 6.01009L5.39919 10.5631L9.59419 12.9911L13.2932 9.29109C13.4808 9.10358 13.7353 8.99829 14.0005 8.99839C14.2658 8.99848 14.5202 9.10395 14.7077 9.29159C14.8952 9.47923 15.0005 9.73367 15.0004 9.99894C15.0003 10.2642 14.8948 10.5186 14.7072 10.7061L11.0072 14.4061L13.4372 18.6001L17.9912 6.01009ZM18.3142 3.76609C19.5092 3.33309 20.6672 4.49109 20.2342 5.68609L14.9522 20.2911C14.5182 21.4891 12.8822 21.6351 12.2432 20.5321L9.02619 14.9741L3.46819 11.7571C2.36519 11.1181 2.51119 9.48209 3.70919 9.04809L18.3142 3.76609Z"
              fill="#1474FB"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CommentInput;
