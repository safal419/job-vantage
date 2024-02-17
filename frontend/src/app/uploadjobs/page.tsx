"use client";
import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { gql, useMutation } from "@apollo/client";
import client from "../../../apollo.config";

const CREATE_JOB_MUTATION = gql`
  mutation CreateJob(
    $title: String!
    $option: String!
    $description: String!
    $requiredSkills: String!
    $responsibilities: String!
    $perks: String!
    $imgUrls: String!
    $company: String!
    $category: String!
    $location: String!
  ) {
    createJob(
      title: $title
      option: $option
      description: $description
      requiredSkills: $requiredSkills
      responsibilities: $responsibilities
      perks: $perks
      userId: "userID"
      imgUrls: $imgUrls
      slug: "jobs"
      company: $company
      category: $category
      location: $location
    ) {
      _id
      title
      description
      responsibilities
      perks
      createdAt
    }
  }
`;

const CreateJobPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    option: "",
    requiredSkills: "",
    description: "",
    responsibilities: "",
    perks: "",
    imgUrls: "",
    company: "",
    category: "",
    location: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    client
      .mutate({
        mutation: CREATE_JOB_MUTATION,
        variables: formData,
      })
      .then((response) => {
        console.log("Job created:", response.data.createJob);
        setFormData({
          title: "",
          option: "",
          requiredSkills: "",
          description: "",
          responsibilities: "",
          perks: "",
          imgUrls: "",
          company: "",
          category: "",
          location: "",
        });
        setSuccessMessage("✅✅ Posted successfully!");
      })
      .catch((error) => {
        console.error("Error creating:", error);
      });
  };

  return (
    <div style={{ margin: "80px 150px" }}>
      <Typography variant="h4" gutterBottom>
        Create Job/ Freelancing Project
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "50ch",
            display: "flex",
            gap: "30px",
          },
        }}
      >
        <TextField
          required
          name="title"
          label="Job Title"
          value={formData.title}
          onChange={handleChange}
        />
        <FormControl sx={{ m: 1, minWidth: 170 }}>
          <InputLabel id="demo-simple-select-label">Job/Freelancing</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="option"
            value={formData.option}
            label="Option"
            onChange={handleChange}
          >
            <MenuItem value={"Job"}>Job</MenuItem>
            <MenuItem value={"Freelancing"}>Freelancing</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          name="requiredSkills"
          label="Required Skills (comma-separated)"
          value={formData.requiredSkills}
          onChange={handleChange}
        />
        <TextField
          required
          name="description"
          label="Job Description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          required
          name="responsibilities"
          label="Responsibilities"
          multiline
          rows={4}
          value={formData.responsibilities}
          onChange={handleChange}
        />
        <TextField
          required
          name="perks"
          label="Perks and Benefits"
          multiline
          rows={4}
          value={formData.perks}
          onChange={handleChange}
        />
        <TextField
          required
          name="imgUrls"
          label="Image URLs"
          value={formData.imgUrls}
          onChange={handleChange}
        />
        <TextField
          required
          name="company"
          label="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          required
          name="category"
          label="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <TextField
          required
          name="location"
          label="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        {successMessage && <Typography>{successMessage}</Typography>}{" "}
      </Box>
    </div>
  );
};

export default CreateJobPage;
