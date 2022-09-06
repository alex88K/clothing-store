import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbsContainer = styled.div`
  margin: 0 0 0.5em 0;
  font-size: 14px;
`;

export const BreadLink = styled(Link)`
  position: relative;
  margin: 0 18px 0 0;
  padding: 0;
  border-bottom: 1px solid #555;
  font-size: 16px;

  &:after {
    content: "/";
    position: absolute;
    right: -12px;
  }

  &:last-child {
    border: none;

    &:after {
      content: "";
    }
  }
`;
