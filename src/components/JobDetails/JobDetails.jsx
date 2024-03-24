import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar, } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id, job_description, job_responsibility,educational_requirements,experiences , contact_information,salary,job_title  } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(id, job);
    return (
        <div>
            <h2>Jod Details of : {id}</h2>

            <div className="grid gap-4 md:grid-cols-4">

                <div className="border p-8 md:col-span-3">
                    <h2><span className="font-bold">Job Description:</span> {job.job_description}</h2>
                    <h2><span className="font-bold">Job Responsibilities:</span> {job.job_responsibility}</h2>
                    <h2><span className="font-bold">Educational Requerments:</span> </h2>
                    <p>{job.educational_requirements}</p>
                    <h2><span className="font-bold">Expriences:</span> </h2>
                    <p>{job.experiences}</p>
                </div>

                <div className="border p-8 text-white rounded-lg bg-[#7E90FE]">

                    <h2 className="text-2xl font-semibold">Job Details</h2>
                    <hr />
                     
                     <h2> <CiDollar></CiDollar> Salary : {job.salary}</h2>
                     <h2> <SlCalender></SlCalender> Job-Title: {job.job_title}</h2>
                   
                     <h2 className="text-2xl font-semibold">Contact Information: </h2>
                     <h2>Phone: {job.contact_information.phone}</h2>
                     <h2>Email: {job.contact_information.email}</h2>
                     <h2>Address: {job.contact_information.address}</h2>
                    
                     
                     <button className="btn btn-primary w-full">Apply Now</button>

                </div>

               

            </div>

        </div>
    );
};

export default JobDetails;