import React, { useMemo } from "react";
import experienceData from "../../data/experiences.json";
import styles from "./Experience.module.css";

const Experience = () => {
  const formattedExperienceData = useMemo(() => {
    return experienceData.map((item) => {
      const startDate = new Date(item.startDate);
      const endDate =
        item.endDate === "present" ? new Date() : new Date(item.endDate);

      const formattedStartDate = startDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      const formattedEndDate =
        item.endDate === "present"
          ? "Present"
          : endDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            });

      return {
        ...item,
        formattedStartDate,
        formattedEndDate,
      };
    });
  }, []);

  return (
    <div className="container">
      <section className="mt-5 mb-5">
        <div className={styles.experience}>
          <h2 className="text-center">Resume</h2>
          <p
            className="text-center margin-top:-50px;
}"
          >
            Please message me via any channel for a full resume
          </p>
          <div className={styles.experiencelist}>
            {formattedExperienceData.map((item) => (
              <div className={styles.experienceitem} key={item.id}>
                <div className={styles.date}>
                  {item.formattedStartDate} - {item.formattedEndDate}{" "}
                </div>
                <hr></hr>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                  <p>{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
