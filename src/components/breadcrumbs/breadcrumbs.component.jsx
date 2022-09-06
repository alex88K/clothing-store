import useBreadcrumbs from "use-react-router-breadcrumbs";

import { BreadcrumbsContainer, BreadLink } from "./breadcrumbs.styles";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <BreadcrumbsContainer>
      {breadcrumbs.map(({ match, breadcrumb }, inx, arr) => {
        if (inx !== arr.length - 1) {
          return (
            <BreadLink to={match.pathname} key={breadcrumb.key}>
              {breadcrumb}
            </BreadLink>
          );
        }
        return (
          <BreadLink as="span" key={breadcrumb.key}>
            {breadcrumb}
          </BreadLink>
        );
      })}
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
