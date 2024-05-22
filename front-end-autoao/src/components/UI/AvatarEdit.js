import React, { useRef } from 'react';
import Image from 'next/image';

const AvatarEdit = ({ size }) => {
  let avatarSizeClass = '';
  switch (size) {
    case 'avatar-sm':
      avatarSizeClass = 'sm';
      break;
    case 'avatar-md':
      avatarSizeClass = 'md';
      break;
    case 'avatar-lg':
      avatarSizeClass = 'lg';
      break;
    case 'avatar-xl':
      avatarSizeClass = 'xl';
      break;
    default:
      avatarSizeClass = 'avatar-lg'; // Default size
  }

  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle the file upload logic here
  };

  return (
    <>
      <div className={`avatar position-relative ${avatarSizeClass}`}>
        <Image
          src="/assets/images/login/feature.png"
          width={50}
          height={57}
          alt="avatar"
          priority
        />
        <div className="update-img position-absolute" onClick={handleEditClick}>
          <i className="icon-pencil"></i>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
    </>
  );
};

export default AvatarEdit;
