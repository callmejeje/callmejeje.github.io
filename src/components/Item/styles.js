import styled from "styled-components";

export const Wapper = styled.li`
  border: 1px solid #000;
`;
export const Header = styled.div`
  height: 268px;
  text-align: center;
  img {
    height: 100%;
  }
`;

export const Main = styled.div`
  margin: 16px;
  h3 {
    margin-bottom: 16px;
    font-size: 1.2rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
`;

export const Bottom = styled.div`
  position: relative;
  padding: 16px;
  border-top: 1px solid #000;
  span {
    display: block;
    font-size: 0.9rem;
    :nth-of-type(1) {
      color: #6300eb;
    }
    :nth-of-type(2) {
      color: #666;
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`;