import React, { useState } from 'react';

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleShowModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Sign In
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-2"/>
                Sign in with Google
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/fluency/24/000000/facebook.png" alt="Facebook" className="mr-2"/>
                Sign in with Facebook
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple" className="mr-2"/>
                Sign in with Apple
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-glyphs/24/000000/twitter--v1.png" alt="X" className="mr-2"/>
                Sign in with X
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios/24/000000/new-post.png" alt="Email" className="mr-2"/>
                Sign in with email
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm">
                No account? <a href="#" className="text-green-600 font-semibold">Create one</a>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Click “Sign in” to agree to our Terms of Service and acknowledge that our Privacy Policy applies to you.
              </p>
            </div>
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
