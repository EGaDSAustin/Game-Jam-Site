import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    // font-family: Roboto, sans-serif;
    font-family: Poppins, sans-serif;
    color: black;
    text-align: center;

    background-image: -webkit-linear-gradient(#FA482E, #F5B031, #F9DA99);
  }
`;
export default GlobalStyle;

/* all the pretty colors from the file thing
COLUMN ONE
#FFFFFF - white
#B4B4B4 = light gray
#808080 - gray
#4E4E4E - dark gray
#000000 - black

COLUMN TWO
#DAD6B0 - light light green
#B1AE83 - light green
#968326 - green
#5E5218 - dark green
#30300C - dark dark green

COLUMN THREE
#FDE8BD - light light yellow
#F9DA99 - light yellow
#F7B739 - yellow
#DD8023 - dark yellow
#4F2F09 - dark dark yellow

COLUMN FOUR
#FEC2B8 - light light red
#FBA294 - light red
#FA482E - red
#A5301E - dark red
#541911 - dark dark red

COLUMN FIVE
#E7EFF2 - light light blue
#B5C8D7 - light blue
#515072 - blue
#1C1B43 - dark blue
#100E23 - dark dark blue
*/