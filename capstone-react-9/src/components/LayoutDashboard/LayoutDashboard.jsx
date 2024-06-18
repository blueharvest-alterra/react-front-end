import PropTypes from "prop-types";
import Sidebar from "../Organism/Sidebar/sidebar";
import Header from "../Organism/Header/Header";

export default function LayoutDashboard({ children }) {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-col pl-80 pr-[52px] items-center gap-4 pt-32 pb-8 bg-[#E6F6FF] min-h-screen w-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

LayoutDashboard.propTypes = {
  children: PropTypes.node.isRequired,
};
