import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center  w-1/2">
        <h1 className="text-[10rem] font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-customBlack mb-1">
          Page Not Found
        </h2>
        <p className="text-customBlack mb-6">
          The page you{"'"}re looking for doesn{"'"}t exist or has been moved.
        </p>
        <Link to="/" className="text-customGreen hover:underline text-lg">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
