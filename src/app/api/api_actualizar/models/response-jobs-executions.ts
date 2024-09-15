/* tslint:disable */
/* eslint-disable */
import { JobExecutionDto } from './job-execution-dto';
import { NoConnection } from './no-connection';
export interface ResponseJobsExecutions {
  data?: null | Array<JobExecutionDto>;
  noConnections?: null | Array<NoConnection>;
}
