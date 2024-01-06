import { Global } from "@emotion/react";

export const Profile = () => (
    <Global
        styles={`
      .profile-picture {
        border-radius: 100%;
        width: 100px;
        height: 100px;
      }
    `}
    />
)