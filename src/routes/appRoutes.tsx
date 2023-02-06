import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import AboutPage from "../pages/about/aboutPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import ExperienceCard from "../pages/dashboard/DashboardPageLayout";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/portfolio",
    element: <AboutPage />,
    state: "about",
    sidebarProps: {
      displayText: "About",
    }
  },
  {
    path: "/experience",
    element: <ExperienceCard />,
    state: "experience",
    sidebarProps: {
      displayText: "Experience",
    }
  },
  {
    path: "/projects",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Projects",
    }
  },
  {
    path: "/hobbies",
    element: <DocumentationPage />,
    state: "hobbies",
    sidebarProps: {
      displayText: "Hobbies"
    }
  },
  {
    path: "/contact",
    element: <ChangelogPage />,
    state: "contact",
    sidebarProps: {
      displayText: "Contact"
    }
  }
];

export default appRoutes;