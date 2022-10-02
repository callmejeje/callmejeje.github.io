import styled from "styled-components";

export const Container = styled.section`
  font-size: 1rem;
  margin-right: 50px;
  h1 {
    width: 200px;
    font-size: 1.1rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }
  ul {
    margin-top: 10px;
    li {
      line-height: 25px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    margin-right: 0;
    h1 {
      display: none;
    }
    ul {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      padding: 9px 1.45rem 7px 1.45rem;
      overflow-x: auto;
      overflow-y: hidden;
      height: 45px;
      white-space: nowrap;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        display: inline-block;
        margin-right: 15px;
        :last-child {
          margin-right: 0;
        }
        .count {
          display: none;
        }
      }
    }
  }
`;
