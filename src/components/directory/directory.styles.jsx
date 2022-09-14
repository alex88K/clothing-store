import styled from "styled-components";

export const DirectoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 2fr);
  grid-template-rows: auto;
  gap: 7.5px;
  height: calc(100vh - 150px);
  margin: 25px 0;
`;
