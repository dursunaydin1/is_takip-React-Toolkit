import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../redux/jobSlice";
import Filter from "../componentes/Filter";

const JobList = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.jobReducer);

  useEffect(() => {
    axios
      .get("http://localhost:3055/jobs")
      .then((res) => dispatch(setJobs(res.data)));
  }, []);

  return (
    <>
      <Filter />
      <h3 className="job-count">
        Bulunan ( {state.jobs.length} ) iş arasından ({" "}
        {state.filtredJobs.length} ) tanesini görüntülüyorsunuz
      </h3>
      <section className="list-section">
        {!state.initialized ? (
          <p>Loading...</p>
        ) : (
          state.filtredJobs.map((job) => (
            <div className="job-card">
              <div className="head">
                <div className="letter">
                  <p>{job.company[0]}</p>
                </div>
                <div className="info">
                  <p>{job.position}</p>
                  <p>{job.company}</p>
                </div>
              </div>
              <div className="body">
                <div className="field">
                  <img src="/images/map.png" alt="" />
                  <p>{job.location}</p>
                </div>
                <div className="field">
                  <img src="/images/calendar.png" alt="" />
                  <p>{job.date}</p>
                </div>
                <div className="field">
                  <img src="/images/bag.png" alt="" />
                  <p>{job.type}</p>
                </div>
                <div className="status">
                  <span className={job.status}>{job.status}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default JobList;
