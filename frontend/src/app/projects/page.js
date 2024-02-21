"use client";
import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
  Checkbox,
} from "@mui/material";
import "./style.css";
import { gql, useQuery } from "@apollo/client";
import client from "../../../apollo.config";

const GET_JOBS = gql`
  query GetJobs {
    jobs {
      _id
      title
      description
      userId
      createdAt
      slug
      company
      location
      category
      requiredSkills
      responsibilities
      perks
      option
    }
  }
`;

const categories = [
  "IT and Technology",
  "Marketing",
  "Engineeringresponsibility",
];

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    client.query({ query: GET_JOBS }).then((result) => {
      const filteredJobs = result.data.jobs.filter(
        (job) => job.option === "Freelancing"
      );
      setJobs(filteredJobs);
    });
  }, []);

  return (
    <div className="job-list-container">
      <div className="categories-column">
        <Typography variant="h4" gutterBottom>
          Categories
        </Typography>
        <List className="categories-list">
          {jobs.map((job, index) => (
            <ListItem key={index} dense button>
              <Checkbox color="primary" />
              <ListItemText primary={job.category} />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="jobs-column">
        <Typography variant="h3" gutterBottom>
          Freelancing Projects
        </Typography>
        <List className="job-list">
          {jobs.map((job, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              className="job-list-item"
            >
              <ListItemAvatar>
                <Avatar
                  alt={job.title}
                  src={job.imageUrl}
                  className="job-avatar"
                />
              </ListItemAvatar>
              <ListItemText
                primary={job.title}
                secondary={
                  <>
                    <Typography
                      variant="subtitle2"
                      component="span"
                      color="textPrimary"
                    >
                      {job.location} | {job.company}
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      color="textSecondary"
                    >
                      {job.description}
                    </Typography>
                  </>
                }
              />
              <Button variant="contained" color="primary">
                Apply
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default JobList;
