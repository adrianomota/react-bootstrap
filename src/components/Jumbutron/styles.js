import styled from 'styled-components';
import bootImage from '../../assets/boatImage.jpg';

export const Header = styled.div`
  .jumbo {
    background: url(${bootImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
