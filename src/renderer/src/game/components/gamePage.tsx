import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();

  function testBackButtonClick() {
    navigate("/");
  }
  return (
    <div>
      <button
        className="test_back_button"
        onClick={testBackButtonClick}
      >
        Back
      </button>
    </div>
  );
};

export default GamePage;
