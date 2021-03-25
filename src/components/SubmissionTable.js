import React from "react";
import Table from "react-bootstrap/Table";
import { view } from "react-easy-state";
import submission_store from "../stores/submission_store";
 
const SubmissionTable = props => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Desc.</th>
          <th>Anon. Submission</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {submission_store.getAllSubmissions()
.map((submission) => {
                    return (
                        <tr id={submission.id}>
                            <th>{submission.subject}</th>
                            <th>{submission.type}</th>
                            <th>{submission.priority}</th>
                            <th>{submission.description}</th>
                            <th>{submission.anonymous}</th>
                            <th>
                                <button onClick={() => submission_store.deleteSubmission(submission.id)}>
                                    Delete
                                </button>
                            </th>
                        </tr>
                    );
                })}
      </tbody>
    </Table>
  );
}

export default view(SubmissionTable)