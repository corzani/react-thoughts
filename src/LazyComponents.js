import { Suspense, useState, useEffect, lazy } from "react";

const Loading = () => <div>LOADING</div>;

const DeleayComponent = ({ children }) => {
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShow(true);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, [show]);

  // return show && children;
  return <div>CIAO</div>;
};

export const SuspendingButton = () => (
  <Suspense fallback={<Loading />}>
    <DeleayComponent>
      <button>Lazy Button</button>
    </DeleayComponent>
  </Suspense>
);
