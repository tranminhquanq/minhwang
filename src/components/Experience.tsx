import { a11yDate, visibleDate } from "@/utils/date";

const experience = [
  {
    company: "Shopee",
    location: "Singapore",
    position: "Senior Software Engineer",
    startDate: "June, 2021",
    endDate: "Present",
    details: (
      <>
        <p>
          Building an enterprise dashboard where the retailers manage their
          catalogs, pick-up staffing and scheduling, as well as to view
          analytics around various business metrics.
        </p>
        <p>
          Tech stack: React, TypeScript, GraphQL, Apollo, Ruby on Rails, Golang
        </p>
      </>
    ),
  },
  {
    company: "Amazon Web Services",
    location: "Vancouver",
    position: "Front End Engineer",
    startDate: "June, 2020",
    endDate: "May, 2021",
    details: (
      <>
        <p>
          Worked on AWS IoT Console, migrating a legacy Angular monolithic
          codebase into multiple React packages owned by separate service teams
          with split pipelines and deployment bundles by adopting a
          micro-frontend architecture.
        </p>
        <p>
          Tech stack: React, Angular, TypeScript, AWS, React Query, single-spa
        </p>
      </>
    ),
  },
  {
    company: "Arista Networks",
    location: "Vnacouver",
    position: "Software Engineer",
    startDate: "Nov, 2019",
    endDate: "May, 2020",
    details: (
      <>
        <p>
          Worked on CloudVision Platform, a webapp which monitors data center
          networks’ hierarchy and performance.
        </p>
        <p>Tech stack: TypeScript, React/Redux, D3.js, WebSockets</p>
      </>
    ),
  },
];

const Experience = () => {
  return (
    <ul>
      {experience.map(({ company, details, endDate, position, startDate }) => (
        <li
          key={company}
          className="pb-2 pl-0 mb-4 border-b dark:border-warmGray-900 border-warmGray-200 before:contents"
        >
          <h3 className="m-0 text-base font-normal">{position}</h3>
          <div>
            <div className="flex justify-between text-sm text-warmGray-600 dark:text-warmGray-400 ">
              <div>{company}</div>
              <div>
                <time dateTime={a11yDate(startDate)}>
                  {visibleDate(startDate)}
                </time>
                {" - "}
                <time dateTime={a11yDate(endDate)}>{visibleDate(endDate)}</time>
              </div>
            </div>
            <div className="mt-4 text-sm">{details}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
