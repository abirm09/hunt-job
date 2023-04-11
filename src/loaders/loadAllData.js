import { getAddedJob } from "../utility/fakedb";

//load initial all data and restore applied job data
const loadAllData = async () => {
  const getAllJobs = await fetch("/jobdata.json");
  const allJobs = await getAllJobs.json();
  const getJobCategory = await fetch("/jobcategory.json");
  const jobCategory = await getJobCategory.json();
  const getAssignmentData = await fetch("/assignment.json");
  const assignmentData = await getAssignmentData.json();

  return { allJobs, assignmentData, jobCategory };
};

export { loadAllData };
