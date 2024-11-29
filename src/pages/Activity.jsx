import React from "react";
import CardActivity from "../components/CardActivy";

const Activity = () => {
  const dataActivity = [
    {
      path: "/activity/1",
      title: "Activity 1",
    },
    {
      path: "/activity/2",
      title: "Activity 2",
    },
  ];

  return (
    <>
      <div className="flex-grow-1 d-flex flex-column">
        <div className="p-3" style={{ flex: "1 0 auto" }}>
          {dataActivity.map((activity, index) => (
            <CardActivity
              key={index}
              title={activity.title}
              path={activity.path}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Activity;
