import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import CompanyDataCard from "./components/companyDataCard/CompanyDataCard";
import { fetchData } from "./utils/fetchData";

// TODO: Add JSDocs - if within hour. Also, add skeleton loader + Suspense for more efficient loading / bundling
export interface CompanyData {
  broker_commission_sum: number;
  company_name: string;
  company_state: string;
  ein: number;
  employee_count: number;
  participants_sum: number;
  plan_year: number;
  premium_sum: number;
}

const companiesUrl =
  "https://gist.githubusercontent.com/gyermich/6ca0c6601932bae50d3c6eb75481d302/raw/416ab16e087fbc14c0a517aa8da7a9873c38dd1e/companies.json";

function App() {
  const [companies, setCompanies] = useState<CompanyData[]>();

  useEffect(() => {
    fetchData({ url: companiesUrl }).then(async (res) => {
      const companyData = await res.json();
      setCompanies(companyData);
    });
  }, []);
  return (
    <Container className="App" maxWidth="md">
      <div style={{ display: "grid", rowGap: "1.5rem", marginTop: "1rem" }}>
        {companies?.map((companyData) => (
          <CompanyDataCard
            key={`${companyData.ein}${companyData.company_name}`}
            {...companyData}
          />
        ))}
      </div>
    </Container>
  );
}

export default App;
