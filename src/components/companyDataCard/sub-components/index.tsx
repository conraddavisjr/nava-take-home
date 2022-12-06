import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { CompanyData } from "../../../App";

type Cell = { label: string; value: string | number };

/** Template for displaying company data in a column */
export const ColumnData = ({ label, value }: Cell) => (
  <Grid item>
    <Typography variant="subtitle1" component="h5">
      {label}
    </Typography>
    <Typography variant="body1" component="h5">
      {value}
    </Typography>
  </Grid>
);

/** Template for displaying company data in a row format */
export const RowData = ({ label, value }: Cell) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Typography variant="subtitle1" component="h5" fontWeight="bold">
      {label}:&nbsp;
    </Typography>
    <Typography variant="body1" component="p">
      {value}
    </Typography>
  </div>
);

type CompanySummaryProps = Pick<
  CompanyData,
  "company_state" | "employee_count" | "plan_year"
>;
/** A component displaying a summary of a companies information.
 * Typically intended for use with the `CompanyDataCard` component */
export const CompanySummary: FC<CompanySummaryProps> = ({
  company_state,
  employee_count,
  plan_year,
}) => (
  <div style={{ display: "grid", justifyContent: "center" }}>
    <Grid container spacing={15} textAlign="center">
      <ColumnData label="State" value={company_state} />
      <ColumnData label="Employees" value={employee_count} />
      <ColumnData label="Year" value={plan_year} />
    </Grid>
  </div>
);

type CompanyDetailsProps = Pick<
  CompanyData,
  "premium_sum" | "participants_sum" | "broker_commission_sum"
>;
/** A component displaying additional details about a company.
 * Typically intended for use with the `CompanyDataCard` component */
export const CompanyDetails: FC<CompanyDetailsProps> = ({
  premium_sum,
  participants_sum,
  broker_commission_sum,
}) => (
  <div style={{ display: "grid", justifyContent: "center", gap: 9 }}>
    <RowData label="Premium" value={premium_sum} />
    <RowData label="Participants" value={participants_sum} />
    <RowData label="Broker Commissions" value={broker_commission_sum} />
  </div>
);
