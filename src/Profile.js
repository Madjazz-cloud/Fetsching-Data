import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const profileQuery = gql`
  {
    github {
      user(username: "madjazz-cloud") {
        login
        avatar_url
      }
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(profileQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.github.user.login}
      <img src={data.github.user.avatar_url} />
    </div>
  );
}
export default Profile;
