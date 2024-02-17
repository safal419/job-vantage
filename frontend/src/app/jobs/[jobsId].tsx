import React from "react";
import { useRouter } from "next/router";

const JobDetails = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug, "=====", "--here");
  const router = useRouter();
  const {
    title,
    description,
    category,
    requiredSkills,
    responsibilities,
    perks,
    benefits,
  } = router.query;

  return (
    <div>
      <h1>{title}</h1>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Required Skills:</strong> {requiredSkills}
      </p>
      <p>
        <strong>Responsibilities:</strong> {responsibilities}
      </p>
      <p>
        <strong>Perks:</strong> {perks}
      </p>
      <p>
        <strong>Benefits:</strong> {benefits}
      </p>
    </div>
  );
};

export default JobDetails;
