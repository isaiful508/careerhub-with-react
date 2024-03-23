
import { IoLocationSharp } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="text-[#7E90FE] px-5 mr-4 py-2 font-bold border rounded  border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className=" text-[#7E90FE] px-5  py-2 font-bold border rounded  border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-4 items-center text-[#757575]">
                <IoLocationSharp className="text-2xl"></IoLocationSharp><h2>{location}</h2>
                <CiDollar className="text-2xl"></CiDollar><h2>{salary}</h2>
                </div>

                <div className="card-actions ">
                    <button className="btn text-white bg-[#7E90FE]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;