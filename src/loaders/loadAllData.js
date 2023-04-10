import { getAddedJob } from "../utility/fakedb";

//load initial all data and restore applied job data
const loadAllData = async () => {
  const getAllJobs = await fetch("/jobdata.json");
  const allJobs = await getAllJobs.json();
  const getJobCategory = await fetch("/jobcategory.json");
  const jobCategory = await getJobCategory.json();
  const getAssignmentData = await fetch("/assignment.json");
  const assignmentData = await getAssignmentData.json();
  //find applied jobs
  const addedJobId = getAddedJob();
  console.log(addedJobId);
  let addedJob = [];
  for (const job in addedJobId) {
    console.log(job);
    const isAdded = allJobs.find(job2 => job2.job_id == job);
    if (isAdded) {
      addedJob.push(isAdded);
    }
  }
  console.log(addedJob);
  return { allJobs, assignmentData, jobCategory };
};

export { loadAllData };
