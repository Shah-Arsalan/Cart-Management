import { useContext, createContext, useState } from "react";

const PageContext = createContext("product-listing");

const PageProvider = ({ children }) => {
  const [page, setPage] = useState("product-listing");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => useContext(PageContext);

export { PageProvider, usePage };
