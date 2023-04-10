//load initial all data and restore applied job data
const loadAllData = async () => {
  const getAllJobs = await fetch("jobdata.json");
  const allJobs = await getAllJobs.json();
  const getAssignmentData = await fetch("assignment.json");
  const assignmentData = await getAssignmentData.json();
  return { allJobs, assignmentData };
};

export { loadAllData };
