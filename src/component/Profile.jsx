import React, { useContext,  } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router';

const Profile = () => {
  const { user } = useContext(AuthContext);

//   const [name, setName] = useState(user?.displayName || '');
//   const [photo, setPhoto] = useState(user?.photoURL || '');
//   const [message, setMessage] = useState('');

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: photo
//       });
//       setMessage('Profile updated successfully!');
//     } catch (err) {
//       setMessage('Error updating profile: ' + err.message);
//     }
//   };

  return (
    <div className="w-full max-w-md mx-auto my-10 p-6 border shadow-md rounded-lg bg-white">
      <div className="text-center mb-6">
        <div className="avatar mb-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL || 'https://via.placeholder.com/150'} alt="User Avatar" />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Hello, {user?.displayName || 'User'}!</h2>
        <p className="text-sm text-gray-500">{user?.email}</p>
        <Link to={'/profileupdate'}> <button className='btn bg-blue-500 text-white  text-center mt-5'> Update Profile</button></Link>
       
        </div>
      </div>

     
  );
};

export default Profile;
