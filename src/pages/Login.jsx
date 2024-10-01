import { useState } from 'react'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [name1, setName1] = useState(""); 
  const [name2, setName2] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleButtonClick = (e) => {
    if (name1 === "" || name2 === "") {
      e.preventDefault();
      setErrorMessage("Both names must be filled out."); 
    } else {
      setErrorMessage(""); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-700 to-green-900">
      <h1 className="text-4xl font-bold text-white mb-8"> Welcome</h1>
      
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            First Name:
            <input 
              type="text" 
              value={name1} 
              onChange={(e) => setName1(e.target.value)} 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Second Name:
            <input 
              type="text" 
              value={name2} 
              onChange={(e) => setName2(e.target.value)} 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <Link 
          to="/screens" 
          state={{ name1, name2 }} 
          onClick={handleButtonClick}
          className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Start Chat
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
