import { Layout } from "./Layout";
import { usePageContext } from "./usePageContext";

export const App: React.FC = () => {
  const { Page, pageProps } = usePageContext();
  return (
    <Layout>
      <Page {...pageProps} />
    </Layout>
  );
};
