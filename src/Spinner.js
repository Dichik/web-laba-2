import './App.css'
import Loader from 'react-loader-spinner'
import './App.css'
import styled from 'styled-components';

function Spinner() {
    return (
        <ContainerLoader>
            <Loader
                type={"Puff"}
                color={"#00BFFF"}
                height={100}
                width={100}
                timeout={3000} // 30 seconds
            />
        </ContainerLoader>
    );
}

const ContainerLoader = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default Spinner;