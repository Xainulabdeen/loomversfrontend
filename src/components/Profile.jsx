import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/profile/', { withCredentials: true })
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
        <p><strong>Username:</strong> {profile.user.username}</p>
        <p><strong>Email:</strong> {profile.user.email}</p>
        <p><strong>Credits:</strong> {profile.credits}</p>
        <p><strong>Subscription Type:</strong> {profile.subscription_type}</p>
      </div>
    </div>
  );
};

export default Profile;
