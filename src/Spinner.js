import "./global.css";
import Loader from "react-loader-spinner";
import "./global.css";
import styled from "styled-components";

function Spinner() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <ContainerLoader>
      <Loader
        type={"Puff"}
        color={"#00BFFF"}
        height={100}
        width={100}
        timeout={300} // 30 seconds
      />
      <div>
        <p>Success!</p>
        <button onClick={reloadPage}>Ok!</button>
      </div>
    </ContainerLoader>
  );
}

const ContainerLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Spinner;
