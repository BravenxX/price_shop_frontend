type MyAppProps = {
  Component: React.ReactNode;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: MyAppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
