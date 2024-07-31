import {Suspense} from "react";
import {Flex, Spin} from "antd";


const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Flex align="center" gap="middle">
        <Spin tip="Loading..." size="large" />
      </Flex>
    </div>
  )
}
const SuspenseElement = ({children}) => {
  return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  )
}

export {Loading, SuspenseElement}