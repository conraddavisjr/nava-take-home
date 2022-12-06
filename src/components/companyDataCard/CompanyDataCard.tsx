import Card from "@mui/material/Card";
import {
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CompanyData } from "../../App";
import { FC, useState } from "react";
import { CompanyDetails, CompanySummary } from "./sub-components";

interface CompanyDataCardProps extends CompanyData {
  showDetailsLabel?: string;
  hideDetailsLabel?: string;
}

const CompanyDataCard: FC<CompanyDataCardProps> = (props) => {
  const {
    broker_commission_sum,
    company_name,
    company_state,
    employee_count,
    participants_sum,
    plan_year,
    premium_sum,
    showDetailsLabel = "Show More",
    hideDetailsLabel = "Show Less",
  } = props;

  const [showLabel, setShowLabel] = useState(showDetailsLabel);

  type ToggleAccordionFn = (
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) => void;

  const toggleAccordion: ToggleAccordionFn = (_, isExpanded) => {
    const showLabelCopy = isExpanded ? hideDetailsLabel : showDetailsLabel;
    setShowLabel(showLabelCopy);
  };

  return (
    <Card variant="outlined">
      <Box padding="2rem">
        <Typography
          variant="h6"
          component="h3"
          textAlign="center"
          fontWeight="bold"
          marginBottom="1rem"
        >
          {company_name}
        </Typography>
        <CompanySummary {...{ company_state, employee_count, plan_year }} />
      </Box>
      <Accordion onChange={toggleAccordion}>
        <AccordionSummary
          sx={{
            ".MuiAccordionSummary-content": {
              flex: 0,
              whiteSpace: "nowrap",
            },
          }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{showLabel}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CompanyDetails
            {...{ premium_sum, participants_sum, broker_commission_sum }}
          />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default CompanyDataCard;
