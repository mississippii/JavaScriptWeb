import React from 'react';
import '../../../CSS/Career.css';

const Career = () => {
    return (
        <div className="career-page">
            <header className="career-header">
                <h1>Careers at Business Company</h1>
                <p>Join our team and help us build the future!</p>
            </header>
            <section className="job-openings">
                <h2>Current Job Openings</h2>
                <div className="job">
                    <h3>Software Engineer</h3>
                    <p>We are looking for a skilled software engineer with experience in Java and .NET to join our team.</p>
                    <button className="apply-button">Apply Now</button>
                </div>
                <div className="job">
                    <h3>Project Manager</h3>
                    <p>Seeking an experienced project manager to oversee and lead various projects within our company.</p>
                    <button className="apply-button">Apply Now</button>
                </div>
                {/* Add more job openings as needed */}
            </section>
            <section className="application-form">
                <h2>Submit Your Application</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <select id="position" name="position" required>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Project Manager">Project Manager</option>
                            {/* Add more positions as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resume">Resume</label>
                        <input type="file" id="resume" name="resume" required />
                    </div>
                    <button type="submit" className="submit-button">Submit Application</button>
                </form>
            </section>
        </div>
    );
}

export default Career;