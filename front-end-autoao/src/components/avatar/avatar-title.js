import React from 'react';

const AvatarTitle = () => {
  return (
    <div className="d-flex align-items-center">
        <div className="avatar-wrapper m-0 d-flex align-items-center gap-2">
          <img src={'https://randomuser.me/api/portraits/men/1.jpg'}  className="avatar rounded-circle" />
          <div className='fs-6 text-dark'>Name Here</div>
        </div>
    </div>
  );
};

export default AvatarTitle;
