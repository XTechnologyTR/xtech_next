import Layout from "components/layout";
import SEO from "components/seo";
import React from "react";
import Banner from "sections/banner";
import BusinessProfit from "sections/business-profit";
import ClientFeedback from "sections/client-feedback";
import Feature from "sections/feature";
import Knowledge from "sections/knowledge";
import Support from "sections/support";
import WorkFlow from "sections/workflow";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Android Cep Telefonu Casus Yazılımı / Ebeveyn Kontrol Sistemleri"
          title="X Takip Sistemleri"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        <WorkFlow />
        <Support />
      </Layout>{" "}
    </ThemeProvider>
  );
}
