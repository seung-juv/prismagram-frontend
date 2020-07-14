import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  * {
    box-sizing: border-box;
  }
  body {
    color: ${props => props.theme.blackColor};
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
  button {
    background: 0 0;
    border: 0;
    cursor: pointer;
  }
`;
