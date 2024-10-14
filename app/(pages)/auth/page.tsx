import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OverLay from "./OverLay";

const PagesManifestPlugin = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center bg-gray-100">
      <div className="container relative bg-white rounded-lg shadow-lg w-[768px] max-w-full min-h-[480px] overflow-hidden">
        <SignIn />
        <SignUp />
        <OverLay />
      </div>
    </div>
  );
};

export default PagesManifestPlugin;
